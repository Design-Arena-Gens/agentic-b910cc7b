import { NextRequest } from 'next/server';
import { runEmailAgent } from '@/lib/emailAgent';

export const dynamic = 'force-dynamic';

export async function POST(_req: NextRequest) {
  try {
    const { result, log } = await runEmailAgent();
    return new Response(JSON.stringify({ ok: true, result, log }), { status: 200, headers: { 'content-type': 'application/json' } });
  } catch (err: any) {
    return new Response(JSON.stringify({ ok: false, error: err?.message || String(err) }), { status: 500, headers: { 'content-type': 'application/json' } });
  }
}

export async function GET(req: NextRequest) {
  // Allow GET for cron and manual checks
  return POST(req);
}
