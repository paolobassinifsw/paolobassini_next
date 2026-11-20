import { englishCopy } from "@/i18n/englishCopy";
export const expertiseItems = [
  {
    icon: "/assets/images/my-expertise/logo-4.svg",
    ...englishCopy({ title: "shared.visualDesign" }),
    percentage: "90%",
    counterValue: 90,
    ...englishCopy({ description: "expertise.visual.description" }),
    animationOrder: 1,
  },
  {
    icon: "/assets/images/my-expertise/logo-5.svg",
    ...englishCopy({ title: "expertise.branding.title" }),
    percentage: "75%",
    counterValue: 75,
    ...englishCopy({ description: "expertise.branding.description" }),
    animationOrder: 2,
  },
  {
    icon: "/assets/images/my-expertise/logo-6.svg",
    ...englishCopy({ title: "shared.motionDesign" }),
    percentage: "80%",
    counterValue: 80,
    ...englishCopy({ description: "expertise.motion.description" }),
    animationOrder: 3,
  },
];
