import company from "../../data/company";

const AboutHero = () => {
  return (
      <section className="py-20 bg-slate-50">
          <div className=" max-w-7xl -auto px-6 text-center">
              <h1 className=" text-4xl md:text-6xl font-bold text-slate-900">
                  NTS Digital Solutions
              </h1>
              <p className=" mt-6 text-lg  text-slate-600 max-w-3xl mx-auto">
                  {company.motto}
              </p>
          </div>
      </section>
  )
}

export default AboutHero
