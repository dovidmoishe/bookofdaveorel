import { Html, Head, Main, NextScript } from "next/document";
import { justAnotherHand, teko, bahianita } from "../../lib/fonts";


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={` ${justAnotherHand.variable} ${teko.variable} ${bahianita} antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
