import { motion } from "framer-motion";


function IndustryCard({
    industry
}) {

    return (

        <motion.div

            whileHover={{
                y: -8
            }}

            transition={{
                duration: 0.2
            }}

            className="
            bg-white
            rounded-2xl
            p-8
            border
            border-slate-200
            shadow-sm
            "

        >

            {/* Icon */}

            <div className="
            text-4xl
            mb-6
            ">

                {industry.icon}

            </div>


            {/* Title */}

            <h3 className="
            text-2xl
            font-bold
            text-slate-900
            ">

                {industry.title}

            </h3>


            {/* Description */}

            <p className="
            mt-4
            text-slate-600
            leading-relaxed
            ">

                {industry.description}

            </p>



            {/* Solutions */}

            <ul className="
            mt-6
            space-y-3
            ">


                {
                    industry.solutions.map((solution) => (

                        <li

                            key={solution}

                            className="
                            flex
                            gap-2
                            text-slate-700
                            "

                        >

                            <span className="
                            text-emerald-500
                            ">
                                ✓
                            </span>


                            {solution}


                        </li>

                    ))
                }


            </ul>


        </motion.div>

    );

}


export default IndustryCard;