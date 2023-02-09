import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
  imgSix,
} from "../assets/slider/mainCarousel";
import "./carousel.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = () => {
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);const onAutoplayTimeLeft = ( time, progress) => {
  //   progressCircle.current.style.setProperty('--progress', 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  //

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        // grabCursor={true}
        // navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        // onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-screen h-screen md:h-full">
        <SwiperSlide>
          <div className="swiper-scrollbar-vertical"></div>
          <img src={imgOne} alt="imgOne" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgTwo} alt="imgTwo" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgThree} alt="imgThree" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFour} alt="imgFour" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgFive} alt="imgFive" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={imgSix} alt="imgSix" />
        </SwiperSlide>

        {/* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
        </div> */}
      </Swiper>

      {/* <Slider /> */}
    </>
  );
};

export default Carousel;
