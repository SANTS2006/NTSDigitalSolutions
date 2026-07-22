import { motion } from "framer-motion";


function ServiceAdvantageCard({
    title,
    description
}) {


    return (

        <motion.div

            whileHover={{
                scale: 1.03
            }}

            transition={{
                duration: 0.2
            }}

            className="
            bg-slate-50
            rounded-xl
            border
            border-slate-200
            p-6
            "

        >

            <div className="
            text-emerald-500
            text-2xl
            mb-4
            ">

                ✓

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


export default ServiceAdvantageCard;