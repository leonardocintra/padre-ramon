interface CardExperimentalProps {
    titulo: string,
    descricao: string,
    rodape?: string
}

export default function CardExperimental(props: CardExperimentalProps) {
  return (
    <div className="container mx-auto px-4 py-8 mt-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full bg-gray-50 p-4 border-b border-gray-200">
          <h4 className="font-semibold">{props.titulo}</h4>
        </div>

        <div className="p-4">
          {props.descricao}
        </div>

        <div className="w-full bg-gray-100 p-4 border-t border-gray-200">
          <h4 className="font-semibold">{props.rodape}</h4>
        </div>
      </div>
    </div>
  );
}
