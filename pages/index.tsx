import Head from 'next/head'
import { Inter } from '@next/font/google'
import Cabecalho from '../components/Cabecalho'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Padre Ramón</title>
        <meta name="Padre Ramon" content="Biografia de Padre Ramon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen p-5 bg-gradient-to-r from-yellow-50 via-cyan-100 to-yellow-50">
        <Cabecalho titulo='Padre Ramon' subTitulo='31/08/1943 - 01/05/1996' />
      </main>
    </>
  )
}
