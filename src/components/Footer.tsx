import React from 'react'

import {   
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

import styles from '../styles';

const Footer: React.FC = () => {
  return (
    <div className={`${styles.sectionStyle} relative justify-between h-24 max-w-[100vw] xl:max-w-[85vw] my-6`}>
      <div className='flex flex-col max-w-full sm:max-w-[30vw] xl:max-w-[20vw]'>
        <h1 className='w-full text-[1.8rem] sm:text-[3vw] xl:text-[1.8rem] font-bold purple-text-gradient'>INSIGHTIFY.</h1>
        <p className='my-5 hidden sm:inline-block'>Unlock your app's potential with Insightify. Real-time metrics, actionable insights, and growth optimization.</p>
        <div className='flex flex-row justify-between items-center'>
          <FaFacebookSquare size={30}/>
          <FaInstagram size={30}/>
          <FaTwitterSquare size={30}/>
          <FaGithubSquare size={30}/>
          <FaDribbbleSquare size={30}/>
        </div>
      </div>
    </div>
  )
}

export default Footer