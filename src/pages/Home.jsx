import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Profile from '../components/Profile';

export default function Home() {
  const [scroll,setScroll] = useState(window.scrollY)



  useEffect(()=>{
    window.addEventListener("scroll", updateScroll)
  },[])

  const updateScroll = () => {
    setScroll(window.scrollY || document.documentElement.scrollTop)
  }

  return (
  <div className='h-1600 m-0'>
    {/* <section className="bg-[url('https://cdn.aitimes.com/news/photo/202012/135037_133168_497.jpg')] h-800 bg-fixed " > */}
    <section className="bg-[url('https://images.unsplash.com/photo-1598636410700-e34f8e29fe03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80')] h-800 bg-fixed " >
    
    
      <div className='absolute top-1/4 left-1/4 '>    

      {(scroll < 500) ?
       <div className=''>
       <h1 className="animate-slide  text-white text-7xl w-64 font-sans font-bold 
                  relative">
                   STUDY WITH ME!
       </h1>
       <div className='absolute text-white text-opacity-60  text-l font-sans font-bold'>
         <div>우리 모두 같이 한 곳에서 공부해요</div>
         <div>각자 열정을 보여주고</div>
         <div>각자 모여서 코딩해요 </div>
         <div>모든 개발자가 한 곳에 모이는 이곳</div>
         <div>study with me</div>
         <Link to = "/board">
         <button className='text-gray absolute text-opacity-60 border border-white rounded text-xl  p-2 pl-3 pr-3 mt-5'>서비스하러 바로가기</button>
         </Link>
       </div>
   </div>
   : ""
      }
      </div>  
    </section>
    <section className="bg-[url('https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')] h-800 relative" > 
    
    <div className='absolute top-1/4 left-3/4 '> 
          {scroll > 600 ?
          <div className='animate-slide'>
            <h1 className=" text-white text-7xl w-64 font-sans font-bold 
            relative">
            모각코 Let's Coding 
            </h1> 
          
            <div className='absolute text-white text-opacity-80  text-l font-sans font-bold'>
              <div>우리 모두 같이 한 곳에서</div>
              <div>각자의 열정을 보여주고</div>
              <div>각자 모여서 코딩합시다 </div>
              <div>모든 개발자가 한 곳</div>
              <div>study with me에서 같이 공부해요!</div>
              <Link to = "/map/study">
              <button className='text-white absolute text-opacity-60 border rounded text-xl p-2 pl-3 pr-3 mt-5 font-sans'>서비스하러 바로가기</button>
              </Link>
            </div>
         </div>
         : ""} 
      </div>  
    </section>

<Link to = "/login">
  login
</Link>
    </div>
  )
}