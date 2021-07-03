import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./css/swiper.css";
import "./css/fonts.css";

import Page from "./components/Page";
import Legenda from "./components/Legenda";

import img1 from "./img/img-page1.png";
import img2 from "./img/img-page2.png";
import img3 from "./img/img-page3.png";

SwiperCore.use([Pagination]);

function Tutorial() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <React.Fragment>
      <Swiper
        pagination={pagination}
        className="mySwiper"
      >
        <SwiperSlide>
          <Page
            title="Cerca e offri un passaggio senza impegno"
            description="Puoi cercare o offrire un passaggio per una località quando e come vuoi"
            img={img1}
            padding={false}
            alt="Ragazza che chiede passaggio"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Page
            title="Prenditi cura dell’ambiente"
            description="Offrendo o usufruendo un passaggio riduci le emissioni di Co2, i costi ed il traffico"
            img={img2}
            foglie={true}
            padding={false}
            alt="Ragazza in montagna"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Page
            title="Guadagna punti"
            description="Accompagnando amici in alcune località puoi guadagnare punti comulabili per riscattare buoni spesa e molto altro"
            img={img3}
            alt="Guadagna Punti e soldi"
            padding={true}
          />
        </SwiperSlide>
        <SwiperSlide><Legenda /></SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default Tutorial;
