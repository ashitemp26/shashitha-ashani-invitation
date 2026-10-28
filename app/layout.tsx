import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Great_Vibes } from 'next/font/google';
import './globals.css';
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','500','600'] });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const script = Great_Vibes({ subsets: ['latin'], variable: '--font-script', weight: '400' });
export const metadata: Metadata = { title: 'Shashitha & Ashani | Wedding Invitation', description: 'Together with our families, we invite you to celebrate our wedding on 4 December 2026.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${cormorant.variable} ${manrope.variable} ${script.variable}`}>{children}</body></html>; }
