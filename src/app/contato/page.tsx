"use client";

import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!"); // Aqui você pode integrar com um backend
  };

  const gerarLinkWhatsApp = () => {
    const { nome, email, whatsapp, mensagem } = form;
    const texto = `Nome: ${nome}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMensagem: ${mensagem}`;
    return `https://wa.me/SEU_NUMERO_COM_DDI?text=${encodeURIComponent(texto)}`;
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-center">Entre em Contato</h1>
      <p className="text-center text-gray-600">
        Envie uma mensagem e retornaremos em breve.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nome" className="block font-medium mb-1">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            id="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="whatsapp" className="block font-medium mb-1">
            WhatsApp
          </label>
          <input
            type="tel"
            name="whatsapp"
            id="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block font-medium mb-1">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            id="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded px-6 py-3 transition"
          >
            Enviar
          </button>

          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded px-6 py-3 text-center transition"
          >
            Enviar via WhatsApp
          </a>
        </div>
      </form>

      <div className="text-center mt-8">
        <div>
          <strong>Secretaria da equipe de postulação: </strong>
          Rua Santos Pereira, n. 788, bairro Cidade Nova, CEP 14.401-130,
          Franca - SP - Brasil.
        </div>
        <div className="mt-2 italic text-slate-700">
          De acordo com os decretos de Urbano VIII, em nada se pretende impedir
          o juízo da autoridade da Igreja.
        </div>
        <div className="text-slate-900 font-semibold">COM LICENÇA ECLESIÁTICA.</div>
      </div>
    </div>
  );
}
