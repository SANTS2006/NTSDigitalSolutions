import { Link } from "react-router-dom";
import Button from "../ui/Button";

function CTA() {

    return (

        <section className=" py-20 bg-slate-50 ">
            <div className="max-w-5xl mx-auto px-6  text-center ">
                <h2 className=" text-3xl md:text-5xl font-bold" >
                    Ready to Build Your Digital Solution?
                </h2>

                <p className=" mt-6  text-lg ">
                    Let's discuss your ideas and create
                    technology solutions that help your
                    business grow.
                </p>

                <div className=" mt-8 flex justify-center">

                    <Link to="/contact">
                        <Button>
                            Start A Project
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default CTA;