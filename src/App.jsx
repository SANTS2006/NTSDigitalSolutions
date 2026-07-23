import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "./components/layout/MainLayout";
import PageLoader from "./components/common/PageLoader";
import ScrollToTop from "./components/common/ScrollToTop";


// Lazy loaded pages

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Solutions = lazy(() => import("./pages/Solutions"));
const SolutionDetails = lazy(() => import("./pages/SolutionDetails"));
const Industries = lazy(() => import("./pages/Industries"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));



function App(){

    return (

        <BrowserRouter>


            <MainLayout>


                <Suspense fallback={<PageLoader />}>

                    <ScrollToTop />

                    <Routes>


                        <Route 
                            path="/" 
                            element={<Home />} 
                        />


                        <Route 
                            path="/about" 
                            element={<About />} 
                        />


                        <Route 
                            path="/services" 
                            element={<Services />} 
                        />


                        <Route 
                            path="/solutions" 
                            element={<Solutions />} 
                        />


                        <Route 
                            path="/solutions/:id" 
                            element={<SolutionDetails />} 
                        />


                        <Route 
                            path="/industries" 
                            element={<Industries />} 
                        />


                        <Route 
                            path="/contact" 
                            element={<Contact />} 
                        />


                        <Route 
                            path="*" 
                            element={<NotFound />} 
                        />


                    </Routes>


                </Suspense>


            </MainLayout>


        </BrowserRouter>

    );

}


export default App;