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
    <footer className={`${styles.sectionStyle} relative justify-between md:h-24 max-w-[100vw] xl:max-w-[85vw] my-6`}>
      <div className={`${styles.footerContainer}`}>
        <div className={`${styles.footerContent}`}>
          <h1 className={`${styles.footerHeader}`}>INSIGHTIFY.</h1>
          <p className={`${styles.footerParagraph}`}>Unlock your app's potential with Insightify. Real-time metrics, actionable insights, and growth optimization.</p>
        </div>
        <div className='flex flex-row justify-center items-center w-full md:w-[30%] gap-5 mt-2'>
          <FaFacebookSquare className="cursor-pointer" size={25} />
          <FaInstagram className="cursor-pointer" size={25} />
          <FaTwitterSquare className="cursor-pointer" size={25} />
          <FaGithubSquare className="cursor-pointer" size={25} />
          <FaDribbbleSquare className="cursor-pointer" size={25} />
        </div>
      </div>
    </footer>
  )
}

export default Footer