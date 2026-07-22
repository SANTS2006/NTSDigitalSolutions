import ContactHero from '../components/sections/ContactHero';
import ContactInfo from "../components/sections/ContactInfo";
import ContactForm from "../components/sections/ContactForm";
import WhyChoose from "../components/sections/WhyChoose";
import ContactCTA from "../components/sections/ContactCTA";

function Contact() {
    return (
        <>
            <ContactHero />
            <ContactInfo />
            <ContactForm />
            <WhyChoose />
            <ContactCTA />
        </>
    );
}

export default Contact;