import SectionTitle from "../ui/SectionTitle";
import ServiceDetailCard from "../ui/ServiceDetailCard";
import services from "../../data/services";

const ServicesList = () => {
  return (
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <SectionTitle subtitle="What We Offer" title="Digital solutions designed for growth" description="Our services help businesses build improve, and scale their digital presence." />
              <div className="grid md:grid-cols-2 gap-8">
                  {services.map((service, index) => (
                    <ServiceDetailCard key={index} title={service.title} description={service.description} features={service.features} icon={service.icon}/>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default ServicesList
