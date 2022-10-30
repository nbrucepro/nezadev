import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
import scooper from "../../img/scooper.png";
import HOC from "../../img/hoc.png";
import barefe from "../../img/baref.png";
// import tooxtme from "../../img/tooxtme.png"
import tooxtme from "../../img/tooxtm.png"
import yoevent from "../../img/yoevent.png"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        {/* <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <a href="https://neza-ascooper.vercel.app/">
          <img src={scooper} alt="nescooper" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://strikers-barefoot-fe.vercel.app/">
          <img src={barefe} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          {/* <a href="https://strikers-barefoot-fe.vercel.app/"> */}
          <img src={tooxtme} alt="" />
          {/* </a> */}
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://yo-events-client.vercel.app/">
          <img src={yoevent} alt="" />
          </a>
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
