"use client";

import { useEffect, useState } from "react";

import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function MassInvite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defines the limit date: January 5, 2026 at 23:59:59
    // Note: Month is 0-indexed in JS Date (0 = January)
    const limitDate = new Date(2026, 0, 5, 19, 0, 0);
    const now = new Date();

    if (now <= limitDate) {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 mb-4">
      <div className="bg-white/90 backdrop-blur-sm border border-stone-200 rounded-lg shadow-lg p-8 text-center relative overflow-hidden">
        {/* Decorative border or element could go here */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-300 via-yellow-600 to-stone-300"></div>

        <h2
          className={`${greatVibes.className} text-4xl md:text-5xl text-stone-800 mb-6 tracking-wide`}
        >
          Convite
        </h2>

        <div className="mx-auto max-w-2xl text-lg md:text-xl leading-relaxed text-stone-700 font-light">
          <p className="mb-6">
            Viemos convidar você e vossa comunidade para a Eucaristia em
            lembrança do <strong className="font-semibold text-stone-800">30º aniversário de falecimento</strong> de nosso saudoso
          </p>
          
          <h3 className="text-2xl md:text-3xl text-stone-900 font-serif my-6">
            Padre Ramon Sevilliano Valencia
          </h3>

          <div className="flex justify-center my-6">
            <span className="h-px w-24 bg-stone-300"></span>
          </div>

          <p className="mb-8">
            Que se dará aos <strong className="font-semibold text-stone-800">cinco (05) dias de janeiro de dois mil e vinte e seis</strong>, 
            às <strong className="font-semibold text-stone-800">dezenove (19) horas</strong>,<br/>
            na <strong className="font-semibold text-stone-800">Igreja Sé Catedral Nossa Senhora da Conceição</strong>.
          </p>

          <p className={`${greatVibes.className} text-3xl text-stone-800 mt-8`}>
            Sua presença nos dará muita alegria.
          </p>
        </div>
      </div>
    </div>
  );
}
