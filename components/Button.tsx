import Link from "next/link";

interface ButtonLaranjaProps {
  descricao: string;
  svg: string;
  href: string;
}

export default function ButtonLaranja(props: ButtonLaranjaProps) {
  return (
    <>
      <Link
        href={props.href}
        className="inline-flex items-center bg-orange-500 text-gray-100 font-medium px-3 py-2 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
        </svg>
        {props.descricao}
      </Link>
    </>
  );
}
