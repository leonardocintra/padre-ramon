"use client";

import { useEffect, useState } from "react";
import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dadosTemplate = `Diocese:
Cidade:
Nome da Paróquia:
Nome do presbítero que preside a celebração:
Quantidade de comunidades neocatecumenais:
Quantidade de irmãos (aproximadamente):
Data e hora da celebração:
Nome e sobrenome do Responsável que envia os dados:
E-mail e celular do Responsável:
(Anexar 1 ou 2 fotos da assembleia)`;

export default function MassInvite() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Defines the limit date: January 13, 2026 at 23:59:59
    // Note: Month is 0-indexed in JS Date (0 = January)
    const limitDate = new Date(2026, 0, 13, 23, 59, 59);
    const now = new Date();

    if (now <= limitDate) {
      setIsVisible(true);
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(dadosTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="w-full mt-8 mb-4">
      <div className="bg-white/90 backdrop-blur-sm border border-stone-300 rounded-lg shadow-lg p-4 sm:p-6 md:p-10 relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-stone-300 via-amber-700 to-stone-300" />

        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider">
            Centro Neocatecumenal de Brasília
          </p>
          <p className="text-xs sm:text-sm text-stone-500 uppercase tracking-wider">
            Centro Neocatecumenal de Franca (SP)
          </p>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            Franca, 9 de janeiro de 2026
          </p>
        </div>

        <h2
          className={`${merriweather.className} text-xl sm:text-2xl md:text-3xl font-bold text-stone-700 mb-6 tracking-wide text-center`}
        >
          Comunicado Importante
        </h2>

        <div className="text-sm sm:text-base leading-relaxed text-stone-600 space-y-4">
          <p className="text-base sm:text-lg">Queridos irmãos,</p>

          <p>
            Na passada segunda-feira 5, na Catedral de Franca (SP), foi
            celebrada a Eucaristia em sufrágio pelos{" "}
            <strong className="font-semibold text-stone-800">
              30 anos de falecimento do Pe. Ramón Sevillano
            </strong>
            .
          </p>

          <p className="break-words">
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
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4 md:p-6 my-4 sm:my-6">
            <h3
              className={`${merriweather.className} text-sm sm:text-base md:text-lg font-bold text-amber-800 mb-3 sm:mb-4 text-center`}
            >
              Dados para enviar de cada celebração da Eucaristia:
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-stone-700 text-xs sm:text-sm md:text-base">
              <li>• Diocese</li>
              <li>• Cidade</li>
              <li>• Nome da Paróquia</li>
              <li>• Nome do presbítero que preside a celebração</li>
              <li>• Quantidade de comunidades neocatecumenais</li>
              <li>• Quantidade de irmãos (aproximadamente)</li>
              <li>• Data e hora da celebração</li>
              <li>• Nome e sobrenome do Responsável que envia os dados</li>
              <li>• E-mail e celular do Responsável</li>
              <li>• 1 ou 2 fotos da assembleia</li>
            </ul>

            {/* Copy button */}
            <div className="mt-4 text-center">
              <button
                onClick={handleCopy}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  copied
                    ? "bg-green-600 text-white"
                    : "bg-amber-700 text-white hover:bg-amber-800"
                }`}
              >
                {copied ? (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Copiado!
                  </>
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    Copiar modelo para e-mail
                  </>
                )}
              </button>
            </div>
          </div>

          <p className="text-stone-600 italic text-xs sm:text-sm">
            Estes dados serão destinados ao arquivo do processo, cujo início se
            dará na Diocese de Franca.
          </p>

          {/* Send info box */}
          <div className="bg-stone-100 border border-stone-300 rounded-lg p-4 sm:p-6 my-4 sm:my-6 text-center">
            <p className="font-semibold text-stone-800 mb-2 text-sm sm:text-base">
              Enviar para a Secretaria do processo do Pe. Ramón:
            </p>
            <a
              href="mailto:causadepadreramon@gmail.com"
              className="text-sm sm:text-base md:text-lg text-amber-700 font-bold hover:text-amber-800 break-all"
            >
              causadepadreramon@gmail.com
            </a>
            <p className="mt-3 sm:mt-4 text-red-600 font-semibold text-sm sm:text-base">
              ⚠️ Enviar até 13 de janeiro de 2026
            </p>
          </div>

          <div className="flex justify-center my-4 sm:my-6">
            <span className="h-px w-32 sm:w-40 bg-amber-900" />
          </div>

          <p className="text-stone-600">
            Rezamos também, por{" "}
            <strong className="font-semibold">Kiko Argüello</strong>, dia 9 de
            janeiro, foi aniversário dos seus 87 anos, para que o Senhor o
            sustente, assim como ao Pe. Mario Pezzi e Maria Ascensión, na
            Evangelização Mundial do Caminho.
          </p>

          <p className="text-base sm:text-lg mt-4 sm:mt-6">A paz.</p>

          {/* Signatures */}
          <div className="mt-4 sm:mt-6 text-stone-700">
            <p className="font-semibold">Ismael Rodrigues Alves</p>
            <p className="font-semibold">José Ronaldo Bachur</p>
          </div>
        </div>
      </div>
    </div>
  );
}
