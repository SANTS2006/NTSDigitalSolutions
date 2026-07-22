import company from "../../data/company";

const MissionVision = () => {
  return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Our Mission
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        {company.mission}
                    </p>
                </div>
                <div className="bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        Our Vission
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        {company.vision}
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MissionVision
