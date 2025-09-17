"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegistroGracaPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Enviando...");
    try {
      const res = await fetch("/api/leonardocintra/registro-graca", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Relato enviado com sucesso! Obrigado por compartilhar.");
        setForm({
          nome: "",
          email: "",
          whatsapp: "",
          mensagem: "",
        });
      } else {
        const errorData = await res.json();
        setStatus(`Erro ao enviar relato: ${errorData.message}`);
      }
    } catch (error) {
      setStatus("Ocorreu um erro na comunicação com o servidor.");
    }
  }

  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#0A3274] mb-6">
          Registro de Graça ou Milagre
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Compartilhe conosco as bênçãos que o Padre Ramón, por intercessão
          junto a Deus, alcançou em sua vida. Seu relato é uma semente de fé.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label htmlFor="nome" className="block text-sm font-medium mb-1 text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              value={form.nome}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
              Email (opcional)
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-gray-700">
              Telefone / WhatsApp
            </label>
            <input
              type="tel"
              name="whatsapp"
              id="whatsapp"
              value={form.whatsapp}
              onChange={handleChange}
              required
              placeholder="(99) 99999-9999"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-1 text-gray-700">
              Seu relato
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={8}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Escreva aqui a graça alcançada..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-semibold transition-colors"
          >
            Enviar Relato
          </button>

          {status && (
            <div className="text-center mt-4 text-sm font-medium text-green-600 bg-green-50 p-3 rounded-md">
              {status}
            </div>
          )}
        </form>

        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="mb-4 text-gray-800">
            Prefere enviar áudio no WhatsApp pra gente em vez de mandar o texto?
          </p>
          <Link
            href="https://wa.me/5516991961997?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20o%20relato%20de%20uma%20gra%C3%A7a%20alcan%C3%A7ada%20por%20intercess%C3%A3o%20do%20Padre%20Ram%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Enviar Áudio pelo WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}