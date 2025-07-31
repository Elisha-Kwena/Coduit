import React from "react";
import {Link} from 'react-router-dom'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Members from "../ui/Members";
import { members } from "../../data/users/members";

import { Vote, Comment, Repost, Bookmark } from "../ui/PostActionButtons";


import '../../assets/styles/componens/Landing.css'

import user from '../../data/users_profile/user1.jpeg'
import code from '../../assets/images/code.png'
const Hero:React.FC =() => {
    return(
        <>
        <div className="w-full flex lg:flex-row flex-col gap-0 items-center justify-between">

            {/* hero left */}
            <div className="w-full lg:w-1/2 flex flex-col gap-0 items-start justify-start">

            {/* heading */}
            <div className="heading w-full">
                <div className="flex items-end justify-start gap-1">
                    <h1 className="text-6xl lg:text-7xl text-white font-impact">Connect</h1>
                    <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-sapphire"></span>
                    <h1 className="text-5xl lg:text-7xl text-sapphire font-impact">Code</h1>
                    <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-white"></span>
                </div>
                <div className="flex items-end justify-start gap-1">
                    <h1 className="text-6xl lg;text-7xl text-white font-impact">Collaborate</h1>
                    <span className="w-3 lg:w-4 h-3 lg:h-4 mb-1 rounded-full bg-sapphire"></span>
                </div>
            </div>

            {/* details */}
            <div className="w-full mt-2">
                <p className="text-white font-fira-code text-md">
                The ultimate platform for developers to share knowledge, build
                projects, and grow their careers in tech communities.
                </p>
            </div>
            <div className="w-full flex items-center justify-between lg:justify-start lg:gap-2 mt-2">
                <Link to="" className="text-white bg-sapphire font-fira-code font-bold text-sm lg:text-lg p-3 rounded-sm border-[2px] border-sapphire hover:bg-cosmic transition-all duration-300">Join Now - It's Free</Link>
                <Link to="" className="border-[2px] border-white rounded-sm p-3 font-bold flex items-center justify-center gap-2 group hover:border-sapphire treansition-all duration-300">
                <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center treansition-all duration-300 group-hover:bg-sapphire"><PlayArrowIcon className="text-xl text-black treansition-all duration-300 group-hover:text-white"/></span>
                <span className="text-white font-fira-code text-sm lg:text-lg treansition-all duration-300 group-hover:text-sapphire">Watch Demo</span>
                </Link>
            </div>
            <div className="w-full flex items-center justify-between lg:justify-start py-4 mt-3">
                <div className="lg:w-1/3 bg-sunflower">
                {members.slice(0,5).map(user =>(
                    <Members 
                    key={user.id}
                    profile={user.profile} 
                    left={user.left}
                    />
                ))}
                </div>

                <p className="w-2/4 text-white font-bold font-fira-code text-sm lg:text-md">Join <span className="text-sapphire text-lg font-extrabold">24,817+</span> developers worldwide</p>
            </div>


            </div>

            {/* Hero right */}
            <div className="w-full lg:w-1/2 flex items-center justify-center lg:h-[500px] lg:py-0 py-10 lg:px-10">
                <div className="dummy-post relative w-full flex-col gap-0 rounded-lg bg-dark800 z-10">
                    <div className="top w-full p-2 bg-dark700 flex items-center justify-start gap-2 rounded-t-lg">
                        <div className="flex items-center justify-start gap-1">
                            <span className="w-4 h-4 rounded-full bg-candy"></span>
                            <span className="w-4 h-4 rounded-full bg-sunflower"></span>
                            <span className="w-4 h-4 rounded-full bg-lime_green"></span>
                        </div>
                        <p className="text-chrome font-fira-code text-lg">#react-community</p>

                    </div>
                    <div className="w-full flex items-start gap-2 p-3 bg-dark800 rounded-b-lg">
                        <div className="left w-24">
                            <img src={user} alt="" className="w-20 h-20 rounded-full" />
                        </div>
                        <div className="right w-full flex flex-col items-start justify-start gap-2">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="text-white text-xl font-fira-code font-extrabold">John Doe</h1>
                                <p className="text-chrome text-sm">12 hours ago</p>
                            </div>
                            <div className="details w-full">
                                <p className="text-chrome text-md">Has anyone implemented React Server Components in Production Yet?.</p>
                                <div className="w-full rounded-lg border-l-[5px] border-sapphire mt-2">
                                    <img src={code} alt="" className="w-full rounded-lg" />
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <div className="buttons flex items-center justify-cebnter gap-4">
                                    <Vote/>
                                    <Comment/>
                                </div>
                                <div className="buttons flex items-center justify-cebnter gap-4">
                                    <Repost/>
                                    <Bookmark/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Hero;