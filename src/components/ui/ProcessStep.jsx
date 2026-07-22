import { motion } from "framer-motion";


function ProcessStep({
    number,
    title,
    description
}) {


    return (

        <motion.div

            whileHover={{
                y: -5
            }}

            transition={{
                duration: 0.2
            }}

            className="
            bg-white
            rounded-xl
            border
            border-slate-200
            p-6
            "

        >


            <div className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            font-bold
            mb-4
            ">

                {number}

            </div>



            <h3 className="
            text-xl
            font-semibold
            text-slate-900
            mb-3
            ">

                {title}

            </h3>



            <p className="
            text-slate-600
            leading-relaxed
            ">

                {description}

            </p>


        </motion.div>

    );

}


export default ProcessStep;