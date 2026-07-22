import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

import services from '../../data/services';

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
            <SectionTitle subtitle="Our Services" title="Digital solutions designed for growth" description="We help businesses transform ideas into reliable, scalable, and modern digital experiences."/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard  key={index} title={service.title} description={service.description}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default ServicesPreview
