import { fotosData } from "@/data/fotos";
import CardFoto from "./CardFoto";

export default function CardFotos() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {fotosData.map((f, index) => (
            <CardFoto
              key={index}
              titulo={f.titulo}
              descricao={f.subTitulo}
              imageUrl={f.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
