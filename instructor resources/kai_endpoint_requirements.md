# Kai Endpoint Requirements

Steven's dashboard is a public GitHub Pages app, so it must not contain API keys,
ChatGPT credentials, or permanent passwords.

## Dashboard request

The Ask Kai drawer sends a POST request to the configured endpoint.

Required header:

```http
Authorization: Bearer STEVEN_ACCESS_TOKEN
Content-Type: application/json
```

Request body:

```json
{
  "message": "Create a quick asthma vs anaphylaxis check question.",
  "history": [],
  "context": {
    "dashboard": "Steven's Instructor Command Center",
    "week": "Week 2: Respiratory + Anaphylaxis",
    "group": "A",
    "day": 1,
    "currentActivity": {},
    "agenda": [],
    "handouts": [],
    "resources": []
  }
}
```

## Endpoint response

Return one of these fields:

```json
{
  "reply": "Here is a board-ready prompt..."
}
```

## Security checklist

- Keep the OpenAI/API key on the server only.
- Validate Steven's access token on the server before calling Kai.
- Use HTTPS for a public endpoint.
- Allow CORS only from the trusted dashboard origin.
- Do not commit tokens, passwords, API keys, or tunnel URLs that should remain private.
- If running from Mauro's desktop, expose the endpoint through a secure tunnel, VPN, or same-network firewall rule.
