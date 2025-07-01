import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0A3274] text-white py-5 shadow-md">
      <nav className="max-w-4xl mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-extrabold text-4xl tracking-wide font-sans select-none cursor-pointer">
            Causa de Padre Ramon
          </h1>
        </Link>
        <div className="space-x-8 text-sm font-medium font-sans">
          <Link
            href="/fotos"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Fotos
          </Link>
          <Link
            href="/contato"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  );
}
