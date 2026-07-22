import { Link } from "react-router-dom";
import Button from "../ui/Button";


function ContactCTA(){

    return (

        <section className="
        py-20
        bg-slate-900
        ">


            <div className="
            max-w-5xl
            mx-auto
            px-6
            text-center
            ">


                <h2 className="
                text-3xl
                md:text-5xl
                font-bold
                text-white
                ">

                    Ready To Start Your Digital Journey?

                </h2>


                <p className="
                mt-6
                text-slate-300
                text-lg
                ">

                    Tell us about your idea and let's build a solution
                    that helps your organization grow.

                </p>


                <div className="
                mt-8
                flex
                justify-center
                ">


                    <Link to="/contact">

                        <Button>
                            Contact NTS Today
                        </Button>

                    </Link>


                </div>


            </div>


        </section>

    );

}


export default ContactCTA;