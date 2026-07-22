import ServiceHero from "../components/sections/ServiceHero";
import ServicesList from "../components/sections/ServicesList";
import DevelopmentProcess from "../components/sections/DevelopmentProcess";
import WhyWorkWithNTS from "../components/sections/WhyWorkWithNTS";
import ServicesCTA from '../components/sections/ServicesCTA';
import SEO from "../components/common/SEO";

function Services() {
    return (
        <>
            <SEO title="Software Development Services | NTS Digital Solutions" description="Explore NTS Digital Solutions services including web development, mobile applications, UI/UX design, and custom software solutions." />
            <ServiceHero />
            <ServicesList />
            <DevelopmentProcess />
            <WhyWorkWithNTS />
            <ServicesCTA />
        </>
    );
}

export default Services;