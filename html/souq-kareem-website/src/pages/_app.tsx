import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import useDarkMode from '../hooks/useDarkMode';

function MyApp({ Component, pageProps }: AppProps) {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <Component {...pageProps} />
  );
}

export default MyApp;