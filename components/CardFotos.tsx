export default function CardFotos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-green-600"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Padre Ramón
            </h1>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              Padre Ramón era um dos Catequistas Responsáveis do Brasil, do
              Caminho Neocatecumenal, que doou sua vida a evangelização da
              palavra de Cristo.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Algo sobre o padre
            </h2>
            <p className="text-base leading-relaxed mt-2">
              descrição qualquer que bata com explicação da foto, etc
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1204x504"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Padre Ramon com sua comunidade
            </h2>
            <p className="text-base leading-relaxed mt-2">
              descrição qualquer que bata com explicação da foto, etc
            </p>
          </div>
          <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1205x505"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
              Padre Ramon com Kiko e Carmen
            </h2>
            <p className="text-base leading-relaxed mt-2">
              descrição qualquer que bata com explicação da foto, etc
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
