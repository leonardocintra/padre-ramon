import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0A3274] text-white text-center py-4">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} - CAMINHO NEOCATECUMENAL DO BRASIL
      </p>
      <div className="text-xs mt-2">
        <Link href="/privacity" className="hover:underline">
          Política de Privacidade
        </Link>
        <span className="mx-2">|</span>
        <Link href="/terms" className="hover:underline">
          Termos de Uso
        </Link>
      </div>
    </footer>
  );
}
