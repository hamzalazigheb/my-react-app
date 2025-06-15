import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
// import Head from 'next/head'; // No longer needed for Font Awesome CDN
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAtFooter, setIsAtFooter] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      
      setIsAtFooter(scrollTop + windowHeight > documentHeight - 100);

      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <SessionProvider session={session}>
      <div className={`App ${isLoaded ? 'loaded' : ''}`}>
        {/* <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </Head> */}
        <Navbar 
          isScrollingDown={isScrollingDown} 
          isAtFooter={isAtFooter} 
        />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default MyApp; 