import { getTranslator } from "@/i18n/server";
import React from "react";

export default async function Skills2() {
  const t = await getTranslator();
  return (
    <section className="my-skill tmp-section-gapTop">
      <div className="container">
        <div className="section-head text-align-left mb--50">
          <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{t("skills.eyebrow")}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {t("shared.designTitleStart") + " "} <br />
            {t("shared.designTitleEnd")}
          </h2>
        </div>
        <div className="services-widget v1">
          <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
            <div className="my-skill-card">
              <div className="card-icon">
                <i className="fa-light fa-building-columns" />
              </div>
              <div className="card-title">
                <h3 className="main-title">{t("shared.visualDesign")}</h3>
                <p className="sub-title">{t("skills.visualDesignCount")}</p>
              </div>
              <p className="card-para">
                {t("skills.planningDescription")}
              </p>
              <a href="#" className="read-more-btn">
                {t("shared.readMore")}
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
                <h3 className="main-title">{t("shared.visualDesign")}</h3>
                <p className="sub-title">{t("skills.visualDesignCount")}</p>
              </div>
              <p className="card-para">
                {t("shared.portfolioSelection")}
              </p>
              <a href="#" className="read-more-btn">
                {t("shared.readMore")}
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
                <h3 className="main-title">{t("shared.motionDesign")}</h3>
                <p className="sub-title">{t("skills.motionDesignCount")}</p>
              </div>
              <p className="card-para">
                {t("skills.adaptabilityDescription")}
              </p>
              <a href="#" className="read-more-btn">
                {t("shared.readMore")}
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
