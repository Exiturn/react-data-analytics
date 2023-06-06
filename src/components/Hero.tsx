import React from 'react';
import Typed from 'react-typed';

import styles from '../styles';


const Hero: React.FC = () => {
    return (
        <div className={`${styles.sectionStyle} justify-center mt-[9rem] md:mt-[13rem] h-[10rem]`}>
            <div className={`${styles.heroContainer}`}>
                <p className={`${styles.heroEyebrow}`}>GROWING WITH DATA ANALYTICS</p>
                <h1 className={`${styles.heroHeader}`}>Grow with data.</h1>
                <div className='flex flex-row justify-center gap-2'>
                    <p className={`${styles.heroSubHeader}`}>Fast, flexible, financing for</p>
                    <Typed 
                        strings={['BTB', 'SaaS', 'BTC']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop   
                        className='md:text-2xl sm:text-xl text-sm font-bold py-4 purple-text-gradient'                 
                    />
                </div>
                <p className={`${styles.heroParagraph}`}>Monitor your data analytics to increase the revenue for BTB, BTC & SASS platforms.</p>
                <button className={`${styles.heroButton} place-self-center mt-10`}>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
