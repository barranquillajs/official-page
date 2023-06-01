import cn from 'classnames';

import { ClientStyleHelper } from '@/components';
import '@/styles/globals.css';
import '@/styles/colors.css';

import { dmSans, firaCode } from './fonts';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className={cn(firaCode.className, dmSans.className)}>
      <head />
      <body>
        <ClientStyleHelper />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
