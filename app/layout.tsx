import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Horizon Stories | Cinematic Storytelling Experience',
  description: 'An immersive scroll-triggered storytelling experience with cinematic visuals and luxury design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-luxury-black text-white antialiased">{children}</body>
    </html>
  );
}
