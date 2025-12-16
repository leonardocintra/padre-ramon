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
    // Defines the limit date: January 5, 2026 at 19:30:00
    // Note: Month is 0-indexed in JS Date (0 = January)
    const limitDate = new Date(2026, 0, 5, 19, 30, 0);
    const now = new Date();

    if (now <= limitDate) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-4">
      <div className="bg-white/90 backdrop-blur-sm border border-stone-300 rounded-lg shadow-lg p-8 md:p-12 text-center relative overflow-hidden">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-300 via-amber-700 to-stone-300" />

        <h2
          className={`${merriweather.className} text-3xl md:text-4xl font-bold text-stone-900 mb-8 tracking-wide`}
        >
          Comunicado
        </h2>

        <div className="mx-auto max-w-2xl text-base md:text-lg leading-relaxed text-stone-700 font-light space-y-6">
          <p>
            Será celebrada a Eucaristia em memória do{" "}
            <strong className="font-semibold text-stone-800">
              30º aniversário de falecimento
            </strong>{" "}
            de nosso saudoso
          </p>

          <h3
            className={`${merriweather.className} text-2xl md:text-3xl text-stone-900 font-bold my-8`}
          >
            Padre Ramon Sevilliano Valencia
          </h3>

          <div className="flex justify-center my-8">
            <span className="h-px w-32 bg-stone-300" />
          </div>

          <p>
            A celebração ocorrerá no dia{" "}
            <strong className="font-semibold text-stone-800">
              cinco (05) de janeiro de dois mil e vinte e seis
            </strong>
            , às{" "}
            <strong className="font-semibold text-stone-800">
              dezenove e trinta (19:30h) horas
            </strong>
            ,<br />
            na{" "}
            <strong className="font-semibold text-stone-800">
              Igreja Sé Catedral Nossa Senhora da Conceição
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
