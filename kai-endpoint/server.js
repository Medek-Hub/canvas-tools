"use strict";

const crypto = require("crypto");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const OpenAI = require("openai");

dotenv.config();

const HOST = process.env.HOST || "127.0.0.1";
const PORT = Number(process.env.PORT || 8787);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-4o-mini";
const STEVEN_USERNAME = process.env.STEVEN_USERNAME;
const STEVEN_ACCESS_CODE = process.env.STEVEN_ACCESS_CODE;
const STEVEN_ACCESS_EXPIRES_AT = process.env.STEVEN_ACCESS_EXPIRES_AT;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

const accessUnavailableMessage = "Ask Kai access is currently unavailable.";
const serverFailureMessage = "Kai request failed. Ask Mauro to check the Kai server.";

function requiredEnv(name, value) {
  if (!value) {
    console.error(`Missing ${name} in .env`);
    process.exit(1);
  }
}

requiredEnv("OPENAI_API_KEY", OPENAI_API_KEY);
requiredEnv("STEVEN_USERNAME", STEVEN_USERNAME);
requiredEnv("STEVEN_ACCESS_CODE", STEVEN_ACCESS_CODE);

if (!STEVEN_ACCESS_EXPIRES_AT || Number.isNaN(Date.parse(STEVEN_ACCESS_EXPIRES_AT))) {
  console.error("Missing or invalid STEVEN_ACCESS_EXPIRES_AT in .env");
  process.exit(1);
}

if (!Number.isFinite(PORT) || PORT <= 0) {
  console.error("Missing or invalid PORT in .env");
  process.exit(1);
}

if (allowedOrigins.length === 0) {
  console.warn("ALLOWED_ORIGINS is empty. Set it before exposing this endpoint outside local testing.");
}

const accessEndsAt = new Date(STEVEN_ACCESS_EXPIRES_AT);
const app = express();
const openai = new OpenAI({ apiKey: OPENAI_API_KEY });

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    callback(new Error("Origin not allowed"));
  }
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "1mb" }));

function timingSafeEqualString(value, expected) {
  const valueBuffer = Buffer.from(String(value || ""), "utf8");
  const expectedBuffer = Buffer.from(String(expected || ""), "utf8");
  if (valueBuffer.length !== expectedBuffer.length) {
    const maxLength = Math.max(valueBuffer.length, expectedBuffer.length, 1);
    const paddedValue = Buffer.alloc(maxLength);
    const paddedExpected = Buffer.alloc(maxLength);
    valueBuffer.copy(paddedValue);
    expectedBuffer.copy(paddedExpected);
    crypto.timingSafeEqual(paddedValue, paddedExpected);
    return false;
  }
  return crypto.timingSafeEqual(valueBuffer, expectedBuffer);
}

function bearerToken(req) {
  const header = req.get("authorization") || "";
  const match = header.match(/^Bearer\s+(.+)$/i);
  return match ? match[1].trim() : "";
}

function denyAccess(res, status = 401) {
  return res.status(status).json({
    ok: false,
    error: accessUnavailableMessage
  });
}

function authenticateSteven(req, res, next) {
  if (Date.now() >= accessEndsAt.getTime()) {
    return denyAccess(res, 403);
  }

  const username = req.get("x-kai-user") || req.body?.username || "";
  const token = bearerToken(req);
  const usernameMatches = timingSafeEqualString(username, STEVEN_USERNAME);
  const tokenMatches = timingSafeEqualString(token, STEVEN_ACCESS_CODE);

  if (!usernameMatches || !tokenMatches) {
    return denyAccess(res, 401);
  }

  return next();
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/kai", authenticateSteven, async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  const context = req.body?.context || {};
  const source = typeof req.body?.source === "string" ? req.body.source : "Steven dashboard";

  if (!message) {
    return res.status(400).json({
      ok: false,
      error: serverFailureMessage
    });
  }

  try {
    const contextText = typeof context === "string" ? context : JSON.stringify(context, null, 2);
    const completion = await openai.chat.completions.create({
      model: OPENAI_MODEL,
      temperature: 0.35,
      messages: [
        {
          role: "system",
          content: [
            "You are Kai, a concise EMS course assistant for Steven's Instructor Command Center.",
            "Use the supplied dashboard context to generate classroom-ready teaching support.",
            "Do not invent hidden credentials, server settings, or private configuration values."
          ].join(" ")
        },
        {
          role: "user",
          content: [
            `Source: ${source}`,
            "",
            "Dashboard context:",
            contextText,
            "",
            "Steven's request:",
            message
          ].join("\n")
        }
      ]
    });

    const answer = completion.choices?.[0]?.message?.content?.trim() || "";
    return res.json({
      ok: true,
      answer
    });
  } catch (error) {
    console.error("Kai request failed:", error.message);
    return res.status(500).json({
      ok: false,
      error: serverFailureMessage
    });
  }
});

app.use((error, req, res, next) => {
  console.error("Kai endpoint error:", error.message);
  res.status(500).json({
    ok: false,
    error: serverFailureMessage
  });
});

app.listen(PORT, HOST, () => {
  console.log(`Kai secure endpoint listening on http://${HOST}:${PORT}`);
});
