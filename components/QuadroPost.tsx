import Image from "next/image";
import FotoPadreRamon1 from "public/img/brasilia/2.jpg";

interface QuadroPostProps {}

export default function QuadroPost(props: QuadroPostProps) {
  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="lg:pr-10">
            <div className="text-sm text-gray-400 font-medium uppercase">
              Causa de Beatificação
            </div>
            <div className="text-2xl text-gray-600 mt-2">
              Padre Ramón Sevillano Valencia
            </div>
            <div className="text-sm font-medium">Descrição da causa</div>
            <div className="text-base text-gray-900 font-medium mt-4">
              <p className="mb-4">
                Padre Ramón Sevillano Valencia nasceu em Cirauqui (Navarra), na
                Espanha, em 1943. Realizou toda a sua formação religiosa, com
                estudos em Filosofia e Teologia naquele país. Já como sacerdote,
                exerceu o seu ministério como educador em escolas salesianas de
                Barcelona, em bairros e distritos. Em 1979, pediu aos superiores
                salesianos para se dedicar plenamente ao apostolado como
                itinerante do Caminho Neocatecumenal.
              </p>
              <p>
                Exerceu a missão itinerante nas regiões de La Mancha,
                Castilla-León, Astúrias, na Espanha, e também em Portugal,
                partindo para o Brasil no ano de 1990. Em terras brasileiras,
                trabalhou em diversas dioceses sempre como Presbítero
                Itinerante: Franca, Brasília, São Paulo e Jundiaí. Ajudou a
                fundar o Seminário Missionário Arquidiocesano “Redemptoris
                Mater” de Brasília, um dos mais florescentes do Brasil.
                Profundamente unido com a sua comunidade neocatecumenal de
                origem, Padre Ramón Sevillano passou os últimos anos de sua vida
                sem ter casa nem tempo para si mesmo, sendo um a mais nas
                famílias que o acolhiam, sempre disposto a partir para outros
                lugares, contatar pessoas para pregar a salvação, o amor de Deus
                e sua predileção pelos pecadores.
              </p>
            </div>

            <div className="mt-4">
              <button className="inline-flex items-center text-yellow-900 bg-yellow-500 font-medium px-3 py-2 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
                Enviar um relato
              </button>
            </div>
          </div>

          <div className="flex-shrink-0 lg:ml-auto">
            <Image src={FotoPadreRamon1} alt="foto do padre" width={450} />
          </div>
        </div>
      </div>
    </div>
  );
}
