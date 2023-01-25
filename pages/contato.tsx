import Image from "next/image";
import Cabecalho from "../components/Cabecalho";
import Footer from "../components/Footer";
import { SendEmailInterface } from "./api/interfaces/sendgrid-interface";
import FotoPadreRamon from "public/img/editada/ramon.png";

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
        subTitulo="Envie seu relato"
      />
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
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Enviar relato
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
