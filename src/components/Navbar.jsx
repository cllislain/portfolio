import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo, close, menu} from '../assets'
import { FaGithub, FaInstagram, FaFacebook } from 'react-icons/fa';


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 bg-primary bg-opacity-0`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to="/"
        className='flex items-center gap-2'
        onClick={() => {
          setActive("")
          window.scrollTo(0, 0)
        }}>
          <p className='text-white text-[15px] font-bold cursor-pointer flex'>Lislain &nbsp;
          <span className='sm:block hidden'>| Web Developer</span>
          </p>
        </Link>

        <a href="https://cllislain.github.io/POG/"><img src={logo} alt={logo} className='w-15 h-9 object-contain'/></a>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
        <li>
          <a href="https://github.com/cllislain">
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/cllislain/">
            <FaInstagram size={24} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/cllislain/">
            <FaFacebook size={24} />
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
                <FaGithub size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/cllislain/">
                <FaInstagram size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/cllislain/">
                <FaFacebook size={24} />
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