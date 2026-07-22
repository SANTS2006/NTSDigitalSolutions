import { useParams } from "react-router-dom";

import solutions from "../data/solutions";
import SolutionGallery from "../components/ui/SolutionGallery";
import SolutionFeatures from "../components/ui/SolutionFeatures";


function SolutionDetails() {

    const { id } = useParams();


    const solution = solutions.find(
        item => item.id === id
    );


    if (!solution) {

        return (

            <div className="
            py-20
            text-center
            ">

                <h1 className="
                text-3xl
                font-bold
                ">

                    Solution Not Found

                </h1>

            </div>

        );

    }


    return (

        <>

            <section className="
            py-20
            bg-slate-50
            ">


                <div className="
                max-w-5xl
                mx-auto
                px-6
                text-center
                ">


                    <p className="
                    text-blue-600
                    font-semibold
                    uppercase
                    ">

                        {solution.category}

                    </p>



                    <h1 className="
                    mt-3
                    text-4xl
                    md:text-6xl
                    font-bold
                    text-slate-900
                    ">

                        {solution.title}

                    </h1>


                    <p className="
                    mt-6
                    text-lg
                    text-slate-600
                    ">

                        {solution.description}

                    </p>


                </div>


            </section>

            <section className="
py-20
bg-white
">

                <div className="
max-w-6xl
mx-auto
px-6
">

                    <h2 className="
text-3xl
font-bold
text-slate-900
mb-8
">

                        Screenshots

                    </h2>


                    <SolutionGallery

                        images={solution.images}

                    />


                </div>

            </section>

            <section className="
py-20
bg-slate-50
">

                <div className="
max-w-6xl
mx-auto
px-6
">


                    <h2 className="
text-3xl
font-bold
text-slate-900
mb-8
">

                        Key Features

                    </h2>


                    <SolutionFeatures

                        features={solution.features}

                    />


                </div>

            </section>


        </>

    );

}


export default SolutionDetails;