import React from "react";

import {Link} from 'react-router-dom'
import { routes, isRouteActive } from '../../lib/routeUtils';

import logo from '../../../public/coduit.png'

const Logo:React.FC =()=>{
    return(
        <>
        <Link to={routes.landingPage()} className='flex items-center justify-center gap-1'>
            <img src={logo} alt="" className='w-8 h-8 lg:w-10 lg:h-10'/>
            <h1 className="text-2xl lg:text-4xl text-sapphire font-extrabold font-['impact']">Coduit</h1>
        </Link>
        </>
    )
}
export default Logo;
