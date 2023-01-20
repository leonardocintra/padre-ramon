interface LinkCabecalhoProps {
  descricao: string;
}

export default function LinkCabecalho(props: LinkCabecalhoProps) {
  return (
    <a
      className="text-sm text-gray-600 hover:text-gray-800 hover:underline"
      href="http://"
    >
      {props.descricao}
    </a>
  );
}
