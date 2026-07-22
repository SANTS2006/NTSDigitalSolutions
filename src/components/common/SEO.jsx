import { Helmet } from "react-helmet-async";


function SEO({title = "NTS Digital Solutions | Empowering Businesses Through Digital Innovation", description = "NTS Digital Solutions builds custom digital solutions that help businesses grow.", url = "https://ntsdigitalsolutions.com", image = "/logo.png", }) {

    return (

        <Helmet>
            <title>
                {title}
            </title>

            <meta
                name="description"

                content={description}
            />

            <meta 
                property="og: title"
                content={title}
            />

            <meta

                property="og:description"

                content={description}

            />


            <meta

                property="og:image"

                content={image}

            />


            <meta

                property="og:url"

                content={url}

            />


            <meta

                property="og:type"

                content="website"

            />



            {/* Twitter */}

            <meta

                name="twitter:card"

                content="summary_large_image"

            />


            <meta

                name="twitter:title"

                content={title}

            />


            <meta

                name="twitter:description"

                content={description}

            />


            <meta

                name="twitter:image"

                content={image}

            />


        </Helmet>

    );

}

export default SEO;