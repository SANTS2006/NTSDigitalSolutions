import { motion } from "framer-motion";

const SolutionCard = ({ title, description, solution }) => {
  return (
    <motion.div whileHover={{scale:1.03}} transition={{duration: 0.2}} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
      <div className="h-56 overflow-hidden ">
        <img src={solution.images[0]} alt={solution.title} className=" w-full h-full object-cover "/>
      </div>
        <h3 className="text-xl py-10 font-demibold text-slate-900 mb-3">
            {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
            {description}
        </p>
    </motion.div>
  )
}

export default SolutionCard
