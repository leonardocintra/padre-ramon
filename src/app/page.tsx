"use client";

import Section from "@/components/Section";
import Hero from "@/components/Hero";
import ActionButtons from "@/components/ActionButtons";
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
      <ActionButtons />
      <Hero />

      <Section
        title="Infância e Vocação"
        text={biographyText}
        imageId="juventude100"
        imagePosition="left"
      />

      <Section
        title="Formação e Primeiros Ministérios"
        text={biographyText2}
        imageId="juventude200"
        imagePosition="right"
      />

      <Section
        title="Missão Itinerante"
        text={biographyText3}
        imageId="2_szjkyk"
        imagePosition="left"
      />

      <Section
        title="Missão no Brasil"
        text={biographyText4}
        imageId="brasilia-fundacao_to4kfm"
        imagePosition="right"
      />
      <Section
        title="Caráter e Testemunho"
        text={biographyText5}
        imageId="joaopaulo_zlxgpw"
        imagePosition="left"
      />
      <Section
        title="Últimos Dias"
        text={biographyText6}
        imageId="1_z7qhcr"
        imagePosition="right"
      />
      <Section
        title="Despedida e Homenagem"
        text={biographyText7}
        imageId="3_wcobgp"
        imagePosition="left"
      />
      <Section
        title="Legado"
        text={biographyText8}
        imageId="cadeira_jy1iq6"
        imagePosition="right"
      />
    </div>
  );
}
