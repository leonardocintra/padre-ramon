import Link from "next/link";

export default function ActionButtons() {
  return (
    <div className="flex flex-col md:flex-row gap-4 my-8 justify-center">
      <Link
        href="/registro-visita"
        className="inline-block px-4 py-4 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm text-center"
      >
        Registrar Visita ao túmulo
      </Link>
      <Link
        href="/registro-graca"
        className="inline-block px-4 py-4 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-sm text-center"
      >
        Enviar Graça / Milagre
      </Link>
    </div>
  );
}
