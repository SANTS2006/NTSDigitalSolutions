import AboutHero from '../components/sections/AboutHero';
import AboutStory from "../components/sections/AboutStory";
import MissionVision from "../components/sections/MissionVision";
import CoreValues from "../components/sections/CoreValues";
import FounderProfile from "../components/sections/FounderProfile";
import CTA from "../components/sections/CTA";

function About() {
    return (
        <>
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