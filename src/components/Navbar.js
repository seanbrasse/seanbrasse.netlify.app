import React from 'react'
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
    return (
        <header className="bg-gray-600 min-w-max">
            <div className="container mx-auto flex sm:justify-even md:justify-between">
                <nav className='flex'>
                    <NavLink to="/" exact
                        activeClassName='text-white'
                        className='inline-flex items-center md:py-6 px-3 mr-4 text-white hover:text-blue-400 text-5xl font-bold cursive tracking-widest'>
                        Sean
                    </NavLink>
                    <NavLink to="/post"
                        activeClassName="text-gray-100 bg-gray-700"
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl'>
                        Work Experience
                    </NavLink>
                    <NavLink to="/project"
                        activeClassName="text-gray-100 bg-gray-700"
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl'>
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        activeClassName="text-gray-100 bg-gray-700"
                        className='inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-blue-400 text-1.5xl'>
                        About Me
                    </NavLink>
                </nav>
                <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url="https://www.instagram.com/seanbrasse/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 45, width: 45 }} />
                    <SocialIcon url="https://www.linkedin.com/in/sean-brasse/" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 45, width: 45 }} />
                    <SocialIcon url="https://github.com/seanbrasse" className="mr-4" target="_blank" fgColor='#fff' style={{ height: 45, width: 45 }} />
                </div>
            </div>
        </header>
    )
}