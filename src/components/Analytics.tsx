import React from 'react';
import styles from '../styles';
import computer from '../assets/analytics.png';


const Analytics = () => {
  return (
    <div className={`${styles.sectionStyle} bg-white mt-[2rem] md:mt-[8rem]`}>
        <div className={`flex flex-col md:flex-row justify-center items-center`}>
            <div className='text-black'>
                Analytics
            </div>
        </div>
    </div>
  )
}

export default Analytics