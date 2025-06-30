// app/page.tsx
import Section from "@/components/Section";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <Section
        imagePosition="right"
        imageUrl="/img/canva2/jovem.jpg"
        title="Causa de Beatificação"
        text="O Pe. Ramón Sevillano Valencia, filho de Alfonso e Rosario, nasceu em Cirauqui (Navarra) no dia 31 de agosto de 1943."
      />

      <Section
        imagePosition="left"
        imageUrl="/img/vocacao/vocacao.jpg"
        title="Vocação e Primeiros Passos"
        text="Tendo sentido o chamado a ser presbítero e missionário, ingressou, num primeiro momento, no Aspirantado Salesiano de Girona (Espanha) em 1957. No curso de 1961-62 fez o Noviciado, preparatório para entrar na Congregação Salesiana, em Arbós del Panadés (Espanha) e a primeira Profissão religiosa temporal foi realizada em 16 de agosto de 1962."
      />

      <Section
        imagePosition="right"
        imageUrl="/img/vocacao/formacao.jpg"
        title="Formação Religiosa"
        text="Cursou os dois primeiros anos de Filosofia no Estudiantado de Sant Vicenç dels Horts, e o terceiro em Sentmenat. Realizou a Profissão Religiosa Perpétua no Templo Expiatório Nacional do Tibidabo em 1968, sendo reconhecido como piedoso, trabalhador e entregue à vocação sacerdotal."
      />

      <Section
        imagePosition="left"
        imageUrl="/img/vocacao/ordenacao.jpg"
        title="Ordenação e Ministério"
        text="Realizou seus estudos teológicos entre 1968 e 1972 e foi ordenado presbítero em Pamplona. Atuou como educador e catequista, sendo reconhecido por seu humor, zelo apostólico e vida exemplar."
      />

      <Section
        imagePosition="right"
        imageUrl="/img/canva/brasilia-fundacao.png"
        title="Missão Itinerante"
        text="Em 1979, ingressou como presbítero itinerante no Caminho Neocatecumenal, servindo em várias regiões da Espanha, Portugal e, a partir de 1990, no Brasil, fundando o Seminário Redemptoris Mater de Brasília."
      />

      <Section
        imagePosition="left"
        imageUrl="/img/canva2/cadeira.jpg"
        title="Últimos Anos e Legado"
        text="Viveu sem casa própria, sendo acolhido por diversas famílias. Faleceu em 1º de janeiro de 1996 após um acidente, deixando um testemunho de entrega e amor ao Evangelho, com milhares de pessoas em seu sepultamento."
      />
    </div>
  );
}
