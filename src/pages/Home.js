import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../images/nyc1.jpg';

export default function Home() {
    return (
        <main>
            <img
                src={image}
                alt="NYC Background"
                className='absolute object-cover w-full h-full' />
            <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
                <NavLink to='/about'>
                    <h1 className="text-6xl text-gray-100 font-bold cursive hover:text-blue-400 rounded hover:bg-gray-200 leading-none lg:leading-snug home-name">Hi, I'm Sean</h1>
                </NavLink>
            </section>
        </main>
    );
}