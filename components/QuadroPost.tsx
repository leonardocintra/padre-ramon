import Image from "next/image";
import FotoPadreRamon1 from "public/img/ramon1.jpg";

interface QuadroPostProps {}

export default function QuadroPost(props: QuadroPostProps) {
  return (
    <div className="mt-2 grid-flow-dense grid-cols-2">
      <div className="border-solid border-8 bg-green-400">
        <p>
          Padre Ramón Sevillano Valencia nasceu em Cirauqui (Navarra), na
          Espanha, em 1943. Realizou toda a sua formação religiosa, com estudos
          em Filosofia e Teologia naquele país. Já como sacerdote, exerceu o seu
          ministério como educador em escolas salesianas de Barcelona, em
          bairros e distritos. Em 1979, pediu aos superiores salesianos para se
          dedicar plenamente ao apostolado como itinerante do Caminho
          Neocatecumenal. Exerceu a missão itinerante nas regiões de La Mancha,
          Castilla-León, Astúrias, na Espanha, e também em Portugal, partindo
          para o Brasil no ano de 1990. Em terras brasileiras, trabalhou em
          diversas dioceses sempre como Presbítero Itinerante: Franca, Brasília,
          São Paulo e Jundiaí.
        </p>
        <p>
          Ajudou a fundar o Seminário Missionário Arquidiocesano “Redemptoris
          Mater” de Brasília, um dos mais florescentes do Brasil. Profundamente
          unido com a sua comunidade neocatecumenal de origem, Padre Ramón
          Sevillano passou os últimos anos de sua vida sem ter casa nem tempo
          para si mesmo, sendo um a mais nas famílias que o acolhiam, sempre
          disposto a partir para outros lugares, contatar pessoas para pregar a
          salvação, o amor de Deus e sua predileção pelos pecadores.
        </p>
      </div>

      <div className="bg-yellow-300 ">
        <Image src={FotoPadreRamon1} alt="Foto do padre Ramon"></Image>
      </div>
    </div>
  );
}
