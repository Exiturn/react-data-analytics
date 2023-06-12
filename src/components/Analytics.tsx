import { motion } from "framer-motion"

import analytics from '../assets/analytics.png';
import cloud from '../assets/cloud.png';
import styles from '../styles';

const AnimatedCloud = () => {
  return (
    <div className="absolute z-10">
      <motion.div
        animate={{
          y: [0, 25, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className={`${styles.cloudRightSize}`}
      >
        <motion.img className={`${styles.cloudRightPosition}`} src={cloud} alt="cloud right" />
      </motion.div>
      <motion.div
        animate={{
          y: [0, 27, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'loop'
        }}
        className={`${styles.cloudLeftSize}`}
      >
        <motion.img className={`${styles.cloudLeftPosition}`} src={cloud} alt="cloud left" />
      </motion.div>
    </div>
  )
}

const Analytics: React.FC = () => {
  return (
    <div className={`${styles.analyticsSection} bg-white`}>
      <div className={`${styles.analyticsContainer}`}>
        <div className='max-w-[80vw] sm:max-w-[50vw] relative'>
          <AnimatedCloud />
          <img className='p-3' src={analytics} alt="Analytics Image" />
        </div>
        <div className='flex flex-col justify-center items-start text-black py-4 z-20'>
          <p className={`${styles.analyticsEyebrow}`}>DATA ANALYTICS DASHBOARD</p>
          <h1 className={`${styles.analyticsHeader}`}>Manage Data Analytics Centrally</h1>
          <p className='mt-4'>In today's fast-paced world,
            <span className={`${styles.importantSpan}`}>
              <span className='relative text-white'>data is the key to success.</span>
            </span> <br />
            Our cutting-edge analytics platform combines state-of-the-art technology with industry expertise,
            enabling you to extract meaningful insights from your data effortlessly. Uncover hidden patterns, identify trends, and make data-driven decisions that propel your business forward.</p>
          <button className={`${styles.analyticsButton}`}>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics