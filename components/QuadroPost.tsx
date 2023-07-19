import Image from "next/image";
import ButtonLaranja from "./Button";

interface QuadroPostProps {}

export default function QuadroPost(props: QuadroPostProps) {
  return (
    <div className="container mx-auto px-3 sm:px-0">
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="mt-5 lg:pr-10">
          <div className="text-sm text-gray-400 font-medium uppercase">
            Causa de Beatificação
          </div>
          <div className="text-3xl text-gray-600 mt-2">
            Padre Ramón Sevillano Valencia
          </div>
          <div className="text-sm font-medium">Descrição da causa</div>
          <div className="text-gray-800 font-light mt-4 space-y-4 text-justify">
            <p className="">
              O Pe. Ramón Sevillano Valencia, filho de Alfonso e Rosario, nasceu
              em Cirauqui (Navarra) no dia 31 de agosto de 1943.
            </p>
            <Image
              width={400}
              height={400}
              alt="imagem"
              className="float-left rounded-lg bg-red-300 m-3 shadow-lg"
              src={"/img/card/salesianos.jpg"}
            />
            <p>
              Tendo sentido o chamado a ser presbítero e missionário, ingressou,
              num primeiro momento, no Aspirantado Salesiano de Girona (Espanha)
              em 1957. No curso de 1961-62 fez o Noviciado, preparatório para
              entrar na Congregação Salesiana, em Arbós del Panadés (Espanha) e
              a primeira Profissão religiosa temporal foi realizada em 16 de
              agosto de 1962.
            </p>
            <p>
              Cursou os dois primeiros anos de Filosofia no Estudiantado de Sant
              Vicenç dels Horts (Barcelona-Espanha), e o terceiro ano em
              Sentmenat (Barcelona-Espanha). Após ter feito o Triênio pedagógico
              de 1965 a 1968, fez a segunda Profissão religiosa temporal em
              Sentmenat (Barcelona) em 24 de julho de 1965. Foi admitido pelo
              Conselho local, o qual fez constatar:{" "}
              <span className="bg-pink-200 italic">
                “é um jovem de bom caráter, sensato e apostólico”.{" "}
              </span>
              Finalmente, realizou a Profissão Religiosa Perpétua no Templo
              Expiatório Nacional do Tibidabo (Barcelona-Espanha) no dia 10 de
              agosto de 1968. O Conselho local achou-o:{" "}
              <span className="bg-pink-200 italic">
                “De bom critério, piedoso, dócil, trabalhador, entregue; ama e
                vive a vocação salesiana sacerdotal com ilusão; um pouco
                tímido”.{" "}
              </span>
            </p>
            <p>
              De 1968 até 1972, realizou no Seminário Teológico de Marti-Codolar
              (Barcelona-Espanha) os estudos teológicos, recebendo a Ordenação
              Presbiteral na cidade de Pamplona no 19 de agosto de 1972 pelo
              Bispo Auxiliar Dom Larrauri. Foi sempre, conforme os testemunhos
              dos seus formadores, uma pessoa excelente, dotado de um bom
              sentido de humor e um religioso exemplar.
            </p>
            <p>
              Já como sacerdote, exerceu o seu ministério como educador nas
              Escolas Profissionais Salesianas de Sarriá (Distrito de
              Barcelona-Espanha) e, posteriormente, num bairro, – naquela época
              caraterizado pela pobreza e a imigração –{" "}
              <span className="font-normal underline decoration-2 decoration-rose-500">
                dedicado pela manhã ao trabalho manual-operário e pela tarde
                como catequista dos jovens a ele confiados.
              </span>
            </p>
            <p>
              Em janeiro de 1979, pediu aos superiores salesianos poder-se
              dedicar plenamente ao apostolado como itinerante do Caminho
              Neocatecumenal. Naquele momento,
              <span className="font-medium bg-yellow-300">
                {" "}
                já formava parte de uma Comunidade Neocatecumenal na Paróquia de
                Santa Joaquina de Vedruna em Barcelona (Espanha) à que esteve
                sempre muito unido na fé e da qual partiu em missão.{" "}
              </span>
              Exerceu a missão itinerante nas regiões de La Mancha,
              Castilla-León, Astúrias, em Espanha, e também em Portugal,
              partindo para o Brasil no ano de 1990.
            </p>
            <Image
              width={300}
              height={200}
              alt="imagem"
              className="float-right rounded-lg bg-red-300 m-3 shadow-lg"
              src={"/img/brasilia/1.jpg"}
            />
            <p>
              Já no Brasil, trabalhou em diversas dioceses sempre como
              Presbítero Itinerante: Brasília, São Paulo, Franca e Jundiaí.
              Ajudou a fundar o Seminário Missionário Arquidiocesano
              <span className="italic"> Redemptoris Mater </span> de Brasília,
              um dos mais florescentes do Brasil. Profundamente unido com a sua
              comunidade neocatecumenal de origem,
              <span className="font-normal bg-orange-200">
                Pe. Ramón Sevillano passou os últimos anos de sua vida sem ter
                casa nem tempo para si mesmo, sendo um a mais nas famílias que o
                acolhiam, sempre disposto a partir para outros lugares, contatar
                outras gentes a quem pregar a salvação, o amor de Deus e sua
                predileção pelos pecadores. À sua condição de pessoa entregue ao
                Evangelho, acrescentam, quantos o conheceram, sua afabilidade e
                carinho para com todos os que tratava. Sempre teve uma palavra
                de iluminação e de confiança, sobretudo com os mais débeis,
                talvez por sentir-se débil físicamente, mas superava suas
                limitações com um grande sentido de humor.
              </span>
            </p>
            <p>
              O Pe. Ramón sofreu um acidente automobilístico na estrada que vai
              de Igarapava a Uberaba, na Diocese de Franca (Brasil), no 1º de
              janeiro de 1996. Após quatro dias de cuidados intensivos no
              hospital, passou da morte para a Vida, na Vigília da Festa da
              Epifania na cidade de Uberaba (Minas Gerais).
            </p>
            <p>
              O seu sepultamento celebrou-se em Franca (São Paulo), lugar onde
              iniciou o seu apostolado no Brasil. Foi presidido pelo então Bispo
              da Diocese, Dom Diógenes Silva Mathes. Acudiram ao ato mais de
              quatro mil pessoas de todo o Brasil, em especial das comunidades
              acompanhadas pelo Pe. Ramón, que carregaram o caixão como sinal de
              comunhão com aquele que os acompanhou no viver o Evangelho.
            </p>
            <p>
              O jornal local «Diário de Franca» escrevia, naqueles dias, sobre o
              Pe. Ramón Sevillano:
              <span className="italic font-medium p-1">
                O padre Ramón era muito respeitado dentro da cidade; a sua
                simplicidade para se comunicar, a sua serenidade e o seu amor
                para com todos eram de todos conhecidas. Cumpriu com grande
                entrega a sua missão na terra.
              </span>
            </p>
            <p>
              Que a sua entrega ao anúncio itinerante do Evangelho nos mantenha
              a todos em constante peregrinação.
            </p>
          </div>

          <div className="flex justify-center sm:justify-start mt-4">
            <ButtonLaranja
              descricao="Quero dar meu testemunho"
              href="contato"
              svg="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
            ></ButtonLaranja>
          </div>
        </div>
      </div>
    </div>
  );
}
