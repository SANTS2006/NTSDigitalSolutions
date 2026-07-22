import ServiceHero from "../components/sections/ServiceHero";
import ServicesList from "../components/sections/ServicesList";
import DevelopmentProcess from "../components/sections/DevelopmentProcess";
import WhyWorkWithNTS from "../components/sections/WhyWorkWithNTS";

function Services() {
    return (
        <>
            <ServiceHero />
            <ServicesList />
            <DevelopmentProcess />
            <WhyWorkWithNTS />
        </>
    );
}

export default Services;