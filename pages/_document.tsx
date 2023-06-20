import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/Footer";
import Cabecalho from "../components/Cabecalho";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
        <Cabecalho />
        <Main />
        <NextScript />

        <Footer />
      </body>
    </Html>
  );
}
