import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
      <Image
        width={500}
        height={500}
        src={"/img/velorio/padre-ramon1.jpg"}
        alt={"Padre Ramon"}
        className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-md"
      />
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-2xl md:text-4xl font-bold text-[#0A3274] mb-4">
          O sacerdote que te ajuda a amar a Cristo.
        </h1>
        <a
          href="https://wa.me/5599999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
        >
          Precisa de ajuda ?
        </a>
        <p className="mt-4 text-lg font-medium text-gray-800">
          Conheça Padre Ramón
        </p>
        <p className="mt-4 italic text-gray-600">
          ... com efeito, os sofrimentos do tempo presente não tem proporção com
          a glória que deverá se revelar em nós. Pois a criação em expectativa
          anseia pela revelação dos filhos de Deus. <br />
          <span className="font-bold text-gray-800">(Rm 8,18-19)</span>
        </p>
      </div>
    </section>
  );
}
