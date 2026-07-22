import AboutHero from '../components/sections/AboutHero';
import AboutStory from "../components/sections/AboutStory";
import MissionVision from "../components/sections/MissionVision";
import CoreValues from "../components/sections/CoreValues";
import FounderProfile from "../components/sections/FounderProfile";
import CTA from "../components/sections/CTA";
import SEO from "../components/common/SEO";

function About() {
    return (
        <>
            <SEO title="About NTS Digital Solutions | Software Solutions Company" description="Learn about NTS Digital Solutions, our mission, values, and commitment to empowering businesses through digital innovation." />
            <AboutHero />
            <AboutStory />
            <MissionVision />
            <CoreValues />
            <FounderProfile />
            <CTA />
        </>
    );
}


export default About;