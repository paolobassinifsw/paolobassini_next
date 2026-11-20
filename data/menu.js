import { englishCopy } from "@/i18n/englishCopy";
export const menuItems = [
  { ...englishCopy({ label: "nav.home" }), href: "/", isLink: true },
  { ...englishCopy({ label: "nav.about" }), href: "/about", isLink: true },
  {
    ...englishCopy({ label: "nav.services" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.service" }), href: "/service" },
      { ...englishCopy({ label: "nav.serviceDetails" }), href: "/service-details/success-architects" },
    ],
  },
  {
    ...englishCopy({ label: "nav.blog" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.blogClassic" }), href: "/blog" },
      {
        ...englishCopy({ label: "nav.blogDetails" }),
        href: "/blog-details/lets-bring-your-ideas-to-life-contact-me-and-lets",
      },
    ],
  },
  {
    ...englishCopy({ label: "nav.project" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.project" }), href: "/project" },
      {
        ...englishCopy({ label: "nav.projectDetails" }),
        href: "/project-details/my-portfolio-of-innovation",
      },
    ],
  },
  { ...englishCopy({ label: "nav.contact" }), href: "/contact", isLink: true },
];
export const menuItemsLight = [
  { ...englishCopy({ label: "nav.home" }), href: "/", isLink: true },
  { ...englishCopy({ label: "nav.about" }), href: "/about-white", isLink: true },
  {
    ...englishCopy({ label: "nav.services" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.service" }), href: "/service-white" },
      {
        ...englishCopy({ label: "nav.serviceDetails" }),
        href: "/service-details-white/success-architects",
      },
    ],
  },
  {
    ...englishCopy({ label: "nav.blog" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.blogClassic" }), href: "/blog-white" },
      {
        ...englishCopy({ label: "nav.blogDetails" }),
        href: "/blog-details-white/lets-bring-your-ideas-to-life-contact-me-and-lets",
      },
    ],
  },
  {
    ...englishCopy({ label: "nav.project" }),
    href: "#",
    hasDropdown: true,
    submenu: [
      { ...englishCopy({ label: "nav.project" }), href: "/project-white" },
      {
        ...englishCopy({ label: "nav.projectDetails" }),
        href: "/project-details-white/my-portfolio-of-innovation",
      },
    ],
  },
  { ...englishCopy({ label: "nav.contact" }), href: "/contact-white", isLink: true },
];
export const demoData = [
  { href: "/", img: "/assets/images/demo/home-1.png", ...englishCopy({ title: "demo.main" }) },
  {
    href: "/index-02",
    img: "/assets/images/demo/home-2.png",
    ...englishCopy({ title: "demo.number02" }),
  },
  {
    href: "/index-03",
    img: "/assets/images/demo/home-3.png",
    ...englishCopy({ title: "demo.number03" }),
  },
  {
    href: "/index-04",
    img: "/assets/images/demo/home-4.png",
    ...englishCopy({ title: "demo.number04" }),
  },
  {
    href: "/index-05",
    img: "/assets/images/demo/home-5.png",
    ...englishCopy({ title: "demo.number05" }),
  },
  {
    href: "/index-06",
    img: "/assets/images/demo/home-6.png",
    ...englishCopy({ title: "demo.number06" }),
  },
  {
    href: "/index-07",
    img: "/assets/images/demo/home-7.png",
    ...englishCopy({ title: "demo.number07" }),
  },
  {
    href: "/index-08",
    img: "/assets/images/demo/home-8.png",
    ...englishCopy({ title: "demo.number08" }),
  },
  {
    href: "/index-09",
    img: "/assets/images/demo/home-9.png",
    ...englishCopy({ title: "demo.number09" }),
  },
  {
    href: "/index-10",
    img: "/assets/images/demo/home-10.png",
    ...englishCopy({ title: "demo.number10" }),
  },
  {
    href: "/index-11",
    img: "/assets/images/demo/home-11.png",
    ...englishCopy({ title: "demo.number11" }),
  },
  {
    href: "/index-12",
    img: "/assets/images/demo/home-12.png",
    ...englishCopy({ title: "demo.number12" }),
  },
  {
    href: "/index-13",
    img: "/assets/images/demo/home-13.png",
    ...englishCopy({ title: "demo.number13" }),
  },
  {
    href: "/index-14",
    img: "/assets/images/demo/home-14.png",
    ...englishCopy({ title: "demo.number14" }),
  },
  {
    href: "/index-15",
    img: "/assets/images/demo/home-15.png",
    ...englishCopy({ title: "demo.number15" }),
  },
  {
    href: "/index-16",
    img: "/assets/images/demo/home-16.png",
    ...englishCopy({ title: "demo.number16" }),
  },
  {
    href: "/index-17",
    img: "/assets/images/demo/home-17.png",
    ...englishCopy({ title: "demo.number17" }),
  },
  {
    href: "/index-18",
    img: "/assets/images/demo/home-18.png",
    ...englishCopy({ title: "demo.number18" }),
  },
  {
    href: "/index-19",
    img: "/assets/images/demo/home-19.png",
    ...englishCopy({ title: "demo.number19" }),
  },
  {
    href: "/index-20",
    img: "/assets/images/demo/home-20.png",
    ...englishCopy({ title: "demo.number20" }),
  },
  {
    href: "/index-21",
    img: "/assets/images/demo/home-21.png",
    ...englishCopy({ title: "demo.number21" }),
  },
  {
    href: "/index-22",
    img: "/assets/images/demo/home-22.png",
    ...englishCopy({ title: "demo.number22" }),
  },
];

export const whiteDemoData = [
  {
    href: "/index-white",
    img: "/assets/images/demo/home-1-white.png",
    ...englishCopy({ title: "demo.main" }),
  },
  {
    href: "/index-02-white",
    img: "/assets/images/demo/home-2-white.png",
    ...englishCopy({ title: "demo.number02" }),
  },
  {
    href: "/index-03-white",
    img: "/assets/images/demo/home-3-white.png",
    ...englishCopy({ title: "demo.number03" }),
  },
  {
    href: "/index-04-white",
    img: "/assets/images/demo/home-4-white.png",
    ...englishCopy({ title: "demo.number04" }),
  },
  {
    href: "/index-05-white",
    img: "/assets/images/demo/home-5-white.png",
    ...englishCopy({ title: "demo.number05" }),
  },
  {
    href: "/index-06-white",
    img: "/assets/images/demo/home-6-white.png",
    ...englishCopy({ title: "demo.number06" }),
  },
  {
    href: "/index-07-white",
    img: "/assets/images/demo/home-7-white.png",
    ...englishCopy({ title: "demo.number07" }),
  },
  {
    href: "/index-08-white",
    img: "/assets/images/demo/home-8-white.png",
    ...englishCopy({ title: "demo.number08" }),
  },
  {
    href: "/index-09-white",
    img: "/assets/images/demo/home-9-white.png",
    ...englishCopy({ title: "demo.number09" }),
  },
  {
    href: "/index-10-white",
    img: "/assets/images/demo/home-10-white.png",
    ...englishCopy({ title: "demo.number10" }),
  },
  {
    href: "/index-11-white",
    img: "/assets/images/demo/home-11-white.png",
    ...englishCopy({ title: "demo.number11" }),
  },
  {
    href: "/index-12-white",
    img: "/assets/images/demo/home-12-white.png",
    ...englishCopy({ title: "demo.number12" }),
  },
  {
    href: "/index-13-white",
    img: "/assets/images/demo/home-13-white.png",
    ...englishCopy({ title: "demo.number13" }),
  },
  {
    href: "/index-14-white",
    img: "/assets/images/demo/home-14-white.png",
    ...englishCopy({ title: "demo.number14" }),
  },
  {
    href: "/index-15-white",
    img: "/assets/images/demo/home-15-white.png",
    ...englishCopy({ title: "demo.number15" }),
  },
  {
    href: "/index-16-white",
    img: "/assets/images/demo/home-16-white.png",
    ...englishCopy({ title: "demo.number16" }),
  },
  {
    href: "/index-17-white",
    img: "/assets/images/demo/home-17-white.png",
    ...englishCopy({ title: "demo.number17" }),
  },
  {
    href: "/index-18-white",
    img: "/assets/images/demo/home-18-white.png",
    ...englishCopy({ title: "demo.number18" }),
  },
  {
    href: "/index-19-white",
    img: "/assets/images/demo/home-19-white.png",
    ...englishCopy({ title: "demo.number19" }),
  },
  {
    href: "/index-20-white",
    img: "/assets/images/demo/home-20-white.png",
    ...englishCopy({ title: "demo.number20" }),
  },
  {
    href: "/index-21-white",
    img: "/assets/images/demo/home-21-white.png",
    ...englishCopy({ title: "demo.number21" }),
  },
  {
    href: "/index-22-white",
    img: "/assets/images/demo/home-22-white.png",
    ...englishCopy({ title: "demo.number22" }),
  },
];
