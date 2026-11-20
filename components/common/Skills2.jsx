import { getTranslator } from "@/i18n/server";
import React from "react";

export default async function Skills2() {
  const t = await getTranslator();
  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{t("My Skill")}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {t("Elevated Designs Personalized") + " "} <br />
            {t("the best Experiences")}
          </h2>
        </div>
        <div className="services-widget v1">
          <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-building-columns" />
              </div>
              <div className="card-title">
                <h3 className="main-title">{t("Ui/visual Design")}</h3>
                <p className="sub-title">{t("21 Done")}</p>
              </div>
              <p className="card-para">
                {t("My work is driven by the belief that thoughtful design and strategic planning can empower brands strategic planning can empower brands")}
              </p>
              <a href="#" className="read-more-btn">
                {t("Read More")}
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-calendar" />
              </div>
              <div className="card-title">
                <h3 className="main-title">{t("Ui/visual Design")}</h3>
                <p className="sub-title">{t("21 Done")}</p>
              </div>
              <p className="card-para">
                {t("In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design")}
              </p>
              <a href="#" className="read-more-btn">
                {t("Read More")}
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-pen-nib" />
              </div>
              <div className="card-title">
                <h3 className="main-title">{t("Motion Design")}</h3>
                <p className="sub-title">{t("20 Done")}</p>
              </div>
              <p className="card-para">
                {t("Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs")}
              </p>
              <a href="#" className="read-more-btn">
                {t("Read More")}
                <span className="read-more-icon">
                  <i className="fa-solid fa-angle-right" />
                </span>
              </a>
            </div>
            <button className="service-link modal-popup" />
          </div>
          <div className="active-bg wow fadeInUp mleave" />
        </div>
      </div>
    </section>
  );
}
