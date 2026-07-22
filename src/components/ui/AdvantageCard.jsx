import { motion } from "framer-motion";

const AdvantageCard = ({ title, description }) => {
  return (
      <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.2 }} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
          <div className="text-emerald-500 text-2xl mb-4">✓</div>
          <h3 className="text-xl font-demibold text-slate-900 mb-3">
              {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
              {description}
          </p>
      </motion.div>
  )
}

export default AdvantageCard
