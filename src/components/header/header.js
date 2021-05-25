import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./header.module.css";
import { ReactComponent as Build } from "../../images/Build.svg";
import { ReactComponent as Analyze } from "../../images/analyze.svg";
import { ReactComponent as Improve } from "../../images/improve.svg";
import { ReactComponent as Manage } from "../../images/manage.svg";

export default function Header() {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className={s.headerContainer}>
        <h1 className={s.headerTitle}>Why our Directory</h1>
        <Build className={s.headerIcon} />
        <Slider {...settings}>
          <div>
            <Build className={s.headerIcon} />
            <h2 className={s.headerSubTitle}>Offer coupons</h2>
            <span className={s.headerInfo}>
              Grow your customer base by offering free coupons that are
              advertised on social media and discoverable through Google search.
              No hidden or upfront fees and you get a free professional profile.
              Engage your customers and leads while expanding your business.
            </span>
          </div>
          <div>
            <Analyze className={s.headerIcon} />
            <h2 className={s.headerSubTitle}>Search and discover</h2>
            <span className={s.headerInfo}>
              Our directory is accessed by families across US and Canada to find
              local service providers and facilities by profession, services
              offered, or ratings and rankings We match families based on their
              needs.
            </span>
          </div>
          <div>
            <Improve className={s.headerIcon} />
            <h2 className={s.headerSubTitle}>Improve satisfaction</h2>
            <span className={s.headerInfo}>
              Get higher ratings and better reviews through transparency,
              media-rich profiles, engaging social blog, professional articles,
              and accreditation.Create events to promote your business and
              advertise them on social media.
            </span>
          </div>
          <div>
            <Manage className={s.headerIcon} />
            <h2 className={s.headerSubTitle}>Profile Boosting</h2>
            <span className={s.headerInfo}>
              Get more referrals through improved ratings and reviews,
              performance monitoring, recommendations from other professionals,
              and profile search boosting. Your profiles are discoverable on
              Google search.
            </span>
          </div>
        </Slider>
      </div>
    </>
  );
}
