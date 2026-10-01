import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chad Thurman | Director of Photography & Cinematographer',
  description: 'Official portfolio and reel for Chad Thurman. Specializing in ocean, underwater, high-speed action, and commercial cinematography.',
  openGraph: {
    title: 'Chad Thurman | Director of Photography',
    description: 'Cinematography and directorial reel from the North Shore of Oahu.',
    images: ['/poster.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black">{children}</body>
    </html>
  );
}
