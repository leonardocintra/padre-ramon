// app/page.tsx
import Section from "@/components/Section";
import Hero from "@/components/Hero";
import {
  biographyText,
  biographyText2,
  biographyText3,
  biographyText4,
  biographyText5,
  biographyText6,
  biographyText7,
  biographyText8,
} from "@/utils/biografia";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />

      <Section
        title="Infância e Vocação"
        text={biographyText}
        imageUrl="/img/canva2/jovem.jpg"
        imagePosition="left"
      />

      <Section
        title="Formação e Primeiros Ministérios"
        text={biographyText2}
        imageUrl="/img/vocacao/ordenacao.jpg"
        imagePosition="right"
      />

      <Section
        title="Missão Itinerante"
        text={biographyText3}
        imageUrl="/img/vocacao/formacao.jpg"
        imagePosition="left"
      />

      <Section
        title="Missão no Brasil"
        text={biographyText4}
        imageUrl="/img/canva/brasilia-fundacao.png"
        imagePosition="right"
      />
      <Section
        title="Caráter e Testemunho"
        text={biographyText5}
        imageUrl="/img/velorio/padre-ramon1.jpg"
        imagePosition="left"
      />
      <Section
        title="Últimos Dias"
        text={biographyText6}
        imageUrl="/img/velorio/1.jpg"
        imagePosition="right"
      />
      <Section
        title="Despedida e Homenagem"
        text={biographyText7}
        imageUrl="/img/velorio/3.jpg"
        imagePosition="left"
      />
      <Section
        title="Legado"
        text={biographyText8}
        imageUrl="/img/canva2/cadeira.jpg"
        imagePosition="right"
      />
    </div>
  );
}
