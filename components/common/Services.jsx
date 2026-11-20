import { getTranslator } from "@/i18n/server";
import React from "react";

import { services } from "@/data/services";

import Link from "@/i18n/LocalizedLink";
export default async function Services({ isLight = false }) {
  const t = await getTranslator();
  return (
    <section className="service-area tmp-section-gap">
      <div className="container">
        <div className="row justify-content-center">
          {services.map((service) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={service.id}>
              <div
                className={`service-card-v1 tmp-scroll-trigger tmp-fade-in animation-order-${service.animationOrder} tmp-link-animation`}
              >
                <div className="service-card-icon">
                  <i className={service.icon} />
                </div>
                <h4 className="service-title">
                  <Link
                    href={`/service-details${isLight ? "-white" : ""}/${
                      service.slug
                    }`}
                  >
                    {t(service.titleKey)}
                  </Link>
                </h4>
                <p className="service-para">{t(service.projectsKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
