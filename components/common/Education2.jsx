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
            <span className="subtitle">{t("Education & Experience")}</span>
          </div>
          <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">
            {t("Empowering Creativity") + " "} <br />
            {t("through")}
          </h2>
          <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">
            {t("Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational")}
          </p>
        </div>
        <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
          {t("Education")}
          <span>
            <Image
              alt={t("custom-line")}
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
                <h4 className="edu-sub-title">{t(item.role)}</h4>
                <h2 className="edu-title">{item.duration}</h2>
                <p className="edu-para">{t(item.description)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="experiences-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="experiences-wrap-left-content">
                <h2 className="custom-title mb-32 tmp-scroll-trigger tmp-fade-in animation-order-1">
                  {t("Experiences")}
                  <span>
                    <Image
                      alt={t("custom-line")}
                      src="/assets/images/custom-line/custom-line.png"
                      width={81}
                      height={6}
                    />
                  </span>
                </h2>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-1">
                  <p className="ex-subtitle">{t("experience")}</p>
                  <h2 className="ex-name">{t("Soft Tech (2 Years)")}</h2>
                  <h3 className="ex-title">{t("UI/UX Designer")}</h3>
                  <p className="ex-para">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum desi dolore eu fugiat nulla pariatu Duis aute
                    irure.
                  </p>
                </div>
                <div className="experience-content tmp-scroll-trigger tmp-fade-in animation-order-2">
                  <p className="ex-subtitle">{t("experience")}</p>
                  <h2 className="ex-name">{t("ModernTech (3 Years)")}</h2>
                  <h3 className="ex-title">{t("App Developer")}</h3>
                  <p className="ex-para">
                    {t("In this portfolio, you’ll find a curated selection of projects that highlight my skills in [Main Areas, e.g., responsive web design.")}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="experiences-wrap-right-content">
                <Image
                  className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                  alt={t("expert-img")}
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
