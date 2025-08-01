import React from 'react';
import {Link} from 'react-router-dom'
import { routes,} from '../../lib/routeUtils';

import Logo from '../common/Logo';

const Navbar:React.FC = () => {
    return(
        <>
        <header className="w-full fixed top-0 p-1 grid place-items-center z-50">
            <nav className="flex items-center justify-between p-3 rounded-lg w-[97%] lg:w-[95%] mx-auto bg-white/5 backdrop-blur-md z-50">
                <div className="left">
                    <Logo/>
                </div>
                <div className="right">
                    <Link to={routes.register()} 
                    className={`text-white bg-sapphire p-3 px-5 rounded-md font-extrabold text-md lg:text-lg hover:bg-electric transition-all duration-300 `}
                    >Get Started</Link>
                </div>
            </nav>
        </header>
        </>
    )
}
export default Navbar;