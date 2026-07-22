import SectionTitle from "../ui/SectionTitle";

import ProcessStep from "../ui/ProcessStep";

import process from "../../data/process";


function DevelopmentProcess() {


    return (

        <section className="
        py-20
        bg-slate-50
        ">


            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                <SectionTitle

                    subtitle="Our Process"

                    title="How we turn ideas into solutions"

                    description="
                    We follow a structured approach to deliver
                    reliable and effective digital products.
                    "

                />



                <div className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                ">


                    {
                        process.map((step, index) => (

                            <ProcessStep

                                key={index}

                                number={index + 1}

                                title={step.title}

                                description={step.description}

                            />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default DevelopmentProcess;