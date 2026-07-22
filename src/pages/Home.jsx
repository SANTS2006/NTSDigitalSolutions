import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import SolutionsPreview from "../components/sections/SolutionsPreview";
import IndustriesPreview from "../components/sections/IndustriesPreview";
import WhyChoose from "../components/sections/WhyChoose";
import Founder from "../components/sections/Founder";
import CTA from "../components/sections/CTA";

function Home() {
    return (
        <>
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