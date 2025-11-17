"use client";
import { useState } from 'react';

export default function Page() {
  const [running, setRunning] = useState(false);
  const [output, setOutput] = useState<string>("");

  async function runAgent() {
    setRunning(true);
    setOutput("");
    try {
      const res = await fetch('/api/run', { method: 'POST' });
      const data = await res.json();
      setOutput(data?.log ?? JSON.stringify(data, null, 2));
    } catch (err: any) {
      setOutput(err?.message ?? String(err));
    } finally {
      setRunning(false);
    }
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <div>
          <div className="badge">Manual Run</div>
          <h2 style={{ margin: '8px 0' }}>Run Agent Now</h2>
          <p style={{ color: '#6b7280' }}>Triggers a one-time scan and action across recent emails.</p>
        </div>
        <button onClick={runAgent} disabled={running} style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #d1d5db', background: running ? '#f3f4f6' : 'white' }}>
          {running ? 'Running?' : 'Run'}
        </button>
      </div>

      <pre style={{ marginTop: 16, background: '#0b1220', color: '#e5e7eb', padding: 12, borderRadius: 8, maxHeight: 400, overflow: 'auto' }}>
        {output || 'Output will appear here.'}
      </pre>
    </div>
  );
}
