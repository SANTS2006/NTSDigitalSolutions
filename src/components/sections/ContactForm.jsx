import { useForm } from "react-hook-form";


function ContactForm(){

    const {
        register,
        handleSubmit,
        reset
    } = useForm();



    function onSubmit(data){

        console.log(data);

        reset();

    }



    return (

        <section className="
        py-20
        bg-slate-50
        ">


            <div className="
            max-w-3xl
            mx-auto
            px-6
            ">


                <h2 className="
                text-3xl
                font-bold
                text-slate-900
                text-center
                ">

                    Tell Us About Your Project

                </h2>



                <form

                    onSubmit={handleSubmit(onSubmit)}

                    className="
                    mt-10
                    space-y-6
                    "

                >


                    <input

                        {...register("name")}

                        placeholder="Full Name"

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    />



                    <input

                        {...register("email")}

                        placeholder="Email Address"

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    />



                    <input

                        {...register("phone")}

                        placeholder="Phone Number"

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    />



                    <input

                        {...register("company")}

                        placeholder="Company / Organization"

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    />



                    <select

                        {...register("service")}

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    >

                        <option>
                            Select Service
                        </option>

                        <option>
                            Website Development
                        </option>

                        <option>
                            Mobile Application
                        </option>

                        <option>
                            Custom Software
                        </option>

                        <option>
                            UI/UX Design
                        </option>


                    </select>



                    <textarea

                        {...register("message")}

                        placeholder="Tell us about your project"

                        rows="5"

                        className="
                        w-full
                        px-4
                        py-3
                        rounded-lg
                        border
                        border-slate-300
                        "

                    />


                    <button

                        type="submit"

                        className="
                        w-full
                        bg-blue-600
                        text-white
                        py-3
                        rounded-lg
                        font-semibold
                        hover:bg-blue-700
                        transition
                        "

                    >

                        Send Message

                    </button>


                </form>


            </div>


        </section>

    );

}


export default ContactForm;