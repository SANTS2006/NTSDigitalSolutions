import Hero from "../components/sections/Hero";
import ServicesPreview from "../components/sections/ServicesPreview";
import SolutionsPreview from "../components/sections/SolutionsPreview";
import IndustriesPreview from "../components/sections/IndustriesPreview";

function Home() {
    return (
        <>
            <Hero />
            <ServicesPreview />
            <SolutionsPreview />
            <IndustriesPreview />
        </>
    );
}

export default Home;