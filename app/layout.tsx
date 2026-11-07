import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope, Great_Vibes, Italianno, Tangerine } from 'next/font/google';
import './globals.css';
const cormorant = Cormorant_Garamond({ subsets: ['latin'], variable: '--font-cormorant', weight: ['400','500','600'] });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' });
const script = Great_Vibes({ subsets: ['latin'], variable: '--font-script', weight: '400' });
const italianno = Italianno({ subsets: ['latin'], variable: '--font-italianno', weight: '400' });
const tangerine = Tangerine({ subsets: ['latin'], variable: '--font-tangerine', weight: ['400','700'] });
export const metadata: Metadata = {
	metadataBase: new URL('https://shashitha-ashani-invitation.vercel.app'),
	title: 'Ashani & Shashitha | Wedding Invitation',
	description: 'Together with our families, we invite you to celebrate our wedding on 4 December 2026.',
	openGraph: {
		title: 'Shashitha & Ashani | Wedding Invitation',
		description: 'Together with our families, we invite you to celebrate our wedding on 4 December 2026.',
		url: '/',
		siteName: 'Shashitha & Ashani',
		type: 'website',
		images: [{ url: '/WBP_4595.jpg.webp', alt: 'Shashitha and Ashani together' }],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ashani & Shashitha | Wedding Invitation',
		description: 'Together with our families, we invite you to celebrate our wedding on 4 December 2026.',
		images: ['/WBP_4595.jpg.webp'],
	},
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body className={`${cormorant.variable} ${manrope.variable} ${script.variable} ${italianno.variable} ${tangerine.variable}`}>{children}</body></html>; }
