import { englishCopy } from "@/i18n/englishCopy";
export const educationExperienceData = [
  {
    ...englishCopy({ role: "education.training.marketing" }),
    duration: "2005-2009",
    ...englishCopy({ description: "education.training.marketingDescription" }),
    animationOrder: 1,
  },
  {
    ...englishCopy({ role: "education.training.direction" }),
    duration: "2010-2014",
    ...englishCopy({ description: "education.training.directionDescription" }),
    animationOrder: 2,
  },
  {
    ...englishCopy({ role: "education.training.design" }),
    duration: "2008-2012",
    ...englishCopy({ description: "education.training.designDescription" }),
    animationOrder: 3,
  },
  {
    ...englishCopy({ role: "education.training.design" }),
    duration: "2008-2012",
    ...englishCopy({ description: "education.training.designSecondDescription" }),
    animationOrder: 4,
  },
];

export const educationExperience = [
  {
    title: "Trainer Marketing",
    duration: "2005-2009",
    description:
      "A personal portfolio is a curated collection of an individual's professional work, showcasing their skills, experience A personal portfolio.",
  },
  {
    title: "Assistant Director",
    duration: "2010-2014",
    description:
      "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs.",
  },
  {
    title: "Design Assistant",
    duration: "2008-2012",
    description:
      "I’ve had the privilege of working with various clients, from startups to established companies, helping bring their visions to life.",
  },
  {
    title: "Design Assistant",
    duration: "2008-2012",
    description:
      "Each project here showcases my commitment to excellence and adaptability, tailored to meet each client’s unique needs a personal.",
  },
];

export const educationResumeItems = [
  {
    duration: "2020 - 2023",
    title: "Programming course",
    institute: "Harverd University",
  },
  {
    duration: "2016 - 2020",
    title: "Graphic design course",
    institute: "University of Denmark",
  },
  {
    duration: "2012 - 2015",
    title: "Web design course",
    institute: "University of California",
  },
  {
    duration: "2010 - 2011",
    title: "Design & Technology",
    institute: "Parsons, The New School",
    isLast: true, // to apply the mb--0 class
  },
];

export const resumeListItems = [
  {
    title: "Personal Portfolio April Fools",
    institution: "University of DVI (1997 - 2001)",
    rating: "4.30/5",
    description:
      "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
  {
    title: "Examples Of Personal Portfolio",
    institution: "College of Studies (2000 - 2002)",
    rating: "4.50/5",
    description:
      "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
  {
    title: "Tips For Personal Portfolio",
    institution: "University of Studies (1997 - 2001)",
    rating: "4.80/5",
    description:
      "If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
  },
];
