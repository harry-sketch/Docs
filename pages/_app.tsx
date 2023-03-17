import "../styles/global.css";

export default function Nextra({ Component, pageProps }) {
  const getLayout =
    (Component as any).getLayout || ((page: React.ReactElement) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
}
