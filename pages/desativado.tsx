import Image from "next/image";
import iconeRamon from "../public/img/editada/ramon-rosto.jpeg";

export default function Desativado() {
  return (
    <section className="text-gray-600 body-font h-auto">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  src={iconeRamon}
                  alt="icone padre ramon"
                  className="rounded-full mx-auto"
                ></Image>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Padre Ramon
                </h2>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Site desativado para atualizações. Voltaremos em breve :D
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
