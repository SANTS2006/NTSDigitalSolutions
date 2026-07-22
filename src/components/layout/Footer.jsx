import { FiFacebook, FiTwitter, FiLinkedin, FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';
function Footer() {

    return (
        <footer className="bg-slate-900 text-white mt-20">

            <div className="max-w-7xl mx-auto px-6 py-12 text-left grid md:grid-cols-4 gap-10">

                <div>
                    <h2 className="text-xl font-bold mb-4">
                        NTS Digital Solutions
                    </h2>

                    <p className="text-slate-400 leading-relaxed">
                        Empowering Businesses Through Digital Innovation
                    </p>

                </div>

                <div>
                    <h3 className="font-semibold mb-4">
                        Company
                    </h3>
                    <div className="space-y-3 text-slate-400">
                        <div>
                            <Link to="/">Home</Link>
                        </div>

                        <div>
                            <Link to="/about">
                                About
                            </Link>
                        </div>

                        <div>
                            <Link to="/solutions">
                                Solutions
                            </Link>
                        </div>

                        <div>
                            <Link to="/contact">
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>

                <div>

                    <h3 className="font-semibold mb-4">
                        Services
                    </h3>


                    <div className="space-y-3 text-slate-400">

                        <p>Web Development</p>

                        <p>Mobile Applications</p>

                        <p>UI/UX Design</p>

                        <p>Software Solutions</p>

                    </div>


                </div>

                <div>

                    <h3 className="font-semibold mb-4">
                        Contact
                    </h3>


                    <div className="space-y-3 text-slate-400">

                        <p>
                            Sierra Leone
                        </p>

                        <p>
                            hello@ntsdigitalsolutions.com
                        </p>

                        <p>
                            +232 76 784 684
                        </p>


                    </div>


                </div>

            </div>

            <div className="border-t border-slate-700 py-6 text-center text-slate-500">
                <div className="flex justify-center gap-5 mb-4 text-xl">
                    <a href="#" aria-label="Facebook">
                        <FiFacebook />
                    </a>
                    <a href="#" aria-label="Twitter">
                        <FiTwitter />
                    </a>
                    <a href="#" aria-label="Linkedin">
                        <FiLinkedin />
                    </a>
                    <a href="#" aria-label="Github">
                        <FiGithub />
                    </a>
                </div>
                <p>@ 2026 NTS Digital Solutions. All rights reserved</p>
            </div>

        </footer>
    );

}

export default Footer;