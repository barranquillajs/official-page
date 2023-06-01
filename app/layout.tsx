import { ClientStyleHelper } from '@/components';
import '@/styles/globals.css';
import '@/styles/colors.css';

import { dmSans, firaCode } from './fonts';
import { returnMetadata } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = returnMetadata({});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  console.log(firaCode.className);
  return (
    <html className={`${firaCode.variable} ${dmSans.variable}`} lang="es">
      <head />
      <body>
        <ClientStyleHelper />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
