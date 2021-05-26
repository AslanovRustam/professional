import s from "./footer.module.css";

export default function Footer() {
  return (
    <div className={s.footerContainer}>
      <h2 className={s.footerTitle}>
        ©2020 Icaria Health. All rights reserved.
      </h2>
    </div>
  );
}
