import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Northern Lights Fog Effect */}
      <div className="northern-lights"></div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
