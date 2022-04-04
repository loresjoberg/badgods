import React from 'react';
import './_BadGodsSwiper.scss';
import {folioType} from "../../types";
import {Navigation, Scrollbar, Virtual} from "swiper";
import Footer from "../Footer/Footer";
import {Swiper, SwiperSlide} from "swiper/react";
import {useNavigate} from "react-router-dom";
import Stage from "../Stage/Stage";

export type BadGodsSwiperProps = {
  folios: folioType[];
  activeIndex: number;
  activeVolumeSlug: string;
  handleInit: Function;
}

export default function BadGodsSwiper({activeIndex, activeVolumeSlug, folios, handleInit}: BadGodsSwiperProps) {
  const [url, setUrl] = React.useState<string>('');

  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('navigate', url, window.location.pathname);
    if (url !== window.location.pathname) {
      console.log('nav');
      navigate(url);

    }
  }, [url])

  const goTo = (slug: string) => {
    setUrl('/view/' + activeVolumeSlug + "/" + slug);
  }

  const slides = folios.map((folio, index) => {
    return <SwiperSlide className={"FolioSlide"} key={folio.slug} virtualIndex={index}>
      <Stage activeFolio={folio} activeVolumeSlug={activeVolumeSlug}/>
    </SwiperSlide>
  });

  const whileMoving = () => {

    const active = document.getElementsByClassName('swiper-slide-active ')[0] || null;
    const prev = document.getElementsByClassName('swiper-slide-prev ')[0] || null;
    const next = document.getElementsByClassName('swiper-slide-next')[0] || null;

    const slides = [];

    if (active) {
      slides.push(active);
    }

    if (prev) {
      slides.push(prev);
    }

    if (next) {
      slides.push(next);
    }
    slides.forEach((slide) => {

      slide.className = slide.className + " inTransit";
    });
  }

  const afterStopping = () => {

    const slides = document.getElementsByClassName('FolioSlide');
    Array.prototype.forEach.call(slides, (slide) => {
      if (slide.classList.contains("inTransit")) {
        slide.classList.remove("inTransit");
      }
    })
  }

  return (<Swiper
      id={"BadGodsSwiper"}
      className={"BadGodsSwiper"}
      modules={[Navigation, Scrollbar, Virtual]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      virtual
      initialSlide={activeIndex}
      onSliderMove={() => {
        whileMoving();
      }}
      onSwiper={(swiper) => {
        handleInit(swiper)
      }}
      onTransitionEnd={(swiper) => {
        afterStopping();
        goTo(folios[swiper.activeIndex].slug);
      }}
    >
      {slides}
      <Footer currentIndex={activeIndex}
              folios={folios}/>
    </Swiper>
  );
}
