import { Helmet } from "react-helmet-async";


function SEO({title = "NTS Digital Solutions | Empowering Businesses Through Digital Innovation", description = "NTS Digital Solutions builds custom digital solutions that help businesses grow."}) {

    return (

        <Helmet>
            <title>
                {title}
            </title>

            <meta
                name="description"

                content={description}
            />

        </Helmet>

    );

}

export default SEO;