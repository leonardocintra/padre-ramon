import { CldImage } from "next-cloudinary";

interface SectionProps {
  title: string;
  text: React.ReactNode;
  imageIds: string[];
  imagePosition: "left" | "right";
}

export default function Section({
  title,
  text,
  imageIds,
  imagePosition,
}: SectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
      {imagePosition === "left" && (
        <div className="flex flex-col gap-4 shrink-0">
          {imageIds.map((imageId, index) => (
            <CldImage
              key={imageId}
              width={400}
              height={400}
              src={imageId}
              alt={`${title} - Imagem ${index + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      )}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
        <div className="text-justify">{text}</div>
      </div>
      {imagePosition === "right" && (
        <div className="flex flex-col gap-4 shrink-0">
          {imageIds.map((imageId, index) => (
            <CldImage
              key={imageId}
              width={400}
              height={400}
              src={imageId}
              alt={`${title} - Imagem ${index + 1}`}
              className="rounded shadow"
            />
          ))}
        </div>
      )}
    </section>
  );
}
