import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Agentic Mail Assistant',
  description: 'Auto-reply to important emails and unsubscribe from marketing.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{ maxWidth: 900, margin: '40px auto', padding: 24 }}>
          <h1 style={{ fontSize: 28, marginBottom: 10 }}>Agentic Mail Assistant</h1>
          <p style={{ color: '#666', marginBottom: 20 }}>
            Automatically replies to formal/important emails and unsubscribes from marketing.
          </p>
          {children}
        </div>
      </body>
    </html>
  );
}
