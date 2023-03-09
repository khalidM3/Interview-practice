import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans } from 'next/font/google'
const noto = Noto_Sans({ subsets: ['latin'], weight: ["300", "400", "700"] })


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={noto.className}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </div>
  );
}
