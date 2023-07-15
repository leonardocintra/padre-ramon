import Image from "next/image";

export default function Manchete() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pt-10 pb-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image
            className="object-cover object-center rounded-3xl shadow-lg"
            alt="Padre Ramon"
            width={600}
            height={720}
            src="/img/velorio/padre-ramon1.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900">
            O sacerdote que te ajuda a amar a Cristo.
            <br className="hidden lg:inline-block" />
            Precisa de ajuda ?
          </h1>
          <p className="mb-8 leading-relaxed text-2xl">Conheça Padre Ramón</p>
          <p className="text-lg italic">
            &quot; ... com efeito, os sofrimentos do tempo presente não tem
            proporção com a glória que deverá se revelar em nós. Pois a criação
            em expectativa anseia pela revelação dos filhos de Deus. &quot;
          </p>
          <p className="font-bold">(Rm 8,18-19)</p>
        </div>
      </div>
    </section>
  );
}
