import { useTranslator } from "@/i18n/LocaleProvider";
import { closeMobilemenu2 } from "@/utlis/toggleMobilemenu";
import { useEffect, useState } from "react";

const navItems = [
  { id: 1, href: "#home", textKey: "nav.home" },
  { id: 2, href: "#about", textKey: "nav.about" },
  { id: 3, href: "#service", textKey: "nav.services" },
  { id: 4, href: "#portfolio", textKey: "nav.portfolio" },
  { id: 5, href: "#resume", textKey: "nav.resume" },
  { id: 6, href: "#pricing", textKey: "nav.pricing" },
  { id: 7, href: "#blog", textKey: "nav.blog" },
  { id: 8, href: "#contacts", textKey: "nav.contact" },
];

export default function OnepageNavMobile({
  sectionIds = navItems,
  activeClass = "current",
}) {
  const t = useTranslator();
  const [activeSection, setActiveSection] = useState(
    sectionIds[0].href.replace("#", "")
  );

  useEffect(() => {
    // Create an IntersectionObserver to track visibility of sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Update active section when the section is visible in the viewport
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px", // Trigger when section is 50% visible
      }
    );

    // Observe each section
    setTimeout(() => {
      sectionIds.forEach((elm) => {
        const element = document.querySelector(elm.href);
        if (element) {
          observer.observe(element);
        }
      });
    });
    return () => {
      // Cleanup the observer when the component unmounts
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleClick = (e, id) => {
    e.preventDefault();
    document
      .querySelector(id)
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    closeMobilemenu2();
  };

  return (
    <ul className="tmp-mainmenu onepagenav-click">
      {navItems.map((item) => (
        <li
          key={item.id}
          className={
            activeSection == item.href.replace("#", "")
              ? activeClass
              : "nav-item"
          }
        >
          <a
            className="smoth-animation"
            onClick={(e) => handleClick(e, item.href)}
            href={item.href}
          >
            {t(item.textKey)}
          </a>
        </li>
      ))}
    </ul>
  );
}
