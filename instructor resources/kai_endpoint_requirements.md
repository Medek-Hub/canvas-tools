# Kai Endpoint Requirements

Steven's dashboard is a public GitHub Pages app, so it must not contain API keys,
ChatGPT credentials, private access codes, or private server configuration values.

## Dashboard Request

The Ask Kai drawer sends a POST request to the configured endpoint.

Required headers:

```http
Authorization: Bearer PRIVATE_ACCESS_CODE
Content-Type: application/json
X-Kai-User: Steven
```

Request body:

```json
{
  "username": "Steven",
  "message": "Create a quick asthma vs anaphylaxis check question.",
  "context": {
    "dashboard": "Steven's Instructor Command Center",
    "week": "Week 2: Respiratory + Anaphylaxis",
    "group": "A",
    "day": 1,
    "currentActivity": {},
    "agenda": [],
    "handouts": [],
    "resources": []
  },
  "source": "Steven dashboard"
}
```

## Endpoint Response

Expected success response:

```json
{
  "ok": true,
  "answer": "Kai response here"
}
```

Expected denial response:

```json
{
  "ok": false,
  "error": "Ask Kai access is currently unavailable."
}
```

## Safe Local Setup

- Keep the real `.env` only on Mauro's desktop.
- Copy `kai-endpoint/.env.example` to `kai-endpoint/.env` locally, then replace placeholders privately.
- Set `ALLOWED_ORIGINS` to the root GitHub Pages origin when using the public dashboard.
- Restart the endpoint after private `.env` changes.

## Remote Access

`127.0.0.1` only works from the same computer running the endpoint. For another
computer, use a secure tunnel or VPN URL and paste that full `/api/kai` URL into
the dashboard drawer.

Do not direct-port-forward Mauro's desktop.

## Security Checklist

- Keep the OpenAI/API key on the server only.
- Validate username and bearer code on the server before calling Kai.
- Use HTTPS for a public endpoint.
- Allow CORS only from the trusted dashboard origin.
- Do not commit tokens, passwords, API keys, private `.env` files, or tunnel URLs that should remain private.
