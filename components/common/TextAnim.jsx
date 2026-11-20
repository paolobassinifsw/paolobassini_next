import { getTranslator } from "@/i18n/server";
import Image from "next/image";

export default async function TextAnim() {
  const t = await getTranslator();
  return (
    <div className="about-content-area">
      <div className="container tmp-section-gap">
        <div className="text-para-doc-wrap">
          <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in inv-title-animation-wrap animation-order-1">
            {t("intro.start") + " "} <span>{t("intro.portfolio")}</span> {" " + t("intro.work")}{" "}
            <span>{t("intro.webDesign")}</span> {" " + t("intro.experience")}
            <span> {" " + t("intro.since")}</span> {" " + t("intro.end")}
          </h2>
          <div className="right-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/right-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
          <div className="left-bg-text-para">
            <Image
              alt=""
              src="/assets/images/banner/left-bg-text-para-doc.png"
              width={614}
              height={268}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
