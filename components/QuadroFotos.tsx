import FotoPadreRamon1 from "public/img/canva/1.png";
import FotoPadreRamon2 from "public/img/canva/2.png";
import FotoPadreRamon3 from "public/img/canva/3.png";
import FotoPadreRamon4 from "public/img/canva/4.png";
import FotoPadreRamon7 from "public/img/canva/7.png";
import FotoPadreRamon9 from "public/img/canva/9.png";
import Image from "next/image";

interface QuadroFotosProps {}

export default function QuadroFotos(props: QuadroFotosProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Fotos da vida de Padre Ramon
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            O padre Ramón era muito respeitado dentro da cidade; a sua
            simplicidade para se comunicar, a sua serenidade e o seu amor para
            com todos eram de todos conhecidas. Cumpriu com grande entrega a sua
            missão na terra. [Diário de Franca]
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon9}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />

              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Padre Ramon
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alguma coisa aqui
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon7}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Padre Ramon
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alguma coisa aqui
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon4}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Padre Ramon
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alguma coisa aqui
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon3}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Alguma coisa aqui
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Neptune
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon2}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Padre Ramon
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alguma coisa aqui
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative">
              <Image
                src={FotoPadreRamon1}
                alt="Padre Ramon"
                width={360}
                height={600}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                  Padre Ramon
                </h2>
                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                  Alguma coisa aqui
                </h1>
                <p className="leading-relaxed">
                  Qualquer descrição sobre a foto ou podemos remover essas
                  descrição. Fiquem a vontade
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
