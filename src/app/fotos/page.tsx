// app/fotos/page.tsx
import Image from "next/image";

const photoGroups = [
  {
    title: "Seminário Redemptoris Mater de Brasília",
    description:
      "Participou junto com a equipe do Caminho Neocatecumenal na construção do Seminário Redemptoris Mater de Brasília",
    photos: [
      {
        src: "/img/redemptoris/equipe-carmem.jpg",
        alt: "Padre Ramón criança com a família",
        caption: "Equipe de catequistas do Seminário Redemptoris Mater",
      },
      {
        src: "/img/redemptoris/equipe.jpg",
        alt: "Padre Ramón brincando com amigos",
        caption:
          "Com a equipe do Seminário Redemptoris Mater no terreno que é hoje o Seminario Redemptoris Mater de Brasília",
      },
    ],
  },
  {
    title: "Juventude e Formação",
    description: "Fases da adolescência e formação religiosa do Padre Ramón.",
    photos: [
      {
        src: "/img/canva2/1.jpg",
        alt: "Padre Ramón no noviciado",
        caption: "Durante o noviciado em Arbós del Panadés.",
      },
      {
        src: "/img/canva2/2.jpg",
        alt: "Profissão Perpétua",
        caption: "Dia da Profissão Religiosa Perpétua no Tibidabo, 1968.",
      },
      {
        src: "/img/canva2/5.jpg",
        alt: "Padre Ramón no noviciado",
        caption: "Durante o noviciado em Arbós del Panadés.",
      },
      {
        src: "/img/canva2/6.jpg",
        alt: "Profissão Perpétua",
        caption: "Dia da Profissão Religiosa Perpétua no Tibidabo, 1968.",
      },
    ],
  },
  {
    title: "Velório e Homenagens",
    description: "Momentos de despedida e homenagens após seu falecimento.",
    photos: [
      {
        src: "/img/velorio/1.jpg",
        alt: "Velório com fiéis",
        caption: "Centenas de pessoas prestam homenagens em Franca - SP.",
      },
      {
        src: "/img/velorio/3.jpg",
        alt: "Flores e velas",
        caption: "Testemunhos de amor e gratidão ao redor de seu corpo.",
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
                <Image
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
