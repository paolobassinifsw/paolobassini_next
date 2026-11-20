"use client";

import { useTranslator } from "@/i18n/LocaleProvider";
import { closeSidebar } from "@/utlis/toggleSidebar";

export default function Sidebar() {
  const t = useTranslator();
  return (
    <div className="d-none d-xl-block">
      <div className="tmp-sidebar-area tmp_side_bar">
        <div className="inner">
          <div className="top-area">
            <a href="index.html" className="logo">
              <img
                className="logo-dark"
                alt={t("shared.logoAlt")}
                src="/assets/images/logo/white-logo-reeni.png"
                width={121}
                height={41}
              />
              <img
                className="logo-white"
                alt={t("shared.logoAlt")}
                src="/assets/images/logo/logo-white.png"
                width={121}
                height={40}
              />
            </a>
            <div className="close-icon-area">
              <button
                className="tmp-round-action-btn close_side_menu_active"
                onClick={closeSidebar}
              >
                <i className="fa-sharp fa-light fa-xmark" />
              </button>
            </div>
          </div>
          <div className="content-wrapper">
            <div className="image-area-feature">
              <a href="index.html">
                <img
                  alt={t("sidebar.imageAlt")}
                  src="/assets/images/logo/man.png"
                  width={340}
                  height={196}
                />
              </a>
            </div>
            <h5 className="title mt--30">
              {t("sidebar.title")}
            </h5>
            <p className="disc">
              {t("sidebar.description")}
            </p>
            <div className="short-contact-area">
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-phone" />
                <div className="information tmp-link-animation">
                  <span>{t("sidebar.call")}</span>
                  <a href="#" className="number">
                    +92 (8800) - 98670
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-envelope" />
                <div className="information tmp-link-animation">
                  <span>{t("sidebar.mail")}</span>
                  <a href="#" className="number">
                    example@info.com
                  </a>
                </div>
              </div>
              {/* single contact information end */}
              {/* single contact information */}
              <div className="single-contact">
                <i className="fa-solid fa-location-crosshairs" />
                <div className="information tmp-link-animation">
                  <span>{t("sidebar.address")}</span>
                  <span className="number">66 Broklyant, New York 3269</span>
                </div>
              </div>
              {/* single contact information end */}
            </div>
            {/* social area start */}
            <div className="social-wrapper mt--20">
              <span className="subtitle">{t("shared.follow")}</span>
              <div className="social-link">
                <a href="#">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>
            {/* social area end */}
          </div>
        </div>
      </div>
      <a
        className="overlay_close_side_menu close_side_menu_active"
        onClick={closeSidebar}
        href="#"
      />
    </div>
  );
}
