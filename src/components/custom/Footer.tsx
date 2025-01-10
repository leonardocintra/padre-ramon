export default function Footer() {
  return (
    <div className="bg-[#0a3274] text-center">
      <div className="flex flex-col justify-center uppercase items-center sm:flex-row text-white px-3 py-6 font-extralight">
        © {new Date().getFullYear()} - Caminho Neocatecumenal no Brasil
      </div>
    </div>
  );
}
