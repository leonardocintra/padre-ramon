import Image from "next/image";
import FotoPadreRamon1 from "public/img/ramon1.jpg";

interface QuadroPostProps {}

export default function QuadroPost(props: QuadroPostProps) {
  return (
    <div className="mt-2">
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <Image
          src={FotoPadreRamon1}
          alt=""
          width={384}
          height={512}
          className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Padre Ramon assumiu uma missão não apenas de evangelização, mas
              de dedicação aqueles que precisavam de acolhimento, carinho e
              conforto. Ele teve um papel importante na consolidação da
              comunidade neocatecumenal em Franca e região e, por meio dele,
              modificou, para melhor, a vida de milhares de pessoas”,
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Deputado Roberto Engler</div>
            <div className="text-slate-700 dark:text-slate-500">
              Franca - SP, Brasil
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
