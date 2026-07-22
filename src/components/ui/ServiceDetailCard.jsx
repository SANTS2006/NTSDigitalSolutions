import { motion } from "framer-motion";

const ServiceDetailCard = ({ title, description, features }) => {
  return (
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              {title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
              {description}
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
                <li className="flex gap-3 text-slate-600">
                    <span className="text-emerald-500">✓</span> 
                    {feature}
                </li>
            ))}
          </ul>
      </motion.div>
  )
}

export default ServiceDetailCard
