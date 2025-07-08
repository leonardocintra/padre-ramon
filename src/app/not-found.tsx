"use client";

import Link from "next/link";
import Image from "next/image";
import { JSX, useState } from "react";

interface Versiculo {
  livro: string;
  frase: string;
}

export default function NotFound(): JSX.Element {
  const [versiculoAtual, setVersiculoAtual] = useState<Versiculo | null>(null);
  const [mostrandoVersiculo, setMostrandoVersiculo] = useState(false);

  const versiculos: Versiculo[] = [
    {
      livro: "Isaías 40:31",
      frase:
        "Aqueles que esperam no Senhor renovam as suas forças, alçam voo como as águias, correm e não se cansam, caminham e não se fatigam.",
    },
    {
      livro: "João 14:6",
      frase:
        "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão por mim.",
    },
    {
      livro: "Mateus 11:28",
      frase:
        "Vinde a mim, todos os que estais cansados e sobrecarregados, e eu vos aliviarei.",
    },
    {
      livro: "Salmos 23:1",
      frase: "O Senhor é o meu pastor, nada me faltará.",
    },
    {
      livro: "Filipenses 4:13",
      frase: "Tudo posso naquele que me fortalece.",
    },
    {
      livro: "Romanos 8:28",
      frase:
        "Sabemos que todas as coisas cooperam para o bem daqueles que amam a Deus.",
    },
    {
      livro: "1 Coríntios 13:4-5",
      frase:
        "O amor é paciente, é benigno; o amor não é invejoso, não se vangloria, não se ensoberbece, não se porta com indecência.",
    },
    {
      livro: "Jeremias 29:11",
      frase:
        "Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais.",
    },
    {
      livro: "Salmos 46:1",
      frase:
        "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
    },
    {
      livro: "João 3:16",
      frase:
        "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.",
    },
    {
      livro: "Mateus 5:3",
      frase:
        "Bem-aventurados os pobres de espírito, porque deles é o reino dos céu.",
    },
    {
      livro: "Salmos 121:1-2",
      frase:
        "Elevo os meus olhos para os montes, de onde me virá o socorro. O meu socorro vem do Senhor, que fez o céu e a terra.",
    },
    {
      livro: "2 Coríntios 12:9",
      frase:
        "A minha graça te basta, porque o meu poder se aperfeiçoa na fraqueza.",
    },
    {
      livro: "Provérbios 3:5-6",
      frase:
        "Confia no Senhor com todo o teu coração, e não te estripes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas.",
    },
    {
      livro: "Mateus 6:26",
      frase:
        "Olhai para as aves do céu, que não semeiam, nem segam, nem ajuntam em celeiros; e vosso Pai celestial as alimenta.",
    },
    {
      livro: "1 Pedro 5:7",
      frase:
        "Lançando sobre ele toda a vossa ansiedade, porque ele tem cuidado de vós.",
    },
    {
      livro: "Salmos 27:1",
      frase:
        "O Senhor é a minha luz e a minha salvação; de quem me recearei? O Senhor é a fortaleza da minha vida; de quem me atemorizarei?",
    },
    {
      livro: "João 14:27",
      frase:
        "Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize.",
    },
    {
      livro: "Romanos 8:31",
      frase:
        "Que diremos, pois, a estas coisas? Se Deus é por nós, quem será contra nós?",
    },
    {
      livro: "Mateus 11:29",
      frase:
        "Tomai sobre vós o meu jugo, e aprendei de mim, que sou manso e humilde de coração; e encontrareis descanso para as vossas almas.",
    },
  ];

  const obterVersiculoAleatorio = () => {
    const indiceAleatorio = Math.floor(Math.random() * versiculos.length);
    const novoVersiculo = versiculos[indiceAleatorio];
    setVersiculoAtual(novoVersiculo);
    setMostrandoVersiculo(true);
  };

  const fecharVersiculo = () => {
    setMostrandoVersiculo(false);
    setVersiculoAtual(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Imagem Central */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-2xl border-4 border-blue-800">
            <Image
              src="/padre-ramon.jpg"
              alt="Padre Ramón"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Título de Erro */}
        <h1 className="text-6xl font-bold text-blue-900 mb-4">404</h1>

        {/* Mensagem Principal */}
        <h2 className="text-2xl md:text-3xl font-semibold text-blue-800 mb-6">
          Página não encontrada
        </h2>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          A página que você está procurando não foi encontrada ou não existe
          mais. Como nos ensina a fé, às vezes nos perdemos no caminho, mas
          sempre podemos encontrar o rumo de volta.
        </p>

        {/* Descrição Bíblica */}
        <div className="bg-blue-50 border-l-4 border-blue-800 p-6 mb-8 rounded-r-lg">
          <p className="text-gray-700 italic mb-2">
            &quot;Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai senão
            por mim.&quot;
          </p>
          <p className="text-sm text-blue-800 font-semibold">João 14:6</p>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            Assim como Cristo nos guia em nossa jornada espiritual, deixe que
            sua fé o conduza de volta ao caminho certo. A oração e a confiança
            em Deus nos ajudam a encontrar a direção mesmo nos momentos de
            incerteza.
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Voltar para a Home
          </Link>

          <button
            onClick={obterVersiculoAleatorio}
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-lg"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 ├─ 6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Fazer uma Oração
          </button>
        </div>

        {/* Mensagem de Esperança */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            &quot;Aqueles que esperam no Senhor renovam as suas forças&quot; -
            Isaías 40:31
          </p>
        </div>
      </div>

      {/* Modal do Versículo */}
      {mostrandoVersiculo && versiculoAtual && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl">
            <div className="text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-blue-800 mb-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 2a2 2 0 000 3.07 2 2 0 002 2v1.534a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 002-2 2 2 0 000-3.07 2 2 0 00-2-2H4a2 2 0 00-2 2z" />
                  <path d="M8 9a2 2 0 012-2h4a2 2 0 012 2v8a2 2 0 01-2 2h-4a2 2 0 01-2-2V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Oração do Coração
              </h3>
              <div className="mb-6">
                <p className="text-gray-700 italic text-lg mb-4 leading-relaxed">
                  &quot;{versiculoAtual.frase}&quot;
                </p>
                <p className="text-blue-800 font-semibold">
                  {versiculoAtual.livro}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={obterVersiculoAleatorio}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Novo Versículo
                </button>
                <button
                  onClick={fecharVersiculo}
                  className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors duration-200"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
