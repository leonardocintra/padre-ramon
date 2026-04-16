"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function VersionDisplay() {
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const fetchVersion = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/leonardocintra/padre-ramon/releases/latest",
        );
        if (response.ok) {
          const data = await response.json();
          setVersion(data.tag_name);
        }
      } catch (error) {
        console.error("Erro ao buscar versão:", error);
      }
    };

    fetchVersion();
  }, []);

  if (!version) return null;

  return <p className="text-xs my-2 italic text-stone-300"> {version}</p>;
}

export default function Footer() {
  return (
    <footer className="bg-[#0A3274] text-white text-center py-5">
      <p className="text-sm font-semibold">
        &copy; {new Date().getFullYear()} - Associacao Virgem do Terceiro
        Milenio para a Evangelizacao Itinerante
      </p>
      <p className="text-sm mt-2 mb-4">CNPJ: 06.108.869/0001-30</p>{" "}
      <VersionDisplay />
      <div className="text-xs mt-2">
        <Link href="/privacity" className="hover:underline">
          Política de Privacidade
        </Link>
        <span className="mx-2">|</span>
        <Link href="/terms" className="hover:underline">
          Termos de Uso
        </Link>
      </div>
    </footer>
  );
}
