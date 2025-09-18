'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RegistroVisitaPage() {
  const [form, setForm] = useState({
    nome: '',
    dataVisita: '',
    cidade: '',
    pais: 'Brasil',
    numeroPessoas: '',
    mensagem: '',
    email: '',
    whatsapp: '',
  });
  const [status, setStatus] = useState<string | null>(null);

  const dataHoje = new Date().toLocaleDateString('pt-BR');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('Enviando...');
    try {
      const res = await fetch('/api/leonardocintra/registro-visita', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, dataHoje }),
      });
      if (res.ok) {
        setStatus('Registro enviado com sucesso!');
        setForm({
          nome: '',
          dataVisita: '',
          cidade: '',
          pais: 'Brasil',
          numeroPessoas: '1',
          mensagem: '',
          email: '',
          whatsapp: '',
        });
      } else {
        setStatus('Erro ao enviar registro.');
      }
    } catch {
      setStatus('Ocorreu um erro na comunicação com o servidor.');
    }
  }

  return (
    <div className="flex-grow container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#0A3274] mb-6">
          Registro de Visitação ao Túmulo
        </h1>
        <p className="text-center text-gray-700 mb-8">
          Se você visitou o túmulo do Padre Ramón, por favor, deixe seu
          registro. É uma forma de mantermos viva a memória e a intercessão.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 rounded-lg shadow-md space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">Data de hoje</label>
              <input
                type="text"
                value={dataHoje}
                disabled
                className="w-full border rounded-md px-3 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="dataVisita" className="block text-sm font-medium mb-1 text-gray-700">
                Data da visita
              </label>
              <input
                type="date"
                name="dataVisita"
                id="dataVisita"
                value={form.dataVisita}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="cidade" className="block text-sm font-medium mb-1 text-gray-700">Cidade</label>
              <input
                type="text"
                name="cidade"
                id="cidade"
                value={form.cidade}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="pais" className="block text-sm font-medium mb-1 text-gray-700">País</label>
              <input
                type="text"
                name="pais"
                id="pais"
                value={form.pais}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

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
              placeholder="Seu nome completo"
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
              placeholder="Seu melhor email"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="numeroPessoas" className="block text-sm font-medium mb-1 text-gray-700">
                Número de pessoas na visita
              </label>
              <input
                type="number"
                name="numeroPessoas"
                id="numeroPessoas"
                value={form.numeroPessoas}
                onChange={handleChange}
                required
                min={1}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block text-sm font-medium mb-1 text-gray-700">
                WhatsApp com DDD (opcional)
              </label>
              <input
                type="tel"
                name="whatsapp"
                id="whatsapp"
                value={form.whatsapp}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(99) 99999-9999"
              />
            </div>
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium mb-1 text-gray-700">
              Mensagem (confidencial)
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Deixe sua mensagem ou pedido de oração..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-semibold transition-colors"
          >
            Enviar Registro
          </button>

          {status && (
            <div className={`text-center mt-4 text-sm font-medium p-3 rounded-md ${status.includes('sucesso') ? 'text-green-800 bg-green-50' : 'text-red-800 bg-red-50'}`}>
              {status}
            </div>
          )}
        </form>

        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="mb-4 text-gray-800">
            Deseja também enviar um relato do que o Padre Ramon fez em sua vida?
            Alguma graça alcançada ? Clique abaixo e envie seu relato!
          </p>
          <Link 
            href="/registro-graca"
            className="inline-block px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-semibold shadow-md transition-transform transform hover:scale-105"
          >
            Informar Graça alcançada
          </Link>
        </div>
      </div>
    </div>
  );
}
