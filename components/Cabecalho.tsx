import LinkCabecalho from "./LinkCabecalho";

interface CabecalhoProps {}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    // <div className="mt-20 p-10 shadow-2xl shadow-amber-200 border-solid bg-white border-indigo-400">
    //   <h1 className="text-5xl text-center font-extrabold">{props.titulo}</h1>
    //   <br />
    //   <h2 className="text-lg text-center italic">{props.subTitulo}</h2>
    // </div>

    <div>
      <div className="container mx-auto px-4 h-24 flex items-center">
        <div className="font-black">LOGO</div>

        <ul className="flex items-center ml-auto space-x-4">
          <li>
            <LinkCabecalho descricao="Biografia"></LinkCabecalho>
          </li>
          <li>
            <LinkCabecalho descricao="Sobre nós"></LinkCabecalho>
          </li>
          <li>
            <LinkCabecalho descricao="Doações"></LinkCabecalho>
          </li>
          <li>
            <LinkCabecalho descricao="Contato"></LinkCabecalho>
          </li>
        </ul>
      </div>
    </div>
  );
}
