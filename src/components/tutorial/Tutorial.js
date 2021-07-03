import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./css/swiper.css";

import Page1 from "./components/Page/Page1";

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
      <Swiper pagination={pagination} className="mySwiper">
        <SwiperSlide>
          <Page1 />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </React.Fragment>
  );
}

export default Tutorial;
