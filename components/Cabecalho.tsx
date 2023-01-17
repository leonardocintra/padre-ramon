interface CabecalhoProps {
  titulo: string;
  subTitulo: string;
}

export default function Cabecalho(props: CabecalhoProps) {
  return (
    <div className="p-4 shadow-2xl shadow-amber-200 border-solid bg-white border-indigo-400 bg-white">
      <h1 className="text-5xl text-center">{props.titulo}</h1>
      <br />
      <h2 className="text-lg text-center italic">{props.subTitulo}</h2>
    </div>
  );
}
