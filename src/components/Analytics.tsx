import computer from '../assets/analytics.png';

import styles from '../styles';

const Analytics = () => {
  return (
    <div className={`${styles.sectionStyle} bg-white mt-[2rem] md:mt-[8rem]`}>
        <div className={`flex flex-col md:flex-row justify-center items-center`}>
            <div className='text-black'>
                <p>DATA ANALYTICS DASHBOARD</p>
                <h1>Manage Data Analytics Centrally</h1>
                <p>In today's fast-paced world, data is the key to success. Our cutting-edge analytics platform combines state-of-the-art technology with industry expertise, 
                  enabling you to extract meaningful insights from your data effortlessly. Uncover hidden patterns, identify trends, and make data-driven decisions that propel your business forward.</p>
                <button className={`${styles.analyticsButton}`}>Get Started</button>
            </div>
            <div>
              <img src={computer} alt="Analytics Image" />
            </div>
        </div>
    </div>
  )
}

export default Analytics