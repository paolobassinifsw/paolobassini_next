import SiteDocument from "@/components/common/SiteDocument";

export const metadata = {
  title:
    "Home || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Reeni is a modern personal portfolio template for designers, developers, content writer, cleaner, programmer, fashion designer, model, Influencer and freelancers. Fully responsive, SEO-friendly, Bootstrap and easy to customize.",
};
export default function TemplateLayout({ children }) {
  return <SiteDocument lang="en">{children}</SiteDocument>;
}
