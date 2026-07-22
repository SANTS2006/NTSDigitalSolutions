import { Link } from "react-router-dom";
import Button from "../ui/Button";

function SolutionCTA() {

    return (

        <section className=" py-20 bg-slate-50 ">
            <div className="max-w-5xl mx-auto px-6  text-center ">
                <h2 className=" text-3xl md:text-5xl font-bold" >
                    Have a business challenge?
                </h2>

                <p className=" mt-6  text-lg ">
                    NTS Digital Solutions can help you design
                    and develop technology solutions tailored
                    to your organization's needs.
                </p>

                <div className=" mt-8 flex justify-center">

                    <Link to="/contact">
                        <Button>
                            Start Your Project
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default SolutionCTA;