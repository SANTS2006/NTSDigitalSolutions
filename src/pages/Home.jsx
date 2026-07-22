import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import SolutionsPreview from "../components/sections/SolutionsPreview";
import IndustriesPreview from "../components/sections/IndustriesPreview";
import WhyChoose from "../components/sections/WhyChoose";
import Founder from "../components/sections/Founder";
import CTA from "../components/sections/CTA";
import SEO from "../components/common/SEO";

function Home() {
    return (
        <>
           <SEO title="NTS Digital Solutions | Empowering Businesses Through Digital Innovation" description="NTS Digital Solutions provides custom software development, web applications, and digital solutions that help businesses and organizations grow." />
            <Hero />
            <ServicesPreview />
            <SolutionsPreview />
            <IndustriesPreview />
            <WhyChoose />
            <Founder />
            <CTA />
        </>
    );
}

export default Home;