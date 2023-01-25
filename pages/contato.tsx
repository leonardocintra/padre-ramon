import Image from "next/image";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import { SendEmailInterface } from "./api/interfaces/sendgrid-interface";
import FotoPadreRamon from "public/img/editada/ramon.png";
import Link from "next/link";

export default function Contato() {
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
          subject: "Relato envado do site",
        },
      ],
      content: [
        {
          type: "text/html",
          value:
            "<strong>Esse relato foi enviado do site </strong><br /> Leonardo Fazendo testes de envio de email",
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

    const JSONdata = JSON.stringify(data);

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    await fetch(endpoint, options);
  };

  return (
    <div className="max-h-full">
      <Cabecalho
        titulo="Padre Ramón Sevillano Valencia"
        subTitulo="Precisamos de testemunhas"
      />
      <div className="flex justify-center items-center mt-10">
        <Link
          href={"/"}
          className="inline-flex items-center bg-orange-500 text-gray-100 font-medium px-3 py-2 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Voltar para a pagina inicial
        </Link>
      </div>
      <div className="flex justify-end h-full max-h-96">
        <Image
          src={FotoPadreRamon}
          alt="padre ramom"
          className="bg-no-repeat opacity-60 absolute"
        ></Image>
      </div>
      <div className="flex justify-center rounded-2xl relative">
        <form onSubmit={handleSubmit} className="flex justify-center">
          <div className="p-5 bg-white rounded-lg m-10 bg-transparent">
            <div className="mb-6 text-3xl font-light text-center text-gray-800">
              Envie seu relato
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Nome"
                  />
                </div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className=" relative ">
                  <input
                    type="text"
                    id="contact-form-email"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="E-mail"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-gray-700" htmlFor="name">
                  <textarea
                    className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    id="comment"
                    placeholder="Descreva seu relato"
                    name="comment"
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
      <Footer></Footer>
    </div>
  );
}
