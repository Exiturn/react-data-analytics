import computer from '../assets/analytics.png';

import styles from '../styles';

const Analytics = () => {
  return (
    <div className={`${styles.analyticsSection} bg-white`}>
      <div className={`${styles.analyticsContainer}`}>
        <div>
          <img className='p-3' src={computer} alt="Analytics Image" />
        </div>
        <div className='flex flex-col justify-center items-center text-black p-4'>
          <p className={`${styles.analyticsEyebrow}`}>DATA ANALYTICS DASHBOARD</p>
          <h1 className={`${styles.analyticsHeader}`}>Manage Data Analytics Centrally</h1>
          <p className='text-center mt-4'>In today's fast-paced world, 
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