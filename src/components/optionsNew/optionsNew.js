import s from "./optionsNew.module.css";
import SliderImage1 from "../../images/image1.jpg";
import SliderImage2 from "../../images/image2.jpg";
import SliderImage3 from "../../images/image3.jpg";
import SliderImage4 from "../../images/image4.jpg";
import SliderImage5 from "../../images/image5.jpg";
import SliderImage6 from "../../images/image6.jpg";
import SliderImage7 from "../../images/image7.jpg";
import SliderImage8 from "../../images/image8.jpg";
import SliderImage9 from "../../images/image9.jpg";
import React from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 375, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

export default function OptionsNew() {
  return (
    <div className={s.wrapper}>
      <h2 className={s.optionsTitle}>
        Choose your profession for more details
      </h2>
      <div className={s.sliderContainer}>
        <Carousel breakPoints={breakPoints}>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage1}
              alt="SliderImage1"
            ></img>
            <p className={s.slideText}>Sales Agent</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage2}
              alt="SliderImage2"
            ></img>
            <p className={s.slideText}>Сity Business Owner</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage3}
              alt="SliderImage3"
            ></img>
            <p className={s.slideText}>Tutor</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage4}
              alt="SliderImage4"
            ></img>
            <p className={s.slideText}>Financial Advisor</p>
          </div>
          <div className={s.slidesItem}>
            <img className={s.image} src={SliderImage5} alt="SliderImage"></img>
            <p className={s.slideText}>Personal Care Giver</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage6}
              alt="SliderImage6"
            ></img>
            <p className={s.slideText}>Yoga Trainer</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage7}
              alt="SliderImage7"
            ></img>
            <p className={s.slideText}>Nutritionist</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage8}
              alt="SliderImage8"
            ></img>
            <p className={s.slideText}>Astrologer</p>
          </div>
          <div className={s.slidesItem}>
            <img
              className={s.image}
              src={SliderImage9}
              alt="SliderImage9"
            ></img>
            <p className={s.slideText}>Senior Care Director</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
