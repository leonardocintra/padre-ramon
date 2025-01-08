import CardFotos from "@/components/custom/CardFotos";
import Manchete from "@/components/custom/Manchete";
import QuadroFotos from "@/components/custom/QuadroFotos";
import QuadroPost from "@/components/custom/QuadroPost";
import QuadroVideo from "@/components/custom/QuadroVideo";

export default function Home() {
  return (
    <div>
      <Manchete />

      <QuadroPost></QuadroPost>

      <CardFotos></CardFotos>
      
      <QuadroFotos></QuadroFotos>

      <QuadroVideo></QuadroVideo>
    </div>
  );
}
