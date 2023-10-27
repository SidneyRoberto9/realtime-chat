import type { Metadata } from 'next';
import '@/styles/globals.css';

import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import Favicon from '/public/favicon.ico';

import { Providers } from '@/components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Realtime Chat',
  description: 'A realtime chat application built with Next.js and Socket.io.',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-dark-blue-primary antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
