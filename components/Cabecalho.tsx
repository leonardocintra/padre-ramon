import Image from "next/image";
import iconeRamon from "../public/img/editada/ramon-rosto.jpeg";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <div className="flex justify-between items-center sticky top-0 pl-16 z-50 bg-[#0a3274] opacity-90 text-white border-b-white p-2">
      <Link href={"/"} className="flex">
        <Image
          src={iconeRamon}
          alt="icone padre ramon"
          className="w-12 h-12 rounded-full mx-auto"
        ></Image>

        <div className="pl-3">
          <h3 className="uppercase sm:text-xl">
            Padre Ramón Sevillano Valencia
          </h3>
          <h5 className="uppercase text-xs sm:text-sm">Site oficial</h5>
        </div>
      </Link>
    </div>
  );
}
