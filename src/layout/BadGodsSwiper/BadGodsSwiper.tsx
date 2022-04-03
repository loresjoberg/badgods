import React from 'react';
import './_BadGodsSwiper.scss';
import {folioType} from "../../types";
import {Navigation, Scrollbar} from "swiper";
import Footer from "../Footer/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import {useNavigate} from "react-router-dom";
import Stage from "../Stage/Stage";

export type BadGodsSwiperProps = {
  folios: folioType[];
  activeIndex: number;
  activeVolumeSlug: string;
}

export default function BadGodsSwiper({activeIndex, activeVolumeSlug, folios}: BadGodsSwiperProps) {
  const [url, setUrl] = React.useState<string>('');
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('activeIndex', activeIndex, url);
  }, [url])

  const goTo = (slug: string) => {
    setUrl('/view/' + activeVolumeSlug + "/" + slug);
  }

  const slides = folios.map((folio) => {
    return <SwiperSlide className={"FolioSlide"} key={folio.slug}>
      <Stage activeFolio={folio} activeVolumeSlug={activeVolumeSlug}/>
    </SwiperSlide>
  });

  const whileMoving = (elements: Element[]) => {
    elements.forEach((element) => {element.className = element.className + " inTransit"});
  }

  return (<Swiper
      id={"BadGodsSwiper"}
      className={"BadGodsSwiper"}
      modules={[Navigation, Scrollbar]}
      spaceBetween={0}
      slidesPerView={"auto"}
      navigation
      initialSlide={activeIndex}
      // onProgress={(swiper,progress) => {
      //   console.log('onProgress', progress);
      // }}
      onSliderFirstMove={(swiper,event) => {
        const slides = [
          document.getElementsByClassName('swiper-slide-active ')[0],
          document.getElementsByClassName('swiper-slide-prev ')[0],
          document.getElementsByClassName('swiper-slide-next')[0],
          ];
        whileMoving(slides);
      }}
      onActiveIndexChange={(swiper) => {
        // console.log('activeIndexChange');
      }}
      onSlideChangeTransitionEnd={(value) => {
        // console.log('slideChangeTransitionEnd');

        const slideSlug = folios[value.activeIndex].slug;
        goTo(slideSlug);
      }}>
      {slides}
      <Footer currentIndex={activeIndex}
              folios={folios}/>
    </Swiper>
  );
}
