import Image from "next/image";
import ButtonLaranja from "./Button";

interface QuadroFotosProps {}

export default function QuadroFotos(props: QuadroFotosProps) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Enterro do Padre Ramon
          </h1>
          <p className="mb-8 leading-relaxed">
            O Pe. Ramón sofreu um acidente automobilístico na estrada que vai de
            Igarapava a Uberaba, na Diocese de Franca (Brasil), no 1º de janeiro
            de 1996. Após quatro dias de cuidados intensivos no hospital, passou
            da morte para a Vida, na Vigília da Festa da Epifania na cidade de
            Uberaba (Minas Gerais).
            <br />
            Enterro foi no cemitério da Saudade em Franca - SP
          </p>
          <div className="flex justify-center">
            <ButtonLaranja
              descricao="Quero dar meu testemunho"
              href="contato"
              svg="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            ></ButtonLaranja>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            width={720}
            height={600}
            className="object-cover object-center rounded"
            alt="hero"
            src="/img/velorio/1.jpg"
          />
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-indigo-500"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Arquivo pessoal
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              O padre Ramón era muito respeitado dentro da cidade; a sua
              simplicidade para se comunicar, a sua serenidade e o seu amor para
              com todos eram de todos conhecidas. Cumpriu com grande entrega a
              sua missão na terra.s
            </p>
          </div>
        </div>

        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/img/arquivo-pessoal/1.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/img/arquivo-pessoal/2.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/img/arquivo-pessoal/3.jpg"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full h-full object-cover object-center block"
                  src="/img/arquivo-pessoal/4.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/img/arquivo-pessoal/5.jpg"
                />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  width={200}
                  height={200}
                  alt="gallery"
                  className="w-full object-cover h-full object-center block"
                  src="/img/arquivo-pessoal/6.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
