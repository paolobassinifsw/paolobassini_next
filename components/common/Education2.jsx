import { getTranslator } from "@/i18n/server";
import React from "react";
import Image from "next/image";
import { educationExperienceData } from "@/data/education";
export default async function Education() {
  const t = await getTranslator();
  return (
    <section className="education-experience tmp-section-gapTop" id="resume">
      <div className="container">
        <div className="section-head mb--50">
          <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
            <span className="subtitle">{t("education.eyebrow")}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {t("education.titleStart") + " "} <br />
            {t("education.titleEnd")}
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            {t("education.description")}
          </p>
        </div>
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          {t("education.heading")}
          <span>
            <Image
              alt={t("shared.decorativeLineAlt")}
              src="/assets/images/custom-line/custom-line.png"
              width={81}
              height={6}
            />
          </span>
        </h2>
        <div className="row g-5">
          {educationExperienceData.map((item, index) => (
            <div className="col-lg-6 col-sm-6" key={index}>
              <div
                className={`education-experience-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-${item.animationOrder}`}
              >
                <h4 className="edu-sub-title">{t(item.roleKey)}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{t(item.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {t("education.experiencesHeading")}
                  <span>
                    <Image
                      alt={t("shared.decorativeLineAlt")}
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">{t("education.experienceLabel")}</p>
                  <h2 className="ex-name">{t("education.softTech.name")}</h2>
                  <h3 className="ex-title">{t("education.softTech.role")}</h3>
                  <p className="ex-para">
                    {t("education.softTech.description")}
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">{t("education.experienceLabel")}</p>
                  <h2 className="ex-name">{t("education.modernTech.name")}</h2>
                  <h3 className="ex-title">{t("education.modernTech.role")}</h3>
                  <p className="ex-para">
                    {t("education.modernTech.description")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt={t("education.imageAlt")}
                  src="/assets/images/experiences/expert-img.jpg"
                  width={945}
                  height={719}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
