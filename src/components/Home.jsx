import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi' 

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#ffffff]'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#010302]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#000000]'>Xiaohan Wan</h1>
            <h2 className='text-2xl sm:text-4xl text-gray-600 mb-5'>I'm a full-stack web developer with hand-on experiences.</h2>
            <p className='py-4 max-w-[700px]'> One year Experience of executing web development using JavaScript, Html,
                 CSS and C# (.Net Core). Well-versed in requirements for Html5 and CSS3 as well as React development, with an in-depth knowledge of Bootstrap and UI design.</p>
        <div>
            <button className='text-black border-2 group border-black px-6 py-3 my-2 flex items-center hover:bg-[#571267] hover:border-[#571267] hover:text-white'>
            View Work
            <span className='group-hover:rotate-90 duration-300'> <HiArrowNarrowRight className='ml-3'/></span>
                </button>
        </div>
        </div>
    </div>
  )
}

export default Home