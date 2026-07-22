import Logo from '../common/Logo';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
function Navbar() {

    return (
        <nav className='bg-white border-b border-slate-200'>
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                <Logo />
            
                <div className="hidden md:flex items-center gap-8">

                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/solutions">Solutions</Link>
                    <Link to="/industries">Industries</Link>
                    <Link to="/contact">Contact</Link>

                </div>

                <div className="hidden md:block">
                    <Button>Get Started</Button>
                </div>

            </div>

        </nav>
    );

}

export default Navbar; 