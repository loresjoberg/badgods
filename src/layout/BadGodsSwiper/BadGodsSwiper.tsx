import React, {ReactElement} from 'react';
import './_BadGodsSwiper.scss';
import {folioType} from "../../types";
import SwiperCore, {Navigation, Scrollbar, Virtual, Keyboard} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useNavigate} from "react-router-dom";
import Stage from "../Stage/Stage";

export type BadGodsSwiperProps = {
  folios: folioType[];
  activeIndex: number;
  activeVolumeSlug: string;
  handleInit: Function;
  children: ReactElement;
}

export default function BadGodsSwiper({children, activeIndex, activeVolumeSlug, folios, handleInit}: BadGodsSwiperProps) {
  const [url, setUrl] = React.useState<string>('');
  const [moving, setMoving] = React.useState<boolean>(false);
  SwiperCore.use([Keyboard]);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (url !== window.location.pathname) {
      navigate(url);
    }
  }, [url, navigate])

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
      simulateTouch={false}
      navigation
      virtual
      keyboard={{enabled: true}}
      onKeyPress={() => {console.log('keypress')}}
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
      {children}

    </Swiper>
  );
}
