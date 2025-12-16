"use client";

import { useEffect, useState } from "react";

export default function MassInvite() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Defines the limit date: January 5, 2026 at 23:59:59
    // Note: Month is 0-indexed in JS Date (0 = January)
    const limitDate = new Date(2026, 0, 5, 23, 59, 59);
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

        <h2 className="text-2xl md:text-3xl font-serif text-stone-800 mb-6 tracking-wide">
          CONVITE
        </h2>

        <div className="prose prose-stone mx-auto text-lg leading-relaxed text-stone-700 font-light italic">
          <p className="mb-4">
            Vimos convidar você e vossa comunidade para a Eucaristia em
            lembrança do 30º aniversário de falecimento de nosso saudoso Padre
            Ramon Sevilliano Valencia que se dará aos cinco (05) dias de janeiro
            de dois mil e vinte e seis, às dezenove (19) horas, na Igreja Sé
            Catedral Nossa Senhora da Conceição.
          </p>
          <p className="font-medium text-stone-900 mt-6">
            Sua presença nos dará muito alegria.
          </p>
        </div>
      </div>
    </div>
  );
}
