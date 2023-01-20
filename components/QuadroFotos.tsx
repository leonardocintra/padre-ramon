import Image from "next/image";
import FotoPadreRamon1 from "public/img/brasilia/1.jpg";
import FotoPadreRamon2 from "public/img/brasilia/2.jpg";
import FotoPadreRamon3 from "public/img/brasilia/3.jpg";
import FotoPadreRamon4 from "public/img/brasilia/4.jpg";
import FotoPadreRamon5 from "public/img/brasilia/5.jpg";

interface QuadroFotosProps {}

export default function QuadroFotos(props: QuadroFotosProps) {
  return (
    <div>
      <div className="container mx-auto px-4">
        <h3 className="text-2xl text-orange-700 text-center font-semibold mb-8">
          Fotos de Padre Ramón
        </h3>
        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          <div className="relative col-span-2 row-span-2 rounded-lg overflow-hidden">
            <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white sm:text-black">
              Padre junto responsaveis do caminho
            </div>
            <Image
              src={FotoPadreRamon1}
              alt="Foto 1"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="col-span-2 rounded-lg overflow-hidden">
            <Image
              src={FotoPadreRamon2}
              alt="Foto 3"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="rounded-lg overflow-hidden">
            <Image
              src={FotoPadreRamon3}
              alt="Foto 4"
              className="w-full h-full object-cover"
            ></Image>
          </div>
          <div className="rounded-lg overflow-hidden">
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
