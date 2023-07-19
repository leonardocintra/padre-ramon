import QuadroPost from "../components/QuadroPost";
import QuadroFotos from "../components/QuadroFotos";
import QuadroVideo from "../components/QuadroVideo";
import CardFotos from "../components/CardFotos";
import Manchete from "../components/Manchete";

export default function Home() {
  return (
    <>
      <Manchete />

      <QuadroPost></QuadroPost>
      
      <CardFotos></CardFotos>

      <QuadroFotos></QuadroFotos>

      <QuadroVideo></QuadroVideo>
    </>
  );
}
