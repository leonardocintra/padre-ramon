'use client';

import { useState, useEffect, useCallback } from 'react';
import { photoGroups } from '@/data/fotos';
import { CldImage } from 'next-cloudinary';

export default function FotosPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const openModal = (photo: { src: string; alt: string; caption: string }) => {
    setSelectedImage(photo);
  };

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage, closeModal]);

  return (
    <main className="space-y-16 px-6 py-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Galeria de Fotos</h1>
      {photoGroups.map((group, index) => (
        <section key={index}>
          <h2 className="text-2xl font-semibold mb-2">{group.title}</h2>
          <p className="mb-6 text-gray-600">{group.description}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {group.photos.map((photo, i) => (
              <figure key={i} className="rounded overflow-hidden cursor-pointer" onClick={() => openModal(photo)}>
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

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={closeModal}
        >
            <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white text-5xl font-bold z-50"
                aria-label="Fechar"
            >
                &times;
            </button>
          <div 
            className="relative bg-white p-4 rounded-lg max-w-3xl w-full max-h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
                <CldImage
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="rounded w-full h-auto"
                />
                <button 
                onClick={closeModal} 
                className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-gray-800 bg-opacity-70 text-white font-bold py-2 px-4 rounded"
                >
                Fechar (ESC)
                </button>
            </div>
            <p className="mt-4 text-center text-gray-800">{selectedImage.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
}
