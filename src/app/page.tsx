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
  biographyText9,
} from "@/utils/biografia";

import MassInvite from "@/components/MassInvite";

export default function Home() {
  return (
    <div className="space-y-12">
      <MassInvite />
      <ActionButtons />
      <Hero />

      <Section
        title="Infância e Vocação"
        text={biographyText}
        imageIds={["juventude100"]}
        imagePosition="left"
      />

      <Section
        title="Formação e Primeiros Ministérios"
        text={biographyText2}
        imageIds={["juventude200"]}
        imagePosition="right"
      />

      <Section
        title="Missão Itinerante"
        text={biographyText3}
        imageIds={["2_szjkyk"]}
        imagePosition="left"
      />

      <Section
        title="Missão no Brasil"
        text={biographyText4}
        imageIds={["brasilia-fundacao_to4kfm"]}
        imagePosition="right"
      />
      <Section
        title="Caráter e Testemunho"
        text={biographyText5}
        imageIds={["joaopaulo_zlxgpw"]}
        imagePosition="left"
      />
      <Section
        title="Últimos Dias"
        text={biographyText6}
        imageIds={["1_z7qhcr"]}
        imagePosition="right"
      />
      <Section
        title="Despedida e Homenagem"
        text={biographyText7}
        imageIds={["3_wcobgp"]}
        imagePosition="left"
      />
      <Section
        title="Legado"
        text={biographyText8}
        imageIds={["cadeira_jy1iq6"]}
        imagePosition="right"
      />
      <Section
        title="30 anos de Saudade"
        text={biographyText9}
        imageIds={["30anos-Jader_xgzrkm", "30anos-missa_gfpult", "30anos-zeronaldo_cym7ns", "30anos-domangelo_sgyt2d"]}
        imagePosition="left"
      />
    </div>
  );
}
