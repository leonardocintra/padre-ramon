import "swiper/css";
import FotoPadreRamon1 from "public/img/canva/1.png";
import FotoPadreRamon2 from "public/img/canva/2.png";
import FotoPadreRamon3 from "public/img/canva/3.png";
import FotoPadreRamon4 from "public/img/canva/4.png";
import FotoPadreRamon5 from "public/img/canva/5.png";
import FotoPadreRamon6 from "public/img/canva/6.png";
import FotoPadreRamon7 from "public/img/canva/7.png";
import FotoPadreRamon8 from "public/img/canva/8.png";
import FotoPadreRamon9 from "public/img/canva/9.png";
import FotoPadreRamon10 from "public/img/canva/10.png";
import FotoPadreRamon11 from "public/img/canva/11.png";
import FotoPadreRamon12 from "public/img/canva/12.png";
import FotoPadreRamon13 from "public/img/canva/13.png";
import { Swiper, SwiperSlide } from "swiper/react";
import ImagensQuadroFotos from "./_child/ImagensQuadroFotos";
import { Autoplay } from "swiper";

interface QuadroFotosProps {}

export default function QuadroFotos(props: QuadroFotosProps) {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl text-orange-700 text-center font-semibold mb-8">
          Fotos de Padre Ramón
        </h3>

        <div className="">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Padre Ramon com o bispo"
                src={FotoPadreRamon1}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon com Carmem Hernandez"
                src={FotoPadreRamon2}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle=""
                src={FotoPadreRamon3}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon e iniciadores do Caminho"
                src={FotoPadreRamon4}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle=""
                src={FotoPadreRamon5}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle=""
                src={FotoPadreRamon6}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon7}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon8}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon9}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon10}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon11}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon"
                src={FotoPadreRamon12}
              ></ImagensQuadroFotos>
            </SwiperSlide>
            <SwiperSlide>
              <ImagensQuadroFotos
                subTittle="Pe. Ramon e José Ronaldo"
                src={FotoPadreRamon13}
              ></ImagensQuadroFotos>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
