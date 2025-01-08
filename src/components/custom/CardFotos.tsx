import CardFoto from "./CardFoto";

export default function CardFotos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <CardFoto
            titulo="Aspirantado Salesiano de Girona (Espanha)"
            descricao="Tendo sentido o chamado a ser presbítero e missionário, ingressou, num primeiro momento, no Aspirantado Salesiano de Girona (Espanha) em 1957."
            imageUrl="/img/card/salesianos.jpg"
          />
          <CardFoto
            titulo="Redemptoris Matter de Brasília"
            descricao="Padre Ramon com iniciadores do caminho Kiko Argüello (biblia) Carmen Hernandez no terreno que é  hoje o Seminário Missionário Redemptoris Matter de Brasilia. Clique na foto para conhecer a história do Seminário"
            imageUrl="/img/brasilia/4.jpg"
          />
          <CardFoto
            titulo="Padre Ramon em Brasília"
            descricao="Padre Ramon acompanhando os iniciadores do Caminho Neocatecumenal em visita a Brasilia"
            imageUrl="/img/brasilia/1.jpg"
          />
          <CardFoto
            titulo="São João Paulo II"
            descricao="Padre Ramon com o Santo Papa João Paulo II"
            imageUrl="/img/canva2/joaopaulo.jpg"
          />{" "}
          <CardFoto
            titulo="Trabalho voluntário"
            descricao="Também fazia todos os trabalhos voluntários com alegria e dedicação"
            imageUrl="/img/canva2/porco.jpg"
          />{" "}
          <CardFoto
            titulo="Convivencias"
            descricao="Participou de grandes convivencia com Kiko Argüello"
            imageUrl="/img/canva2/kiko.jpg"
          />
        </div>
      </div>
    </section>
  );
}
