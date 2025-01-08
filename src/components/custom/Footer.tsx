export default function Footer() {
  return (
    <div className="mt-10 bg-[#0a3274]">
      <div className="flex flex-col justify-center uppercase items-center sm:flex-row text-white py-6 font-light">
        © {new Date().getFullYear()} - Caminho Neocatecumenal no Brasil
      </div>
    </div>
  );
}
