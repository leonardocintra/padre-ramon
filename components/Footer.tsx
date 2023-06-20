interface FooterProps {}

export default function Footer(props: FooterProps) {
  // precisa remover e tratar o fixed do footer no arquivo _document.tsx
  return (
    <div className="mt-10 bg-[#0a3274]">
      <div className="flex flex-col justify-center uppercase items-center sm:flex-row text-white py-6 font-light">
        © {new Date().getFullYear()} - Caminho Neocatecumenal no Brasil
      </div>
    </div>
  );
}
