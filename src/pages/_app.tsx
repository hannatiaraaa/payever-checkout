import 'src/styles/globals.css';
import type { AppProps } from 'next/app';

import { Roboto } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300', '400', '500', '700', '900'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`overflow-hidden ${roboto.className}`}>
      <ThemeProvider attribute='class'>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
