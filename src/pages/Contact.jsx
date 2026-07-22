import ContactHero from '../components/sections/ContactHero';
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";
import WhyChoose from "../components/sections/WhyChoose";
import ContactCTA from "../components/sections/ContactCTA";
import SEO from "../components/common/SEO";

function Contact() {
    return (
        <>
            <SEO title="Contact NTS Digital Solutions | Start Your Project" description="Contact NTS Digital Solutions to discuss websites, software applications, and digital transformation projects."/>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <WhyChoose />
            <ContactCTA />
        </>
    );
}

export default Contact;