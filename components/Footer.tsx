interface FooterProps {}

export default function Footer(props: FooterProps) {
  return (
    <div className="mt-10 bg-[#0a3274]">
      <div className="flex flex-col justify-center uppercase items-center sm:flex-row text-white py-6 font-light">
        © 2023 Caminho Neocatecumenal no Brasil.
      </div>
    </div>
  );
}
