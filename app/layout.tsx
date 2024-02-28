import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { IBM_Plex_Sans } from 'next/font/google';
import type { Metadata } from 'next';
import { cn } from '@/lib/utils';

const IBMPlex = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex',
});

export const metadata: Metadata = {
	title: 'PixelPulse',
	description: 'The Most Popular Web AI Image Generator',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider
			appearance={{
				variables: { colorPrimary: '#624cf5' },
			}}>
			<html lang="en">
				{/* Establece las clases CSS para el elemento <body>. Está utilizando una combinación de clases, donde 'font-IBMPlex' indica el uso de la fuente IBM Plex, 'antialiased' sugiere el uso de suavizado de bordes para mejorar la legibilidad de las fuentes, y IBMPlex.variable indica el uso de variables de fuente específicas de IBM Plex. */}
				<body
					className={cn(
						'font-IBMPlex antialiased',
						IBMPlex.variable
					)}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
