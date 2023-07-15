import Image from "next/image";

interface CardFotoProps {
  titulo: string;
  descricao: string;
  imageUrl: string;
}

export default function CardFoto(props: CardFotoProps) {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
      <div className="rounded-lg h-64 overflow-hidden shadow-xl">
        <Image
          src={props.imageUrl}
          alt={props.titulo}
          className="object-cover object-center h-full w-full"
          width={1204}
          height={504}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {props.titulo}
      </h2>
      <p className="text-base leading-relaxed mt-2">{props.descricao}</p>
    </div>
  );
}
