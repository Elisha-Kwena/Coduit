import React from 'react'
import { Link } from 'react-router-dom';

import Navbar from '../../components/landing/Navbar';

import Hero from '../../components/landing/Hero';
import Trusted from '../../components/landing/Trusted';
import Features from '../../components/landing/Features';
import Stats from '../../components/landing/Stats';

import Feedback from '../../components/landing/Feedback';

import waves from '../../components/landing/waves.svg'
import banner from '../../assets/images/banner.png'

import { routes,} from '../../lib/routeUtils';

import Footer from '../../components/landing/Footer';
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
            <section className="feedback w-full bg-dark800 py-12">
                <div className="w-full lg:w-[90%] mx-auto">
                    <Feedback/>
                </div>
            </section>

            <section className="w-full bg-black lg:p-0 px-2 flex flex-col items-center justify-center gap-4">
                <div className="cta rounded-lg border border-chrome p-3 lg:p-6 mt-16 w-full lg:w-[60%] mx-auto">
                    <h1 className="text-2xl lg:text-5xl font-plex-sans font-extrabold text-center text-white">Ready to join the Community?</h1>
                    <p className="text-chrome mt-6 text-md lg:text-xl font-fira-code text-center">Join a community of developers who are passionate about coding and building amazing things.</p>

                    <div className="w-full flex items-center justify-center gap-2 mt-6">
                        <Link to={routes.register()} className='bg-sapphire p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-sapphire text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:bg-transparent hover:text-sapphire hover:-translate-y-2'>Get Started Now</Link>
                        <Link to="" className='bg-transparent p-2 lg:p-3 text-white font-fira-code font-extrabold border-[2px] border-white text-center text-sm lg:text-xl rounded-sm transition-all duration-300 hover:border-sapphire hover:text-sapphire hover:-translate-y-2'>Explore communities</Link>
                    </div>
                </div>
                <div className="w-full mt-12 bg-dark800 pb-16">
                    <img src={waves} alt="" className='w-full'/>
                    <div className="w-full flex items-center justify-center">
                        <div className="w-full flex gap-10 px-4 lg:px-12 flex-col-reverse lg:flex-row items-center justify-between">
                            <div className="left w-full lg:w-1/2">
                                <img src={banner} alt="" className="w-full rounded-t-lg" />
                            </div>
                            <div className="right w-full lg:w-1/2">
                                <Stats/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>   
        </main>
        
        </>
    )
}
export default LandingPage;