import React from "react";
import { Link } from "react-router-dom";
import {routes} from '../../lib/routeUtils'

import Background from "../../features/auth/Background";
import Logo from "../../components/common/Logo";

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import MailIcon from '@mui/icons-material/Mail';

import '../../assets/styles/componens/signup.css'

const VerifyEmailSent:React.FC =() =>{
    return(
        <>
        <main className="w-full h-screen relative">
            <Background/>
            <div className="relative h-full z-50 w-[90%] mx-auto flex items-center justify-end">
                <div className="flex flex-col gap-2 w-[400px]">
                    <div className="w-full flex items-center justify-between">
                        <Logo/>
                        <h1 className="text-sapphire font-plex-sans font-extrabold text-2xl">CHECK YOUR EMAIL</h1>
                    </div>
                    <div className="w-full flex items-center justify-center py-4">
                        <MailIcon className="!text-5xl text-sapphire"/>
                    </div>
                    <div className="w-full">
                        <h1 className="text-white font-bold text-2xl text-center ">Verification Email Sent!</h1>
                        <p className="text-white font-bold font-plex-sans text-md ">We've sent a verification link to your email address. Please check your inbox and click the link to verify your account</p>
                    </div>   
                    <div className="mt-2 w-full backdrop-blur-lg bg-white/5 p-3 rounded-md flex flex-col gap-1">

                        <div className="w-full">
                            <h1 className="font-extrabold text-white text-lg">Didn't receive the email</h1>
                            <p className="mt-2 text-white font-plex-sans ">Check your spam folder or enter your email below to request a new verification link</p>
                        </div>

                        <form action="" className="mt-4 w-full">
                        {/* Email */}
                        <div className="input-continer w-full relative">
                            <input 
                            name="email"
                            id="email"
                            required
                            type="email" 
                            className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'/>
                            <label htmlFor="email" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                            Email
                            </label>
                            <span className='icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4'>
                            <EmailRoundedIcon/>
                            </span>
                         </div>
                         <button className="w-full mt-2 flex items-center justify-center gap-1 p-3 rounded-md bg-sapphire text-white font-bold transition-all duration-300 hover:bg-cosmic">Resend Verification link</button>
                        </form>  
                          
                    </div> 
                    <div className="mt-6 w-full flex flex-col items-center gap-2">
                        <h1 className="text-white font-plex-sans text-center">Already verified your email?</h1>  
                        <Link to ={routes.login()} className="border-[2px] border-sapphire rounded-md p-3 text-sapphire font-bold">Back to login</Link>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
export default VerifyEmailSent;