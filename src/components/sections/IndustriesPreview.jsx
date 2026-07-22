import SectionTitle from "../ui/SectionTitle";
import IndustryCard from "../ui/IndustryCard";
import industries from "../../data/industries";

const IndustriesPreview = () => {
  return (
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <SectionTitle subtitle="Industries We Serve" title="Technology solutions for every sector" description="We help organizations across different industries solve problems through innovative digital solutions." />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industries.map((industry, index) =>(
                    <IndustryCard key={index} title={industry.title} description={industry.description} />
                ))}
              </div>
          </div>
      </section>
  )
}

export default IndustriesPreview
