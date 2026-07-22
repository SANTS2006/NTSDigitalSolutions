import { motion } from "framer-motion";
import founder from "../../data/founder";

import React from 'react'

const Founder = () => {
  return (
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{opacity:0, x:-40}} whileInView={{opacity:1, x:0}} transition={{duration: 0.6}} viewport={{once: true}} className="flex justify-center">
                <div className="w-72 h-72 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                    Founder Photo
                </div>
            </motion.div>
            <motion.div initial={{opacity:0, x:40}} whileInView={{opacity:1, x:0}} transition={{duration: 0.6}} viewport={{once: true}}>
                <p className="text-blue-600 uppercase font-semibold tracking-wide mb-4">Meet The Founder</p>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {founder.name}
                </h2>
                <h3 className="mt-2 text-xl text-slate-600">
                    {founder.role}
                </h3>
                <p className="mt-6 text-slate-600 leading-relaxed">
                    {founder.description}
                </p>
            </motion.div>
          </div>
      </section>
  )
}

export default Founder
