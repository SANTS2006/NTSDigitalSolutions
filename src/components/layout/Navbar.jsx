import { useState } from "react";

import Logo from "../common/Logo";
import Button from "../ui/Button";

import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    }

    return (

        <nav aria-label="Main navigation" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-6 py-4">

                <div className="flex items-center justify-between">

                    <Logo />
    
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation menu" aria-expanded={isOpen} className="md:hidden text-2xl text-slate-700">
                        <motion.div key={isOpen ? "close" : "menu"} initial={{rotate:-90, opacity: 0}} animate={{rotate: 0, opacity: 1}} transition={{duration: 0.2}}>
                            {
                                isOpen ? <FiX /> : <FiMenu />
                            }
                        </motion.div>
                    </button>

                    <div className="hidden md:flex items-center gap-8">
                        <Link onClick={closeMenu}
                            to="/"
                            className="text-2xl text-slate-700 hover:text-blue-600 transition"
                        >
                            Home
                        </Link>


                        <Link onClick={closeMenu}
                            to="/about"
                            className="text-2xl text-slate-700 hover:text-blue-600 transition"
                        >
                            About
                        </Link>


                        <Link onClick={closeMenu}
                            to="/services"
                            className="text-2xl text-slate-700 hover:text-blue-600 transition"
                        >
                            Services
                        </Link>


                        <Link onClick={closeMenu}
                            to="/solutions"
                            className="text-2xl text-slate-700 hover:text-blue-600 transition"
                        >
                            Solutions
                        </Link>


                        <Link onClick={closeMenu}
                            to="/industries"
                            className="text-2xl text-slate-700  hover:text-blue-600 transition">
                            Industries
                        </Link>

                        <Link onClick={closeMenu}
                            to="/contact"
                            className="text-2xl text-slate-700 hover:text-blue-600 transition"
                        >
                            Contact
                        </Link>

                        {/* <Button onClick={closeMenu}>
                            Get Started
                        </Button> */}

                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div initial={{opacity: 0, height: 0, y: -10}} animate={{opacity:1, height:"auto", y:0}} exit={{opacity: 0, height: 0, y: -10}} transition={{duration: 0.3, ease: "easeInOut"}} className=" md:hidden mt-6 flex flex-col gap-4">
                            <Link onClick={closeMenu} to="/" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                Home
                            </Link>


                            <Link onClick={closeMenu} to="/about" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                About
                            </Link>


                            <Link onClick={closeMenu} to="/services" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                Services
                            </Link>


                            <Link onClick={closeMenu} to="/solutions" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                Solutions
                            </Link>


                            <Link onClick={closeMenu} to="/industries" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                Industries
                            </Link>

                            <Link onClick={closeMenu} to="/contact" className="text-2xl text-slate-700 hover:text-blue-600 transition">
                                Contact
                            </Link>

                            {/* <Button onClick={closeMenu}>
                                Get Started
                            </Button> */}

                        </motion.div>
                    )
                    }
                </AnimatePresence>
            </div>
        </nav>
    );
}


export default Navbar;