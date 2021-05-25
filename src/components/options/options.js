import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./options.module.css";
import { ReactComponent as RightArrow } from "../..//images/right.svg";
import { ReactComponent as LeftArrow } from "../..//images/left.svg";
import SliderImage1 from "../../images/image1.jpg";
import SliderImage2 from "../../images/image2.jpg";
import SliderImage3 from "../../images/image3.jpg";
import SliderImage4 from "../../images/image4.jpg";
import SliderImage5 from "../../images/image5.jpg";
import SliderImage6 from "../../images/image6.jpg";
import SliderImage7 from "../../images/image7.jpg";
import SliderImage8 from "../../images/image8.jpg";
import SliderImage9 from "../../images/image9.jpg";

export default function Options() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <RightArrow className={s.rightButton} />,
    prevArrow: <LeftArrow className={s.leftButton} />,
  };

  return (
    <div className={s.wrapper}>
      <Slider {...settings}>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage1} alt="SliderImage1"></img>
          <p className={s.slideText}>Sales Agent</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage2} alt="SliderImage2"></img>
          <p className={s.slideText}>Сity Business Owner</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage3} alt="SliderImage3"></img>
          <p className={s.slideText}>Tutor</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage4} alt="SliderImage4"></img>
          <p className={s.slideText}>Financial Advisor</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage5} alt="SliderImage"></img>
          <p className={s.slideText}>Personal Care Giver</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage6} alt="SliderImage6"></img>
          <p className={s.slideText}>Yoga Trainer</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage7} alt="SliderImage7"></img>
          <p className={s.slideText}>Nutritionist</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage8} alt="SliderImage8"></img>
          <p className={s.slideText}>Astrologer</p>
        </div>
        <div className={s.slidesItem}>
          <img className={s.image} src={SliderImage9} alt="SliderImage9"></img>
          <p className={s.slideText}>Senior Care Director</p>
        </div>
      </Slider>
    </div>
  );
}

// import { database } from "../database";

// let dots = document.getElementsByClassName("dotsItem"),
//   dotsArea = document.getElementsByClassName("dotsBlock"),
//   slides = document.getElementsByClassName("slidesItem"),
//   prev = document.getElementsByClassName("leftButton"),
//   next = document.getElementsByClassName("rightButton"),
//   slideIndex = 1;

// function showSlides(n) {
//   if (n < 1) {
//     slideIndex = slides.length;
//   } else if (n > slides.length) {
//     slideIndex = 1;
//   }
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (let i = 0; i < dots.length; i++) {
//     dots[i].classList.remove("dot-active");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].classList.add("active");
// }
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// prev.onclick = function () {
//   plusSlides(-1);
// };
// next.onclick = function () {
//   plusSlides(1);
// };
// dotsArea.onclick = function (e) {
//   for (let i = 0; i < dots.length + 1; i++) {
//     if (e.target.classList.contains("dot") && e.target == dots[i - 1]) {
//       currentSlide(i);
//     }
//   }
// };

// export default class Options extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 2,
//       slidesToScroll: 1,
//       nextArrow: <RightArrow className={s.rightButton} />,
//       prevArrow: <LeftArrow className={s.leftButton} />,
//     };
//     return (
//       <div className={s.wrapper}>
//         <Slider {...settings}>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage1}
//               alt="SliderImage1"
//             ></img>
//             <p className={s.slideText}>Sales Agent</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage2}
//               alt="SliderImage2"
//             ></img>
//             <p className={s.slideText}>Сity Business Owner</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage3}
//               alt="SliderImage3"
//             ></img>
//             <p className={s.slideText}>Tutor</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage4}
//               alt="SliderImage4"
//             ></img>
//             <p className={s.slideText}>Financial Advisor</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img className={s.image} src={SliderImage5} alt="SliderImage"></img>
//             <p className={s.slideText}>Personal Care Giver</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage6}
//               alt="SliderImage6"
//             ></img>
//             <p className={s.slideText}>Yoga Trainer</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage7}
//               alt="SliderImage7"
//             ></img>
//             <p className={s.slideText}>Nutritionist</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage8}
//               alt="SliderImage8"
//             ></img>
//             <p className={s.slideText}>Astrologer</p>
//           </div>
//           <div className={s.slidesItem}>
//             <img
//               className={s.image}
//               src={SliderImage9}
//               alt="SliderImage9"
//             ></img>
//             <p className={s.slideText}>Senior Care Director</p>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }
// export default function Options() {
//   return (
//     <div className={s.wrapper}>
//       <ul className={s.slides}>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage1} alt="SliderImage1"></img>
//           <p className={s.slideText}>Sales Agent</p>
//         </li>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage2} alt="SliderImage2"></img>
//           <p className={s.slideText}>Сity Business Owner</p>
//         </li>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage3} alt="SliderImage3"></img>
//           <p className={s.slideText}>Tutor</p>
//         </li>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage4} alt="SliderImage4"></img>
//           <p className={s.slideText}>Financial Advisor</p>
//         </li>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage5} alt="SliderImage5"></img>
//           <p className={s.slideText}>Personal Care Giver</p>
//         </li>
//         <li className={s.slidesItem}>
//           <img className={s.image} src={SliderImage6} alt="SliderImage6"></img>
//           <p className={s.slideText}>Yoga Trainer</p>
//         </li>
//         <li className={s.slidesItem}>
//   <img className={s.image} src={SliderImage7} alt="SliderImage7"></img>
//   <p className={s.slideText}>Nutritionist</p>
//         </li>
//         <li className={s.slidesItem}>
//   <img className={s.image} src={SliderImage8} alt="SliderImage8"></img>
//   <p className={s.slideText}>Astrologer</p>
//         </li>
//         <li className={s.slidesItem}>
//   <img className={s.image} src={SliderImage9} alt="SliderImage9"></img>
//   <p className={s.slideText}>Senior Care Director</p>
//         </li>
//       </ul>
//     </div>
//   );
// }

//   <div className={s.wrapper}>
//     {/* {database.map((item) => {
//         return (
//           <div key={item.title}>
//             <img className={s.image} src={item.url} alt={item.title}></img>

//             <h1>{item.title}</h1>
//           </div>
//         );
//       })} */}
//     <ul className={s.slides}>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage1} alt="SliderImage1"></img>
//         <p className={s.slideText}>Sales Agent</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage2} alt="SliderImage2"></img>
//         <p className={s.slideText}>Сity Business Owner</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage3} alt="SliderImage3"></img>
//         <p className={s.slideText}>Tutor</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage4} alt="SliderImage4"></img>
//         <p className={s.slideText}>Financial Advisor</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage5} alt="SliderImage5"></img>
//         <p className={s.slideText}>Personal Care Giver</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage6} alt="SliderImage6"></img>
//         <p className={s.slideText}>Yoga Trainer</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage7} alt="SliderImage7"></img>
//         <p className={s.slideText}>Nutritionist</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage8} alt="SliderImage8"></img>
//         <p className={s.slideText}>Astrologer</p>
//       </li>
//       <li className={s.slidesItem}>
//         <img className={s.image} src={SliderImage9} alt="SliderImage9"></img>
//         <p className={s.slideText}>Senior Care Director</p>
//       </li>
//     </ul>
//     <div className={s.buttonBlock}>
//       <div className={s.leftButton}>
//         <LeftArrow />
//       </div>
//       <div className={s.rightButton}>
//         <RightArrow />
//       </div>
//     </div>
//     <ul className={s.dotsBlock}>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//       <li className={s.dotsItem}></li>
//     </ul>
//   </div>;
