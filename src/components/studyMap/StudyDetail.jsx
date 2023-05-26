import React from 'react'
import Timer from './Timer'

export default function StudyDetail() {
  return (
    <div className="w-[25vw] h-[100vh] bg-[#292929] flex flex-col items-center">

        <div className="flex flex-row items-center my-6 px-4 space-x-3 w-[90%] h-[90px]">
            <img src='/studyMap/profilemarker.png' className="object-scale-down h-[70px] w-[70px]"/>           
            <p class="text-[30px] font-bold text-white"><Timer/></p>
        </div>

        <div className="flex flex-col items-center py-2 w-[80%] h-[125px] bg-black rounded-[30px]">
            <p class="text-[20px] text-white">Today</p>
            <p class="text-[70px] font-bold text-white flex items-center h-[65px]">02:43</p>
        </div>

        <div className="flex flex-row items-center justify-end  space-x-3  w-[90%] h-[60px]">
            <img src='/studyMap/addFriends.png' className="object-scale-down h-[40px] w-[40px]"/>
            <img src='/studyMap/searchbutton.png' className="object-scale-down h-[30px] w-[30px]"/>          
        </div>      
    </div>
  )
}