//rafce es7
import React,{useState} from 'react'
import {FaBars,FaTimes,FaGithub,FaLinkedin, FaFacebook} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav,setNav]=useState(false)

  const handleClick=()=>setNav(!nav)

  return (
    <div className='fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#571267] text-white'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'100px'}}/>
        </div>
        
          <ul className='hidden md:flex'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
            <li>
            <Link to='about' smooth={true} duration={500}>
            About
          </Link>
            </li>
            <li>
            <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
            </li>
            <li>
            <Link to='projects' smooth={true} duration={500}>
            Projects
          </Link>
            </li>
            <li>
            <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
            </li>
          </ul>
        
        <div className='md:hidden z-10' onClick={handleClick}>
          {!nav?<FaBars />: <FaTimes />}
        </div>
        <ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#571267] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
            <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
            </li>
            <li className='py-6 text-4xl'>
            {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
            </li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700'>
              <a className='flex justify-between items-center w-full text-white' 
              href="https://www.linkedin.com/in/xiaohan-wan-399b12235">
                Linkedin <FaLinkedin size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
              <a className='flex justify-between items-center w-full text-white' 
              href="https://github.com/GeniusXiao213">
                Github <FaGithub size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
              <a className='flex justify-between items-center w-full text-white' 
              href="arya9wanxiaohan@gmail.com">
                Email <HiOutlineMail size={30}/>
              </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
              <a className='flex justify-between items-center w-full text-white' 
              href="/">
                Resume <BsFillPersonLinesFill size={30}/>
              </a>
            </li>
          </ul>
        </div>
        
    </div>
  )
}

export default Navbar