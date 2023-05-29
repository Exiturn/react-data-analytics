import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import styles from '../styles';


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const handleNav = () => {
    setIsOpen(!isOpen);
  }

  return (
    // 
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white relative'>
      <h1 className='w-full text-2xl font-bold py-2 purple-text-gradient'>REACT.</h1>

      <ul className='flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div className='cursor-pointer' onClick={handleNav}>
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <div className={`${styles.mobileNav} ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h1 className='w-full text-2xl font-bold py-4 purple-text-gradient m-4'>REACT.</h1>
        <ul className='uppercase'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>Resources</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar