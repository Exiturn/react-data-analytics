import React from 'react'

import { FaStar, FaUser, FaUsers, FaUserFriends } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import styles from '../styles';

const Pricing: React.FC = () => {

    interface Item {
        id: string;
        image: JSX.Element;
        price: string;
        storage: string;
        users: string;
        send: string;
    }

    const cardInfo: Item[] = [
        {
            id: 'Single User',
            image: <FaUser size={80} />,
            price: '£149',
            storage: '500 GB Storage',
            users: '1 User Allowed',
            send: 'Send up to 2 GB'
        },
        {
            id: 'Partnership',
            image: <FaUserFriends size={80} />,
            price: '£199',
            storage: '1 TB Storage',
            users: '3 Users Allowed',
            send: 'Send up to 10 GB'
        },
        {
            id: 'Group Account',
            image: <FaUsers size={80} />,
            price: '£299',
            storage: '5 TB Storage',
            users: '10 Users Allowed',
            send: 'Send up to 20 GB'
        }
    ]

    return (
        <div className={`${styles.pricingSection}`}>
            <h1 className={`${styles.pricingHeader}`}>Pay once, <span className='purple-text-gradient'>use forever!</span> </h1>
            <p className={`${styles.pricingParagraph}`}>No matter the size of your business, we've got you covered. 14-days unlimited free trial. No contact or credit card required.</p>
            <div className={`${styles.pricingContainer}`}>
                {cardInfo.map((item, index) => (
                    <div key={item.id} className={`${styles.pricingCard} 
                    ${index === 1 ? 'text-white purple-gradient' : 'text-white bg-black bg-clip-border'}`}>
                        <div className={`${index === 1 ? `${styles.pricingPopular}` : 'hidden'}`}>
                            <FaStar color="white" size={20}/>
                            <p>Most Popular</p>
                        </div>

                        {item.image}
                        <p className='text-3xl font-bold'>{item.id}</p>
                        <h1 className='text-3xl font-semibold'>{item.price}</h1>
                        <ul className={`${styles.pricingList}`}>
                            <li className='flex flex-row justify-center items-center gap-x-2 w-full'>
                                <TiTick color='#7063c5' />
                                <p className='text-start'>{item.storage}</p>
                            </li>
                            <li className='flex flex-row justify-center items-center gap-x-2 my-2 w-full'>
                                <TiTick color='#7063c5' />
                                <p className='text-start'>{item.users}</p>
                            </li>
                            <li className='flex flex-row justify-start items-center gap-x-2'>
                                <TiTick color='#7063c5' />
                                <p className='text-start'>{item.send}</p>
                            </li>
                        </ul>
                        <button className={`${index === 1 ? styles.tertiaryButton : 'hidden'}`}>Start Trial</button>
                        <button className={`${index !== 1 ? styles.primaryButton : 'hidden'}`}>Start Trial</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing