import React from 'react'

import styles from '../styles';

const Newsletter: React.FC = () => {
    return (
        <div className={`${styles.sectionStyle} my-4`}>
            <div className={`${styles.newsletterContainer}`}>
                <div>
                    <h1 className={`${styles.newsletterHeader}`}>Want tips & tricks to optimize your workflow?</h1>
                    <p className={`${styles.newsletterSubHeader}`}>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='min-w-[40%]'>
                    <div className='flex flex-col md:flex-row justify-center md:justify-between items-center'>
                        <input type="text" className={`${styles.newsletterInput}`} placeholder='Enter your email' />
                        <button className={`${styles.newsletterButton}`}>Notify me</button>
                    </div>
                    <p className='mt-3 text-xs'>We care about the protection of your data</p>
                    <p className={`${styles.newsletterPolicy}`}>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Newsletter