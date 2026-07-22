import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "../ui/Button";

function ContactForm(){

    const {
        register,
        handleSubmit,
        reset
    } = useForm();



    async function onSubmit(data){

    setIsSending(true);


    try {

        console.log(data);

        await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,

    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

    data,

    {
        publicKey:
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    }
);


setMessage(
"Message sent successfully. We will contact you soon."
);

        reset();


    }

    catch(error){

        setMessage(
"Something went wrong. Please try again."
);

        console.log(error);

    }

    finally {

        setIsSending(false);

    }

}


    const [isSending, setIsSending] = useState(false);

    const [message,setMessage] = useState("");
   



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


                   <Button disabled={isSending}>

    {
        isSending
        ? "Sending..."
        : "Send Message"
    }

</Button>


                </form>


            </div>


        </section>

    );

}


export default ContactForm;