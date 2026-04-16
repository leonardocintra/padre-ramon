import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-[#0A3274] text-white py-6 shadow-md">
      <nav className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Link href="/">
          <div className="select-none cursor-pointer">
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-3xl tracking-wide font-serif text-center sm:text-left">
              Padre Ramón
            </h1>
            <p className="text-sm sm:text-base font-light font-serif text-center sm:text-left mt-1">
              Causa de beatificação
            </p>
          </div>
        </Link>
        <div className="flex space-x-6 sm:space-x-8 text-base sm:text-lg font-medium font-serif">
          <Link
            href="/fotos"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Fotos
          </Link>
          <Link
            href="/oracao"
            className="hover:text-yellow-400 transition-colors duration-300"
          >
            Oração
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
