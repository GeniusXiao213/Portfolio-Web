import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#ffffff] text-black'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#31d691]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Xiaohan. Nice to meet you!</p>
            </div>
            <div>
              <p>I am passionate about building excellent website that improves
              the lives of those around me. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;