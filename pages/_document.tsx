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
        <div className="fixed bottom-0 left-0 right-0">
          <Footer />
        </div>
      </body>
    </Html>
  );
}
