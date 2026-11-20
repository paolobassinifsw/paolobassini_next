import { getTranslator } from "@/i18n/server";
import React from "react";
import Link from "@/i18n/LocalizedLink";
export default async function Copyright() {
  const t = await getTranslator();
  return (
    <div className="copyright-area-one">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-wrapper">
              <p className="copy-right-para tmp-link-animation">
                ©{" "}
                <a
                  href="https://themeforest.net/user/inversweb/portfolio"
                  target="_blank"
                >
                  Inversweb {new Date().getFullYear()}
                </a>{" "}
                {t("| All Rights Reserved")}
              </p>{" "}
              <ul className="tmp-link-animation dark-content">
                <li>
                  <a href="#">{t("Trams & Condition")}</a>
                </li>
                <li>
                  <a href="#">{t("Privacy Policy")}</a>
                </li>
                <li>
                  <Link href={`/contact`}>{t("Contact Us")}</Link>
                </li>
              </ul>
              <ul className="tmp-link-animation light-content">
                <li>
                  <a href="#">{t("Trams & Condition")}</a>
                </li>
                <li>
                  <a href="#">{t("Privacy Policy")}</a>
                </li>
                <li>
                  <Link href={`/contact-white`}>{t("Contact Us")}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
