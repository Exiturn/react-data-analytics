import React from 'react'

import { FaStar, FaUser, FaUsers, FaUserFriends } from "react-icons/fa";

import user from '../assets/user.png';
import partnership from '../assets/partnership.png';
import group from '../assets/group.png';

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
            image: <FaUsers size={80}/>,
            price: '£299',
            storage: '5 TB Storage',
            users: '10 Users Allowed',
            send: 'Send up to 20 GB'
        }
    ]

    return (
        <div className='flex items-center justify-center mx-auto max-w-[100vw] h-full px-4 text-black bg-white'>
            <div className='flex lg:flex-wrap lg:flex-row flex-col gap-3 my-6 md:my-10 w-full justify-center'>
                {cardInfo.map((item, index) => (
                    <div key={item.id} className={`flex flex-col justify-between items-center gap-6 w-full lg:w-[20rem] min-h-full p-5
                     ${index === 1 ? 'text-white bg-black' : 'text-black'} rounded-lg relative`}>
                        <div className={`${index === 1 ? 'absolute top-[4vw] right-[4vw] sm:top-[1vh] sm:right-[1vw] lg:top-[1vh] lg:right-[1vw] xl:right-[0.5vw] 2xl:top-[0.75vh] 2xl:right-[0.5vw] bg-white text-black p-3 lg:p-2 rounded-md flex flex-row items-center justify-between gap-3 lg:gap-2' : 'hidden'}`}>
                            <FaStar color="#774caf" />
                            <p className='hidden sm:block lg:hidden'>Most Popular</p>
                            <p className='tracking-wider hidden lg:block'>Popular</p>
                        </div>
                        
                        {item.image}
                        {/* <img src={item.image} alt={item.id} className='max-w-[4rem]' /> */}
                        <p className='md:text-3xl text-sm font-bold purple-text-gradient'>{item.id}</p>
                        <h1>{item.price}</h1>
                        <div className='text-center'>
                            <p>{item.storage}</p>
                            <p>{item.users}</p>
                            <p>{item.send}</p>
                        </div>
                        <button className={`${index === 1 ? styles.primaryButton : 'hidden'}`}>Start Trial</button>
                        <button className={`${index !== 1 ? styles.secondaryButton : 'hidden'}`}>Start Trial</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Pricing