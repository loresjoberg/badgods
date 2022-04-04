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
  const [moving, setMoving] = React.useState<boolean>(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    // console.log('navigate', url, window.location.pathname);
    if (url !== window.location.pathname) {
      // console.log('nav');
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

    if (moving) {
      return;
    }
    setMoving(true);
    const swiper = document.getElementsByClassName('swiper')[0];
    if (swiper) {
      swiper.className = swiper.className + " inTransit";
    }
    // const active = document.getElementsByClassName('swiper-slide-active ')[0] || null;
    // const prev = document.getElementsByClassName('swiper-slide-prev ')[0] || null;
    // const next = document.getElementsByClassName('swiper-slide-next')[0] || null;
    //
    // const slides = [];
    //
    // if (active) {
    //   slides.push(active);
    // }
    //
    // if (prev) {
    //   slides.push(prev);
    // }
    //
    // if (next) {
    //   slides.push(next);
    // }
    slides.forEach((slide) => {
    });
  }

  const afterStopping = () => {
  setMoving(false);
    const swiper = document.getElementsByClassName('swiper')[0];

      if (swiper.classList.contains("inTransit")) {
        swiper.classList.remove("inTransit");
      }
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
        console.log('move');
        whileMoving();
      }}
      onSwiper={(swiper) => {
        handleInit(swiper)
      }}
      onTransitionEnd={(swiper) => {
        console.log('transition end');
        afterStopping();
        goTo(folios[swiper.activeIndex].slug);
      }}
      onTransitionStart={(swiper) => {
        console.log('transition start');
        whileMoving();
      }}
      onBeforeSlideChangeStart={(swiper) => {
        console.log('beforeSlideChangeStart');
        // whileMoving();
      }}
    >
      {slides}
      <Footer currentIndex={activeIndex}
              folios={folios}/>
    </Swiper>
  );
}
