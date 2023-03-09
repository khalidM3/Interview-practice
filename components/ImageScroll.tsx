import SwiperCore, { Lazy, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageWithFallback from "./ImageWithFallback";
import { Photo } from "@/nasa";

import "swiper/css";
SwiperCore.use([Lazy, Mousewheel]);


export interface ImageScrollProps {
  photos: Array<Photo>;
}

export default function ImageScroll({ photos }: ImageScrollProps) {
  return (
    <Swiper
      style={{
        overscrollBehaviorX: "contain",
      }}
      slidesPerView={4}
      spaceBetween={20}
      lazyPreloaderClass="swiper-preloader"
      direction={"horizontal"}
      scrollbar={true}
      mousewheel={true}
    >
      {photos.map((photo) => (
        <SwiperSlide key={`${photo.id}`} lazy>
          <ImageWithFallback
            src={photo.src}
            alt={photo.title}
            width={170}
            height={170}
          /> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
