import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0A3274] text-white py-4 shadow">
      <nav className="max-w-4xl mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-3xl">Causa de Padre Ramon</h1>
        </Link>
        <div className="space-x-4 text-sm">
          <Link href="/fotos">Fotos</Link>
          <Link href="/contato">Contato</Link>
        </div>
      </nav>
    </header>
  );
}
