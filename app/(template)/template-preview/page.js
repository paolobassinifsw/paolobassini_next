import About from "@/components/common/About";
import Copyright from "@/components/footers/Copyright";
import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Blogs from "@/components/common/Blogs";
import Brands from "@/components/common/Brands";
import Contact from "@/components/common/Contact2";
import Education from "@/components/common/Education2";
import Facts from "@/components/common/Facts";
import Hero from "@/components/homes/home-1/Hero";
import Portofolio from "@/components/common/Portfolio"
import Services from "@/components/common/Services";
import Services2 from "@/components/common/Services3";
import Skills from "@/components/common/Skills";
import Skills2 from "@/components/common/Skills2";
import CommonComponents from "@/components/common/CommonComponents";
import TextAnim from "@/components/common/TextAnim";
import Experiences2 from "@/components/common/Experiences2";

export const metadata = {
  title:
    "Home 01 Black || Personal Portfolio React Nextjs Template | Freelancer & Developer Portfolio",
  description:
    "Reeni is a modern personal portfolio template for designers, developers, content writer, cleaner, programmer, fashion designer, model, Influencer and freelancers. Fully responsive, SEO-friendly, Bootstrap and easy to customize.",
};
export default function Home() {
  return (
    <>
      <Header1 />
      <Hero />
      <TextAnim />
      <About />
      <Services />
      <Facts />
      <Skills />
      <Services2 />
      <Education />
      <Brands />
      <Portofolio />
            <Experiences2 />
      <Skills2 />
      <Contact />
      <Blogs />
      <Footer1 />
      <Copyright />
      <CommonComponents />
    </>
  );
}
