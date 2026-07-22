import company from "../../data/company";

const AboutHero = () => {
  return (
      <section className="flex justify-center items-center py-20 bg-slate-50">
            <div className=" max-w-7xl -auto px-6">
              <h1 className=" text-4xl md:text-6xl font-bold text-slate-900 text-center">
                    About Us
                </h1>
              <p className=" mt-6 text-lg  text-slate-600 max-w-3xl mx-auto text-center">
                    {company.motto}
                </p>
            </div>
        </section>
    )
}

export default AboutHero
