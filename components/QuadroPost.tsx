import Image from "next/image";
import Link from "next/link";
import FotoPadreRamon1 from "public/img/brasilia/1.jpg";
import ButtonLaranja from "./Button";

interface QuadroPostProps {}

export default function QuadroPost(props: QuadroPostProps) {
  return (
    <div>
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="mt-5 lg:pr-10">
            <div className="text-sm text-gray-400 font-medium uppercase">
              Causa de Beatificação
            </div>
            <div className="text-2xl text-gray-600 mt-2">
              Padre Ramón Sevillano Valencia
            </div>
            <div className="text-sm font-medium">Descrição da causa</div>
            <div className="text-base text-gray-900 font-medium mt-4">
              <p className="mb-4">
                Padre Ramón era um dos Catequistas Responsáveis do Brasil, do
                Caminho Neocatecumenal, que doou sua vida a evangelização da
                palavra de Cristo. Fez sua Páscoa no dia 05 de janeiro de 1996,
                após um acidente automobilístico, na cidade de Igarapava, em São
                Paulo.
              </p>
              <p className="mb-4">
                Nascido em Cirauqui (Navarra), na Espanha, no dia 31 de agosto
                de 1943, onde sempre teve uma vida de estudo dentro de sua
                missão como presbítero. Seus formadores religiosos testemunhavam
                a pessoa distinta que era, dotada de bom humor, além de
                representar um cristão exemplar. Fora catecúmeno na Paróquia de
                Santa Joaquina de Vedruna, em Barcelona, na Espanha.
              </p>
              <p className="mb-4">
                No ano início do ano de 1979, solicitou aos seus superiores a
                dedicação plena ao apostolado como itinerante do Caminho
                Neocatecumenal, passando por diversas regiões da Espanha,
                Portugal e, finalmente, no Brasil. Padre Ramón deteve um
                importante papel na fundação do Seminário Missionário
                Arquidiocesano Redemptoris Mater, de Brasília, além de ter
                auxiliado na catequização de diversas cidades no país,
                especialmente em São Paulo, Franca e Jundiaí, as quais hoje
                colhem frutos, configurando importantes pilares do Caminho
                Neocatecumenal no Brasil.
              </p>
              <p className="mb-4">
                Sempre fora entregue ao Evangelho, com amor e dedicação que
                demonstrava através de inúmeras palavras de iluminação e
                carinho, principalmente aos mais necessitados. Padre Ramón quis
                ser sepultado e enterrado no local em que morresse, sendo o
                presente vídeo{" "}
                <span className="font-light">(final da pagina) </span> o
                testemunho do sinal de comunhão daqueles com quem compartilhou a
                sua vida.
              </p>
              <p className="mb-4">
                Símbolo de entrega ao anúncio itinerante do Evangelho, sua
                presença celeste acompanha distintas graças a diversos irmãos
                que confiam na sua fama de fé.
              </p>
              <p className="mb-4">
                Kiko Argüello, iniciador do Caminho Neocatecumenal, ao expressar
                acerca de sua morte, reproduziu palavras de ânimo, uma vez que,
                nos céus, Padre Ramón muito mais fará ao anúncio do Kerygma
              </p>
            </div>

            <div className="flex justify-center sm:justify-start mt-4">
              <ButtonLaranja
                descricao="Enviar um relato"
                href="contato"
                svg="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              ></ButtonLaranja>
            </div>
          </div>

          <div className="flex-shrink-0">
            <Image
              src={FotoPadreRamon1}
              alt="foto do padre"
              width={450}
              className="rounded-lg shadow-xl shadow-green-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
