import s from "./main.module.css";

export default function MainSection() {
  return (
    <div className={s.mainSection}>
      <div className={s.mainContainer}>
        <div className={s.mainSubContainer}>
          <h2 className={s.mainTitle}>Become a five-star professional!</h2>
          <p className={s.mainInformation}>
            Join the growing community of professional icarians. Use the iCaria
            professional services to launch and grow your business, manage your
            clients, organize your schedule, and simplify your payments. With
            iCaria certification, your customers will be assured safe and secure
            access to services.
          </p>
          <button className={s.mainButton} type="button">
            Request Info
          </button>
        </div>
      </div>
    </div>
    // <div className={s.mainSection}>
    //   <div className={s.mainContainer}>
    //     <div>
    //       <h2 className={s.mainTitle}>Become a five-star professional!</h2>
    //       <p className={s.mainInformation}>
    //         Join the growing community of professional icarians. Use the iCaria
    //         professional services to launch and grow your business, manage your
    //         clients, organize your schedule, and simplify your payments. With
    //         iCaria certification, your customers will be assured safe and secure
    //         access to services.
    //       </p>
    //       <button className={s.mainButton} type="button">
    //         Request Info
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
