import SectionTitle from "../ui/SectionTitle";
import SolutionsCard from "../ui/SolutionsCard";
import solutions from "../../data/solutions";


function SolutionsGrid() {

    return (

        <section className="
        py-20
        bg-white
        ">


            <div className="
            max-w-7xl
            mx-auto
            px-6
            ">


                <SectionTitle

                    subtitle="Featured Solutions"

                    title="Technology solutions built by NTS"

                    description="
                    Explore some of the digital systems we have designed
                    to solve real-world business and organizational challenges.
                    "

                />



                <div className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
                ">


                    {
                        solutions.map((solution) => (

                            <SolutionsCard

                                key={solution.id}

                                solution={solution}

                            />

                        ))
                    }


                </div>


            </div>


        </section>

    );

}


export default SolutionsGrid;