import SolutionsHero from '../components/sections/SolutionsHero';
import SolutionsGrid from "../components/sections/SolutionsGrid";
import SolutionCTA from '../components/sections/SolutionCTA';
import SEO from "../components/common/SEO";

function Solutions() {
    return (
        <>
            <SEO title="Digital Solutions & Custom Software | NTS Digital Solutions" description="Discover software solutions built by NTS Digital Solutions including healthcare, education, and property management systems."/>
            <SolutionsHero />
            <SolutionsGrid />
            <SolutionCTA />
        </>
    );
}

export default Solutions;