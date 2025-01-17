import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import styles from '../styles';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={`${styles.sectionStyle} relative justify-between h-24 max-w-[100vw] xl:max-w-[85vw]`}>
      <h1 className='w-full text-[2.5rem] font-bold py-2 purple-text-gradient'>INSIGHTIFY.</h1>

      <ul className='hidden lg:flex w-[100%] h-[3rem] justify-end'>
        <li className={`${styles.navLink}`}><span className={`${styles.navSpan}`}>Home</span></li>
        <li className={`${styles.navLink}`}><span className={`${styles.navSpan}`}>Account</span></li>
        <li className={`${styles.navLink}`}><span className={`${styles.navSpan}`}>Sign In</span></li>
        <li className={`${styles.navButton}`}>Get Started</li>
      </ul>

      <div className='cursor-pointer block lg:hidden' onClick={handleNav}>
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div className={`${styles.mobileNav} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className='w-full text-2xl font-bold py-4 purple-text-gradient m-4'>INSIGHTIFY.</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#c9befa] transition-all duration-300'>Home</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#c9befa] transition-all duration-300'>Company</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#c9befa] transition-all duration-300'>Resources</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:text-[#c9befa] transition-all duration-300'>About</li>
          <li className='p-4 cursor-pointer hover:text-[#c9befa] transition-all duration-300'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar