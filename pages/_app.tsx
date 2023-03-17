import { Navbar } from 'nextra-theme-docs/.';
import '../styles/global.css';

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
