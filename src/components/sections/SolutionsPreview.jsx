import SectionTitle from "../ui/SectionTitle";
import SolutionCard from "../ui/SolutionCard";
import solutions from "../../data/solutions";

const SolutionsPreview = () => {
  return (
    <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="Our Solutions" title="Technology built around real business needs" description="We design and develop digital solutions that help organizations solve problem and grow."  />

            <div className="grid md:grid-cols-2 gap-8">
                {solutions.map((solution, index) => (
                    <SolutionCard  key={index} title={solution.title} description={solution.description} solution={solution} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default SolutionsPreview
