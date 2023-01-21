interface CabecalhoProps {
  titulo: string;
  subTitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="p-10 shadow-xl shadow-amber-100 border-solid bg-yellow-100 border-indigo-400">
      <h1 className="text-5xl text-center font-extrabold font-serif">{props.titulo}</h1>
      <br />
      <h2 className="text-lg text-center italic">{props.subTitulo}</h2>
    </div>
  );
}
