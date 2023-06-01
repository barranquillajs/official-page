import cn from 'classnames';

import { ClientStyleHelper } from '@/components';
import '@/styles/globals.css';
import '@/styles/colors.css';

import { dmSans, firaCode } from './fonts';
import { returnMetadata } from '@/utils';
import { Metadata } from 'next';

export const metadata: Metadata = returnMetadata({});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={cn(firaCode.className, dmSans.className)} lang="es_CO">
      <head />
      <body>
        <ClientStyleHelper />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
