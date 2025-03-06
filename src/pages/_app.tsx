import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { justAnotherHand, teko } from "../../lib/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${justAnotherHand.style.fontFamily}, ${teko.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
