import Image from "next/image";
import { SendEmailInterface } from "./api/interfaces/sendgrid-interface";
import FotoPadreRamon from "public/img/editada/ramon.png";
import ButtonLaranja from "../components/Button";
import { useState } from "react";
import CardFotos from "../components/CardFotos";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async () => {
    const endpoint = "/api/sendgrid";

    const data: SendEmailInterface = {
      personalizations: [
        {
          to: [
            {
              email: "causadepadreramon@gmail.com",
              name: "Causa de Padre Ramon",
            },
          ],
          subject: "Relato do site de: " + nome,
        },
      ],
      content: [
        {
          type: "text/html",
          value: `<h1>Relato de ${nome}</h1> <h2>Email: ${email}</h2> <h2>Telefone / Whastapp: ${telefone}</h2> <p>${mensagem}</p>`,
        },
      ],
      from: {
        email: "causadepadreramon@gmail.com",
        name: "Causa Padre Ramon",
      },
      reply_to: {
        email: "causadepadreramon@gmail.com",
        name: "Causa Padre Ramon",
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    await fetch(endpoint, options);
  };

  return (
    <>
      <div className="">
        <div className="flex justify-center items-center mt-10">
          <ButtonLaranja
            href="/"
            descricao="Voltar para pagina inicial"
            svg="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          ></ButtonLaranja>
        </div>
        <div className="flex justify-end">
          <Image
            src={FotoPadreRamon}
            alt="padre ramom"
            className="bg-no-repeat opacity-60 absolute hidden sm:block"
          ></Image>
        </div>
        <div className="flex justify-center rounded-2xl relative">
          <form onSubmit={handleSubmit} className="flex justify-center">
            <div className="p-1 bg-white rounded-lg m-5 bg-transparent">
              <div className="mb-6 text-3xl font-light text-center text-gray-800">
                Envie seu relato
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      name="nome"
                      id="nome"
                      value={nome}
                      onChange={(e) => {
                        setNome(e.target.value);
                      }}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent focus:bg-orange-50"
                      placeholder="Nome"
                    />
                  </div>
                </div>
                <div className="col-span-2 lg:col-span-1">
                  <div className=" relative ">
                    <input
                      type="text"
                      id="telefone"
                      name="telefone"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent focus:bg-orange-50"
                      placeholder="Telefone / Whatsapp"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="email">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent focus:bg-orange-50"
                      placeholder="E-mail"
                    />
                  </label>
                </div>
                <div className="col-span-2">
                  <label className="text-gray-700" htmlFor="mensagem">
                    <textarea
                      className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent focus:bg-orange-50"
                      id="mensagem"
                      placeholder="Descreva seu relato"
                      name="mensagem"
                      onChange={(e) => {
                        setMensagem(e.target.value);
                      }}
                      rows={15}
                      cols={40}
                    />
                  </label>
                </div>
                <div className="col-span-2 text-right">
                  <button
                    type="submit"
                    className="flex py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 justify-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                  >
                    Enviar relato
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 ml-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <CardFotos />
    </>
  );
}
