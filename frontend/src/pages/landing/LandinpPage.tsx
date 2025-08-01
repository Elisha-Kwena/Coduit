import React from 'react'
import Navbar from '../../components/landing/Navbar';

import Hero from '../../components/landing/Hero';
import Trusted from '../../components/landing/Trusted';
import Features from '../../components/landing/Features';

const LandingPage: React.FC = () => {
    return(
        <>
        <Navbar/>
        <main className="w-full">
            <section className="w-full hero-section">
                <div className="herosection w-[90%] mx-auto mt-[70px]">
                    <Hero/>
                </div>
            </section>
            <section className="trustes w-full bg-dark800 py-10">
                <div className="w-full lg:w-[90%] mx-auto">
                    <Trusted/>
                </div>
            </section>
            <section className="features w-full bg-black p-4 lg:p-0 ">
                <div className="w-full lg:w-[90%] mx-auto">
                    <Features/>
                </div>
            </section>
        </main>
        
        </>
    )
}
export default LandingPage;