import '../styles/globals.css'; // Ensure global styles are imported first
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure Bootstrap JS and its dependencies (Popper.js) are loaded on the client-side
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
