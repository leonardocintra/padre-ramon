"use client";

import { useState } from "react";

export default function RegistroVisitaPage() {
  const [form, setForm] = useState({
    dataVisita: "",
    cidade: "",
    pais: "Brasil",
    numeroPessoas: "",
    mensagem: "",
    email: "",
    whatsapp: "",
  });
  const [status, setStatus] = useState<null | string>(null);
  const [isSending, setIsSending] = useState(false);

  const dataHoje = new Date().toLocaleDateString("pt-BR");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    setIsSending(true);
    try {
      const res = await fetch("/api/leonardocintra/registro-visita", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, dataHoje }),
      });
      if (res.ok) {
        setStatus("Registro enviado com sucesso!");
        setForm({
          dataVisita: "",
          cidade: "",
          pais: "Brasil",
          numeroPessoas: "1",
          mensagem: "",
          email: "",
          whatsapp: "",
        });
      } else {
        setStatus("Erro ao enviar registro.");
      }
    } catch {
      setStatus("Erro ao enviar registro.");
    }
    setIsSending(false);
  }

  return (
    <div className="flex-grow">
      <h2 className="min-w-xs text-2xl font-bold text-center mt-8">
        Registro de Visitação
      </h2>
      <form
        className="w-full mx-auto mt-8 bg-white p-4 sm:p-8 rounded shadow flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium mb-1">Data de hoje</label>
          <input
            type="text"
            value={dataHoje}
            disabled
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Data da visita
          </label>
          <input
            type="date"
            name="dataVisita"
            value={form.dataVisita}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Cidade</label>
          <input
            type="text"
            name="cidade"
            value={form.cidade}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">País</label>
          <input
            type="text"
            name="pais"
            value={form.pais}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Número de pessoas
          </label>
          <input
            type="number"
            name="numeroPessoas"
            value={form.numeroPessoas}
            onChange={handleChange}
            required
            min={1}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Mensagem (confidencial)
          </label>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Email (opcional)
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="Seu email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            WhatsApp com DDD (opcional)
          </label>
          <input
            type="text"
            name="whatsapp"
            value={form.whatsapp}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            placeholder="(99) 99999-9999"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          disabled={isSending}
        >
          {isSending ? "Enviando..." : "Enviar registro"}
        </button>
        {status && (
          <div className="text-center mt-2 text-sm text-green-600">
            {status}
          </div>
        )}
      </form>
    </div>
  );
}