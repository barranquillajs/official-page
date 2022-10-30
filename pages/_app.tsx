import type { AppProps } from 'next/app';
import cn from 'classnames';

import { Fira_Code, DM_Sans } from '@next/font/google';

import '../styles/globals.css';
import '../styles/colors.css';

const firaCode = Fira_Code({
  weight: 'variable',
});

const dmSans = DM_Sans({
  weight: '400',
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} classname={cn(firaCode.className, dmSans.className)} />;
};

export default MyApp;
