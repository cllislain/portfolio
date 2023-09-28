import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { logo, close, menu} from '../assets'
import { FaGithub, FaInstagram, FaFacebook, FaFileDownload } from 'react-icons/fa';
import Resume from '../resume/cllislain_resume.pdf';

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX}w-full flex items-center py-5 top-0 z-20 bg-primary bg-opacity-0`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <p className='text-white text-[20px] font-bold cursor-pointer'>Lislain &nbsp;
          <span>| Web Developer</span>
          </p>
        </Link>
        
        <div className='md:block hidden'>
          <a href="https://cllislain.github.io/POG/"><img src={logo} alt={logo} className='sm:block hidden w-20 h-auto object-contain'/></a>
        </div>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <li>
          <a href="https://github.com/cllislain">
            <FaGithub size={28} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cllislain/">
            <FaInstagram size={28} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/cllislain/">
            <FaFacebook size={28} />
          </a>
        </li>
        <li>
          <a className="bg-violet-600 hover:bg-violet-700 active:bg-violet-800 focus:outline-none focus:ring focus:ring-violet-300 p-[8px] rounded-2xl text-sm" 
          href={Resume}
          download='Claze-Lislain-Resume'
          target='_blank'
          rel='noopener nonreferrer'>
            <button>Download CV</button>
          </a>
        </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} 
            alt="menu" 
            className='w-[23px] h-[23px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-purple-950 border items-center justify-center border-violet-500 bg-opacity-30 absolute top-20 right-0 mx-4 my-2 min-w-[100px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              <li>
              <a href="https://github.com/cllislain">
              <div className='flex flex-row gap-1 hover:text-violet-700 active:text-violet-800 focus:outline-none focus:ring focus:ring-violet-300'>
                <FaGithub size={24} />
                | Github
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cllislain/">
              <div className='flex flex-row gap-1 hover:text-violet-700 active:text-violet-800 focus:outline-none focus:ring focus:ring-violet-300'>
                <FaInstagram size={24} />
                | Instagram
                </div>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cllislain/">
                <div className='flex flex-row gap-1 hover:text-violet-700 active:text-violet-800 focus:outline-none focus:ring focus:ring-violet-300'>
                <FaFacebook size={24} />
                | Facebook
                </div>
              </a>
            </li>
            <li>
              <a
              title='Download CV'
              href={Resume}
              download='Claze-Lislain-Resume'
              target='_blank'
              rel='noopener nonreferrer'>
                <div className='flex flex-row gap-1 hover:text-violet-700 active:text-violet-800 focus:outline-none focus:ring focus:ring-violet-300'>
                  <FaFileDownload size={24} />| Download CV</div>
              </a>
            </li>
        </ul>
            </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar