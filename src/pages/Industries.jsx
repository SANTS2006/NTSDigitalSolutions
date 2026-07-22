import IndustriesHero from "../components/sections/IndustriesHero";
import IndustriesPreview from "../components/sections/IndustriesPreview";
import IndustryCTA from "../components/sections/IndustryCTA";
import SEO from "../components/common/SEO";

function Industries() {
    return (
        <>
            <SEO title="Industries We Serve | NTS Digital Solutions" description="NTS Digital Solutions creates technology solutions for healthcare, education, real estate, and growing businesses."/>
            <IndustriesHero />
            <IndustriesPreview />
            <IndustryCTA />
        </>
    );
}

export default Industries;