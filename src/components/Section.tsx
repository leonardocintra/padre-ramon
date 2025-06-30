import Image from "next/image";

interface SectionProps {
  title: string;
  text: string;
  imageUrl: string;
  imagePosition: "left" | "right";
}

export default function Section({
  title,
  text,
  imageUrl,
  imagePosition,
}: SectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
      {imagePosition === "left" && (
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt={title}
          className="w-full md:w-1/2 h-auto object-cover rounded shadow"
        />
      )}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-semibold mb-2 text-[#0A3274]">{title}</h2>
        <p className="text-gray-700 leading-relaxed">{text}</p>
      </div>
      {imagePosition === "right" && (
        <Image
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
