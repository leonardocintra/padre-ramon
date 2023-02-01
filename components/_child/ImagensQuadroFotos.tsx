import Image, { StaticImageData } from "next/image";

interface ImagensQuadroFotosProps {
  src: StaticImageData;
  subTittle: string;
}

export default function ImagensQuadroFotos(props: ImagensQuadroFotosProps) {
  return (
    <div className="flex justify-center">
      <div className="absolute bottom-0 pl-4 pb-4 text-2xl font-medium text-white">
        {props.subTittle}
      </div>
      <Image
        src={props.src}
        alt={props.subTittle}
        className="object-cover rounded-3xl"
      ></Image>
    </div>
  );
}
