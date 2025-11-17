# Agentic Mail Assistant

Automatically replies to formal/important emails and unsubscribes from marketing emails.

## Quick Start

1. Copy `.env.example` to `.env.local` and fill in your IMAP/SMTP details.
2. Install dependencies and run locally:

```bash
npm install
npm run dev
```

3. Visit `http://localhost:3000` and click "Run" to trigger a scan.

## Deployment (Vercel)

This project includes a Vercel cron that hits `/api/run` every 15 minutes. Deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-b910cc7b
```

Ensure environment variables are set in Vercel project settings or via `vercel env`.

## Configuration

See `.env.example` for available variables:

- `IMAP_*`: IMAP server to read incoming mail
- `SMTP_*`: SMTP server to send replies/unsubscribes
- `FROM_*`: Identity used when sending replies
- `SCAN_LOOKBACK_DAYS`: Only scan messages newer than this (default 7)
- `MAX_EMAILS_PER_RUN`: Limit per run to keep executions fast (default 25)

## Notes

- Classification is heuristic: messages with `List-Unsubscribe` are treated as marketing. Some keywords and domain heuristics are used to infer formal/important.
- To avoid loops, the agent ignores `Auto-Submitted` messages and sets `Auto-Submitted: auto-replied` and `X-Auto-Response-Suppress: All` on replies.
- Unsubscribe flow prioritizes `List-Unsubscribe` links (mailto or one-click HTTP/HTTPS), falls back to searching for unsubscribe links in the body.
