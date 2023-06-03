import React from 'react';
import Typed from 'react-typed';

import styles from '../styles';


const Hero: React.FC = () => {
    return (
        <div className={`${styles.sectionStyle} justify-center mt-[9rem] md:mt-[13rem] h-[10rem]`}>
            <div className='max-w-[800px] w-[100%] h-full text-center flex flex-col justify-center'>
                <p className='purple-text-gradient font-bold p-2 text-base sm:text-lg md:text-xl'>GROWING WITH DATA ANALYTICS</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
                <div className='flex flex-row justify-center gap-2'>
                    <p className='md:text-2xl sm:text-xl text-sm font-bold py-4'>Fast, flexible, financing for</p>
                    <Typed 
                        strings={['BTB', 'SaaS', 'BTC']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop   
                        className='md:text-2xl sm:text-xl text-sm font-bold py-4 purple-text-gradient'                 
                    />
                </div>
                <p className='md:text-lg text-xs font-bond text-gray-400 w-[75%] lg:w-full place-self-center'>Monitor your data analytics to increase the revenue for BTB, BTC & SASS platforms.</p>
                <button className={`${styles.heroButton} place-self-center mt-10`}>Get Started</button>
            </div>
        </div>
    )
}

export default Hero
