import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const ServiceDetailCard = ({ title, description, features, icon: Icon }) => {
  return (
      <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition">
            <div className="flex text-blue-600">
                <Icon className="text-3xl"/>
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
             {title}
            </h3>
            </div>
          <p className="text-slate-600 leading-relaxed">
              {description}
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600">
                    <FaCheckCircle className="text-blue-500" />
                    {feature}
                </li>
            ))}
          </ul>
      </motion.div>
  )
}

export default ServiceDetailCard
