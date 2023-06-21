import Image from "next/image";
import Link from "next/link";
import FotoPadreRamon1 from "public/img/brasilia/1.jpg";
import FotoPadreRamon2 from "public/img/brasilia/4.jpg";

export default function CardFotos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-green-600"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Padre Ramón
            </h1>
            <div className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 italic text-right">
              <p className="">
                &quot; Estai preparados, porque no momento que menos penseis,
                virá o Filho do homem &quot;
              </p>
              <p className="">(Mt 24,44)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src={"/img/card/salesianos.jpg"}
                alt="salesianos"
                className="object-cover object-center h-full w-full"
                width={1204}
                height={504}
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Aspirantado Salesiano de Girona (Espanha)
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Tendo sentido o chamado a ser presbítero e missionário, ingressou,
              num primeiro momento, no Aspirantado Salesiano de Girona (Espanha)
              em 1957.
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src={FotoPadreRamon1}
                alt="foto do padre"
                width={1204}
                height={504}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Padre Ramon em Brasília
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Na foto da esquerda para a direite: Pe. Ramon, [nome],
              <Link
                href={
                  "https://neocatechumenaleiter.org/pt-br/historia/carmen-hernandez/"
                }
              >
                Beata Carmen Hernandez,
              </Link>
              [nome],[nome],[nome],[nome], no ano de 19xx
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src={FotoPadreRamon2}
                alt="foto do padre"
                width={1204}
                height={504}
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Redemptoris Mater de Brasília
            </h2>
            <p className="text-base leading-relaxed mt-2">
              Ajudou a fundar o Seminário Missionário Arquidiocesano
              «Redemptoris Mater» de Brasília, um dos mais florescentes do
              Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
