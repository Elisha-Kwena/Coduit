import React from 'react'

interface MembersProps{
    profile:string,
    left:string
}

const Members:React.FC<MembersProps> =({profile,left})=>{
    return(
        <>
            <div className="relative flex items-center justify-start gap-0 ">
                <div className={`w-12 h-12 lg:w-14 lg:h-14 flex items-center rounded-full absolute ${left}`}>
                    <img src={profile} alt="" className='w-full h-full rounded-full object-cover object-top'/>
                </div>
            </div>        
        </>
    )
}
export default Members;