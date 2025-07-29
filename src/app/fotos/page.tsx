"use client";

import { photoGroups } from "@/data/fotos";
import { CldImage } from "next-cloudinary";

export default function FotosPage() {
  return (
    <main className="space-y-16 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Galeria de Fotos</h1>
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
                <figcaption className="mt-2 text-sm text-gray-700 text-center">
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
