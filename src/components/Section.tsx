import { CldImage } from "next-cloudinary";

interface SectionProps {
  title: string;
  text: React.ReactNode;
  imageId: string;
  imagePosition: "left" | "right";
}

export default function Section({
  title,
  text,
  imageId: imageUrl,
  imagePosition,
}: SectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
      {imagePosition === "left" && (
        <CldImage
          width={300}
          height={300}
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/2 h-auto object-cover rounded shadow"
        />
      )}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold mb-2 text-[#0A3274]">{title}</h2>
        <div className="text-justify">{text}</div>
      </div>
      {imagePosition === "right" && (
        <CldImage
          width={500}
          height={500}
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/2 h-auto object-cover rounded shadow"
        />
      )}
    </section>
  );
}
