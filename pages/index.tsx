import Head from "next/head";
import { Inter } from "@next/font/google";
import Cabecalho from "../components/Cabecalho";
import Banner from "../components/Banner";
import QuadroPost from "../components/QuadroPost";

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
        {/* <BarraMenu></BarraMenu> */}
        <Cabecalho />
        <Banner />
        <QuadroPost></QuadroPost>
        {/* <CardExperimental titulo="ronaldo" descricao="ronaldo" rodape="robinho" /> */}
      </main>
    </>
  );
}
