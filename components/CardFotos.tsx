import CardFoto from "./CardFoto";

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
            <div className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 italic text-right">
              <p className="">
                &quot; Estais preparados, porque no momento que menos penseis,
                virá o Filho do homem &quot;
              </p>
              <p className="">(Mt 24,44)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <CardFoto
            titulo="Aspirantado Salesiano de Girona (Espanha)"
            descricao="Tendo sentido o chamado a ser presbítero e missionário, ingressou, num primeiro momento, no Aspirantado Salesiano de Girona (Espanha)             em 1957."
            imageUrl="/img/card/salesianos.jpg"
          />
          <CardFoto
            titulo="Padre Ramon em Brasília"
            descricao="Na foto da esquerda para a direita: Pe. Ramon, [nome], Beata Carmen Hernandez, [nome],[nome],[nome],[nome], no ano de 19xx"
            imageUrl="/img/brasilia/1.jpg"
          />
          <CardFoto
            titulo="Redemptoris Mater de Brasília"
            descricao="Ajudou a fundar o Seminário Missionário Arquidiocesano «Redemptoris Mater» de Brasília, um dos mais florescentes do Brasil"
            imageUrl="/img/brasilia/4.jpg"
          />
        </div>
      </div>
    </section>
  );
}
