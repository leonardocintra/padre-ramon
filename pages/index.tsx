import Head from "next/head";
import { Inter } from "@next/font/google";
import Cabecalho from "../components/Cabecalho";
import QuadroPost from "../components/QuadroPost";
import QuadroFotos from "../components/QuadroFotos";
import Footer from "../components/Footer";
import QuadroVideo from "../components/QuadroVideo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Padre Ramón</title>
        <meta name="Padre Ramon" content="Biografia de Padre Ramon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Cabecalho
          titulo="Padre Ramón Sevillano Valencia"
          subTitulo="31/08/1943 - 01/05/1996"
        />
        <QuadroPost></QuadroPost>

        <QuadroFotos></QuadroFotos>
        
        <QuadroVideo></QuadroVideo>

        <Footer></Footer>
      </main>
    </>
  );
}
