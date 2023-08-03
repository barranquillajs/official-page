import { Metadata } from 'next';

import { returnMetadata } from '@/utils';
import '@/styles/globals.css';

import { ubuntu } from './fonts';

export const metadata: Metadata = returnMetadata({});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={`${ubuntu.variable}`} lang="es">
      <head />
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
};

export default RootLayout;
