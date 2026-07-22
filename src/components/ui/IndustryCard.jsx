import { motion } from "framer-motion";

const IndustryCard = ({ title, description }) => {
  return (
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
        <h3 className="text-xl font-demibold text-slate-900 mb-3">
            {title}
        </h3>
        <p className="text-slate-600 leading-relaxed">
            {description}
        </p>
    </motion.div>
  )
}

export default IndustryCard
