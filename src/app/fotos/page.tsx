"use client";

import { CldImage } from "next-cloudinary";

const photoGroups = [
  {
    title: "Seminário Redemptoris Mater de Brasília",
    description:
      "Participou junto com a equipe do Caminho Neocatecumenal na construção do Seminário Redemptoris Mater de Brasília",
    photos: [
      {
        src: "2_szjkyk",
        alt: "Padre Ramón criança com a família",
        caption: "Equipe de catequistas do Seminário Redemptoris Mater",
      },
      {
        src: "4_mkmohi",
        alt: "Padre Ramón brincando com amigos",
        caption:
          "Com a equipe do Seminário Redemptoris Mater no terreno que é hoje o Seminario Redemptoris Mater de Brasília",
      },
      {
        src: "6_jz3vbw",
        alt: "Padre Ramón em grupo",
        caption: "Padre Ramón em grupo durante a construção do seminário.",
      }
    ],
  },
  {
    title: "Juventude e Formação",
    description: "Fases da adolescência e formação religiosa do Padre Ramón.",
    photos: [
      {
        src: "formacao_cyryae",
        alt: "Padre Ramón no noviciado",
        caption: "Durante o noviciado em Arbós del Panadés.",
      },
      {
        src: "6_axvu1x",
        alt: "Profissão Perpétua",
        caption: "Dia da Profissão Religiosa Perpétua no Tibidabo, 1968.",
      },
      {
        src: "infancia_ywkl0g",
        alt: "Padre Ramón criança",
        caption: "Padre Ramón em sua infância.",
      },
      {
        src: "jovem_vfwb7x",
        alt: "Padre Ramón jovem",
        caption: "Padre Ramón em sua juventude.",
      },
    ],
  },
  {
    title: "Com Santo Papa João Paulo II",
    description: "Encontro com o Papa João Paulo II em Roma.",
    photos: [
      {
        src: "joaopaulo_zlxgpw",
        alt: "Padre Ramón com o Papa João Paulo II",
        caption: "Durante o encontro com o Papa João Paulo II em Roma.",
      },
    ],
  },
  {
    title: "Peregrinações e Missões",
    description: "Momentos de peregrinação e missões do Padre Ramón.",
    photos: [
      {
        src: "pessoal1_lwc0qv",
        alt: "Padre Ramón em missão",
        caption: "Padre Ramón e José Ronaldo",
      },
      {
        src: "pessoal3_oocqar",
        alt: "Padre Ramón em missão",
        caption: "Padre Ramón e amigos",
      },
      {
        src: "pessoal2_mn5bzm",
        alt: "Padre Ramón em missão",
        caption: "Padre Ramón e amigos",
      },
    ],
  },
  {
    title: "Velório e Homenagens",
    description: "Momentos de despedida e homenagens após seu falecimento.",
    photos: [
      {
        src: "1_z7qhcr",
        alt: "Velório com fiéis",
        caption: "Centenas de pessoas prestam homenagens em Franca - SP.",
      },
      {
        src: "3_wcobgp",
        alt: "Santinho",
        caption: "Santinho do Padre Ramón distribuído durante o velório.",
      },
    ],
  },
];

export default function FotosPage() {
  return (
    <main className="space-y-16 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center">Galeria de Fotos</h1>
      {photoGroups.map((group, index) => (
        <section key={index}>
          <h2 className="text-2xl font-semibold mb-2">{group.title}</h2>
          <p className="mb-6 text-gray-600">{group.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {group.photos.map((photo, i) => (
              <figure key={i} className="rounded overflow-hidden">
                <CldImage
                  src={photo.src}
                  alt={photo.alt}
                  width={600}
                  height={400}
                  className="rounded shadow"
                />
                <figcaption className="mt-2 text-sm text-gray-700">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
