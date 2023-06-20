import React from 'react'

import { FaStar, FaUser, FaUsers, FaUserFriends } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import backgroundGradient from '../assets/blurry-gradient-haikei.svg';
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
        <div className='flex flex-col items-center justify-center mx-auto max-w-[100vw] h-full px-4 text-black bg-white'>
            <h1 className='md:text-5xl text-4xl font-bold my-6 md:my-10 text-black'>Choose your plan...</h1>
            <div className='flex lg:flex-wrap lg:flex-row flex-col gap-3 my-6 md:my-10 w-full justify-center'>
                {cardInfo.map((item, index) => (
                    <div key={item.id} className={`flex flex-col justify-between items-center gap-6 w-full lg:w-[20rem] min-h-full p-5 my-3 lg:my-0
                     ${index === 1 ? 'text-white bg-black' : 'text-black'} rounded-lg relative`}>
                        {/* <div className={`${index === 1 ? 'absolute top-[4vw] right-[4vw] sm:top-[1vh] sm:right-[1vw] lg:top-[1vh] lg:right-[1vw] xl:right-[0.5vw] 2xl:top-[0.75vh] 2xl:right-[0.5vw] bg-white text-black p-3 lg:p-2 rounded-md flex flex-row items-center justify-between gap-3 lg:gap-2' : 'hidden'}`}>
                            <FaStar color="#774caf" />
                            <p className='hidden sm:block lg:hidden'>Most Popular</p>
                            <p className='tracking-wider hidden lg:block'>Popular</p>
                        </div> */}
                        <div className={`${index === 1 ? 'flex flex-row justify-center items-center gap-2 min-w-full max-h-[100px] p-2 rounded-tr-md rounded-tl-md purple-gradient absolute top-[-5vh]' : 'hidden'}`}>
                            <FaStar color="white" size={20}/>
                            <p className='text-white font-base text-base md:text-xl'>Most Popular</p>
                        </div>

                        {item.image}
                        <p className='text-3xl font-bold purple-text-gradient'>{item.id}</p>
                        <h1 className='text-3xl font-semibold'>{item.price}</h1>
                        <div className='text-center'>
                            <div className='flex flex-row justify-start items-center gap-x-2'>
                                <TiTick color='#774caf' />
                                <p>{item.storage}</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-x-2'>
                                <TiTick color='#774caf' />
                                <p>{item.users}</p>
                            </div>
                            <div className='flex flex-row justify-start items-center gap-x-2'>
                                <TiTick color='#774caf' />
                                <p>{item.send}</p>
                            </div>
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