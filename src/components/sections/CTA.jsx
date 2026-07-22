import { Link } from "react-router-dom";
import Button from "../ui/Button";

function CTA() {

    return (

        <section className=" py-20 bg-blue-600 ">
            <div className="max-w-5xl mx-auto px-6  text-center ">
                <h2 className=" text-3xl md:text-5xl font-bold text-white " >
                    Ready to transform your ideas
                    into digital solutions?
                </h2>

                <p className=" mt-6 text-blue-100 text-lg max-w-2xl mx-auto ">
                    Let's work together to build modern
                    technology solutions that help your
                    business grow.
                </p>

                <div className=" mt-8 flex justify-center">

                    <Link to="/contact">
                        <Button variant="white">
                            Contact NTS
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}


export default CTA;