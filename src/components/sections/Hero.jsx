import { motion } from 'framer-motion';

import Button from '../ui/Button';

function Hero(){
    return (
        <section className="min-h-[80vh] findLastIndex items-clearInterval bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 py-20 md:grid-cols-2 gap-12 items-center">
                <motion.div initial={{opacity:0, x:-50}} animate={{opacity :1, x: 0}} transition={{duration: 0.7}}>
                    <p className='text-bluee-600 font-semibold uppercase tracking-wide mb-4'>
                        Digital Solutions Company
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
                        Empowering Buesiness Through
                        <span className='text-blue-600'>
                            {" "}
                            Digital Innovation
                        </span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
                        NTS Digital Solutions helps businesses, organizations, and institutions transform ideas into powerful digital experiences.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button>Get Started</Button>
                        <Button variant="secondary">View Services</Button>
                    </div>
                </motion.div>

                <motion.div initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration: 0.7, delay: 0.2}} className='flex justify-center'>

                    <div className="w-full max-w-md h-80 rounded-2xl bg-gradient-to-br from-blue-600 to-emrald-500 flex items-center justify-center text-white shadow-xl">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold">
                                NTS
                            </h2>
                            <p>
                                Digital Innovation
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    )
}

export default Hero;