import SectionTitle from "../ui/SectionTitle";
import AdvantageCard from "../ui/AdvantageCard";
import advantages from "../../data/advantages";

import React from 'react'

const WhyChoose = () => {
  return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
              <SectionTitle subtitle="Why Choose NTS" title="Technology solutions built around your success" description="We combine technical expertise, business understanding, and a commitment to creating meaningful digital solutions." />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {advantages.map((item, index) => (
                      <AdvantageCard key={index} title={item.title} description={item.description} />
                  ))}
              </div>
            </div>
        </section>
    )
}

export default WhyChoose
