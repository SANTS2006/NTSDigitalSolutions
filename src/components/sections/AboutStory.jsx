import company from "../../data/company";

const AboutStory = () => {
  return (
    <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Story
            </h2>
            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                {company.story}
            </p>
        </div>
    </section>
  )
}

export default AboutStory
