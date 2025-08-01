import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {routes} from '../../lib/routeUtils'
import Logo from '../../components/common/Logo';


import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

import google from '../../assets/icons/google.png'
import discord from '../../assets/icons/discord.png'
import github from '../../assets/icons/github.png'


import '../../assets/styles/componens/signup.css';
import Background from '../../features/auth/Background';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const togglePasswordVisibility = (field: 'password' | 'confirmPassword') => {
    setShowPassword(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="h-screen flex items-center justify-center relative z-50">
      <Background/>
      <div className="main-div relative w-full lg:w-[90%] mx-auto  z-50 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="w-full h-full lg:w-1/2 flex-col itesm-start justify-center">
         
        </div>


        {/* form */}


        <div className="w-full h-full lg:w-1/2 flex items-center justify-center lg:justify-end">
          <div className="w-full lg:w-[400px] h-full py-2">
            <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center justify-center gap-4 p-3 lg:p-0">
              <div className="flex items-center justify-between w-full gap-2">
                <Logo/>
                <h1 className="font-bold font-impact text-white text-4xl" > LOGIN</h1>
              </div>

              {/* Username */}
              {/* <div className="input-continer w-full relative">
                <input 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  required
                  type="text" 
                  className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'
                />
                <label htmlFor="username" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                  Name
                </label>
                <span className='icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4'>
                  <PersonIcon/>
                </span>
              </div> */}

              {/* Handlename */}
              {/* <div className="input-continer w-full relative">
                <input 
                  name="handlename"
                  value={formData.handlename}
                  onChange={handleChange}
                  id="handlename"
                  required
                  type="text" 
                  className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'
                />
                <label htmlFor="handlename" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                  Handlename
                </label>
                <span className='icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4'>
                  <AlternateEmailRoundedIcon/>
                </span>
              </div> */}

              {/* Email */}
              <div className="input-continer w-full relative">
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  required
                  type="email" 
                  className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'
                />
                <label htmlFor="email" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                  Email
                </label>
                <span className='icon-div absolute translate-y-3 text-white font-bold font-fira-code right-4'>
                  <EmailRoundedIcon/>
                </span>
              </div>

              {/* Password */}
              <div className="input-continer w-full relative">
                <input 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  id="password"
                  required
                  type={showPassword.password ? "text" : "password"} 
                  className='w-full bg-white/10 rounded-md p-3 backdrop-blur-lg border border-chrome text-white'
                />
                <label htmlFor="password" className='absolute translate-y-3 text-white font-bold font-fira-code left-4'>
                  Password
                </label>
                <button 
                  type="button" 
                  className='visibility-btn absolute translate-y-3 text-white font-bold font-fira-code right-4 z-50'
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword.password ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                </button>
              </div>

              <Link to={routes.passwordReset()} className='text-sapphire font-bold text-left'>Forgot Pasword</Link>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="group w-full bg-sapphire hover:bg-cosmic text-white font-bold font-fira-code  py-3 px-4 rounded-md transition duration-200 flex items-center justify-center gap-2"
              >
                Login  <ArrowForwardRoundedIcon className='transition-all duration-500 group-hover:translate-x-2'/>
              </button>

              {/* socila logins */}

              <div className="w-full flex items-center justify-between gap-2">
                <span className="bg-chrome w-1/3 p-[1px] rounded-full"></span>
                <div className="text-white font-fira-code text-[11px] lg:text-[12px]">or continue with</div>
                <span className="bg-chrome w-1/3 p-[1px] rounded-full"></span>
              </div>

              <div className="w-full flex flex-col gap-2">
                <div className="w-full flex items-center justify-between gap-2">
                  <Link to="" className='flex items-center justify-start gap-2 p-2 rounded-md bg-white'>
                  <img src={github} alt="" className='w-8 h-8 rounded-full object-contain'/>
                  <p className="text-midnight font-bold text-[15px] lg:text-md">Login with Github</p>
                  </Link>
                  <Link to="" className='flex items-center justify-start gap-2 p-2 rounded-md bg-white'>
                  <img src={discord} alt="" className='w-8 h-8 rounded-full object-contain'/>
                  <p className="text-midnight font-bold text-[16px] lg:text-md">Login with Discord</p>
                  </Link>
                </div>
                <div className="w-full">
                  <Link to="" className='flex items-center justify-center gap-2 p-2 rounded-md bg-white'>
                  <img src={google} alt="" className='w-8 h-8 rounded-full object-contain'/>
                  <div className="text-midnight font-bold">Continue with Google</div>
                  </Link>
                </div>
              </div>

              
              {/* Login Link */}
              <p className="text-white text-sm font-fira-code">
              Create an Account? <Link to={routes.register()} className="text-sapphire hover:text-candy font-bold hover:underline">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;