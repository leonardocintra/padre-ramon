"use client";

import { useEffect, useState } from "react";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export default function MassInvite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defines the limit date: January 13, 2026 at 23:59:59
    // Note: Month is 0-indexed in JS Date (0 = January)
    const limitDate = new Date(2026, 0, 13, 23, 59, 59);
    const now = new Date();

    if (now <= limitDate) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-4">
      <div className="bg-white/90 backdrop-blur-sm border border-stone-300 rounded-lg shadow-lg p-8 md:p-12 relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-stone-300 via-amber-700 to-stone-300" />

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-sm text-stone-500 uppercase tracking-wider">
            Centro Neocatecumenal de Brasília
          </p>
          <p className="text-sm text-stone-500 uppercase tracking-wider">
            Centro Neocatecumenal de Franca (SP)
          </p>
          <p className="text-sm text-stone-400 mt-2">
            Franca, 9 de janeiro de 2026
          </p>
        </div>

        <h2
          className={`${merriweather.className} text-2xl md:text-3xl font-bold text-stone-700 mb-6 tracking-wide text-center`}
        >
          Comunicado Importante
        </h2>

        <div className="mx-auto max-w-2xl text-base leading-relaxed text-stone-600 space-y-4">
          <p className="text-lg">Queridos irmãos,</p>

          <p>
            Na passada segunda-feira 5, na Catedral de Franca (SP), foi
            celebrada a Eucaristia em sufrágio pelos{" "}
            <strong className="font-semibold text-stone-800">
              30 anos de falecimento do Pe. Ramón Sevillano
            </strong>
            .
          </p>

          <p>
            Podem ver a notícia no site oficial do Caminho Neocatecumenal no
            Brasil em:{" "}
            <a
              href="https://cn.org.br/portal/celebracoes-em-sufragio-pelo-pe-ramon-sevillano-marcam-o-inicio-do-discernimento-sobre-sua-vida-e-testemunho-cristao/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-700 underline hover:text-amber-800 break-all"
            >
              cn.org.br
            </a>
          </p>

          <p>
            Como disseram os nossos catequistas da Equipe Nacional, na carta de
            27 de dezembro passado:{" "}
            <em className="italic text-stone-700">
              «...pedimos que na celebração da Eucaristia, na qual todas as
              comunidades do Brasil celebrarão no sábado (noite) 10 de janeiro,
              seja colocada a intenção pela alma do Pe. Ramón...»
            </em>
          </p>

          <p>
            Solicitamos que o responsável da 1ª comunidade de cada paróquia (ou
            em cada celebração) envie para nós os seguintes dados:
          </p>

          {/* Data to send section */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 my-6">
            <h3
              className={`${merriweather.className} text-lg font-bold text-amber-800 mb-4 text-center`}
            >
              Dados para enviar de cada celebração da Eucaristia:
            </h3>
            <ul className="space-y-2 text-stone-700">
              <li className="flex">
                <span className="font-semibold min-w-48">Diocese:</span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">Cidade:</span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">Nome da Paróquia:</span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  Nome do presbítero que preside:
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  Qtd. de comunidades neocatecumenais:
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  Qtd. de irmãos (aproximadamente):
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  Data e hora da celebração:
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  Nome do Responsável:
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-48">
                  E-mail e celular do Responsável:
                </span>
                <span className="text-stone-400">___________________</span>
              </li>
              <li className="flex items-center">
                <span className="font-semibold min-w-48">Anexar:</span>
                <span className="text-stone-500 text-sm">
                  1 ou 2 fotos da assembleia
                </span>
              </li>
            </ul>
          </div>

          <p className="text-stone-600 italic text-sm">
            Estes dados serão destinados ao arquivo do processo, cujo início se
            dará na Diocese de Franca.
          </p>

          {/* Send info box */}
          <div className="bg-stone-100 border border-stone-300 rounded-lg p-6 my-6 text-center">
            <p className="font-semibold text-stone-800 mb-2">
              Enviar para a Secretaria do processo do Pe. Ramón:
            </p>
            <a
              href="mailto:causadepadreramon@gmail.com"
              className="text-lg text-amber-700 font-bold hover:text-amber-800"
            >
              causadepadreramon@gmail.com
            </a>
            <p className="mt-4 text-red-600 font-semibold">
              ⚠️ Enviar até 13 de janeiro de 2026
            </p>
          </div>

          <div className="flex justify-center my-6">
            <span className="h-px w-40 bg-amber-900" />
          </div>

          <p className="text-stone-600">
            Rezamos também hoje, 9 de janeiro, por{" "}
            <strong className="font-semibold">Kiko Argüello</strong>, no
            aniversário dos seus 87 anos, para que o Senhor o sustente, assim
            como ao Pe. Mario Pezzi e Maria Ascensión, na Evangelização Mundial
            do Caminho.
          </p>

          <p className="text-lg mt-6">A paz.</p>

          {/* Signatures */}
          <div className="mt-6 text-stone-700">
            <p className="font-semibold">Ismael Rodrigues Alves</p>
            <p className="font-semibold">José Ronaldo Bachur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
