import Image from "next/image";
import FotoPadreRamon1 from "public/img/brasilia/9.jpg";
import FotoPadreRamon2 from "public/img/brasilia/2.jpg";
import FotoPadreRamon3 from "public/img/brasilia/3.jpg";
import FotoPadreRamon4 from "public/img/brasilia/4.jpg";

interface QuadroFotosProps {}

export default function QuadroFotos(props: QuadroFotosProps) {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl text-orange-700 text-center font-semibold mb-8">
          Fotos de Padre Ramón
        </h3>
        <div className="md:grid md:grid-cols-4 md:grid-rows-2 md:gap-6 space-y-6 md:space-y-0">
          <div className="relative md:col-span-2 md:row-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-700">
            <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white">
              Ramon celebrando Eucaristia
            </div>
            <Image
              src={FotoPadreRamon1}
              alt="Foto 1"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="relative md:col-span-2 rounded-lg overflow-hidden shadow-lg hover:shadow-amber-700">
            <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white">
              Padre junto responsaveis do caminho
            </div>
            <Image
              src={FotoPadreRamon2}
              alt="Foto 3"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-amber-700">
            <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white">
              Ramon e o bispo
            </div>
            <Image
              src={FotoPadreRamon3}
              alt="Foto 4"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-amber-700">
            <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white">
              Pe. Ramon e Kiko
            </div>
            <Image
              src={FotoPadreRamon4}
              alt="Foto 5"
              className="w-full h-full object-cover"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
