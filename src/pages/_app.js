import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from '../styles/globalStyles';
import Loader from "../components/Loader";
import Header from "../components/Header";
import { ScrollProvider } from '../context/scrollContext';

export default function App({ Component, pageProps }) {

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStart = () => setLoading(true);
  const handleComplete = () => setLoading(false);

  useEffect(() => {

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <ScrollProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
        )}
      </ThemeProvider>
    </ScrollProvider>
  )
}
