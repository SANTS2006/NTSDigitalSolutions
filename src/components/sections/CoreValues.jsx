import SectionTitle from "../ui/SectionTitle";
import ValueCard from "../ui/ValueCard";
import values from "../../data/values";

const CoreValues = () => {
  return (
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <SectionTitle subtitle="Our Values" title="The principles that guide NTS Digital Solutions" description="Our values shape how we build solutions, work with clients, and create long-term impact." />
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                      <ValueCard key={index} title={value.title} description={value.description} icon={value.icon} />
                  ))}
              </div>
          </div>
      </section>
  )
}

export default CoreValues
