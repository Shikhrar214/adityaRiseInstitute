import React, { useState } from 'react'
import { NavLink } from 'react-router'
import { Logo, logo } from '../assets/images'

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <header className='shadow sticky z-50 top-0'>
                <nav className='flex mx-auto bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
                    <div className='mx-auto '>
                        <img 
                            className='h-20'
                        src={Logo} alt="LOGO" />
                    </div>
                    <div className='mx-auto hidden md:block content-center'>
                        <ul className='flex'>
                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"/"}
                                
                                >
                                Home
                                </NavLink>
                            </li>

                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"/about"}
                                >
                                About
                                </NavLink>
                            </li>

                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"/contect"}
                                >
                                Contact
                                </NavLink>
                            </li>

                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"/gallary"}
                                >
                                Gallary
                                </NavLink>
                            </li>

                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"/courses"}
                                >
                                Courses
                                </NavLink>
                            </li>

                            <li className="md:mx-2">
                                <NavLink
                                className={({isActive})=>` block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                                to={"login"}
                                >
                                Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='hidden md:block content-center'>
                        <NavLink
                        className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}
                        to={"/register"}
                        >
                            Register
                        </NavLink>
                    </div>
                    
                    {/* hmburger */}

                    <div className="relative">
                    {/* Hamburger Icon */}
                    <button
                        onClick={toggleMenu}
                        className="p-2 bg-orange-800 text-grey-700 rounded-md focus:outline-none md:hidden"
                    >
                        <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                        />
                        </svg>
                    </button>

                    {/* Menu */}
                    <div
                        className={`absolute top-12 right-0 bg-white shadow-lg rounded-lg w-48 p-4 space-y-4 ${
                        isOpen ? 'block' : 'hidden'
                        } md:hidden`}
                    >
                        <NavLink
                        to={"/"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Home
                        </NavLink>
                        <NavLink
                        to={"/about"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        About
                        </NavLink>
                        <NavLink
                        to={"/contect"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Contact
                        </NavLink>
                        <NavLink
                        to={"/gallary"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Gallary
                        </NavLink>
                        <NavLink
                        to={"/courses"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Courses
                        </NavLink>

                        <NavLink
                        to={"/register"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Student Register
                        </NavLink>

                        <NavLink
                        to={"/login"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Login
                        </NavLink>

                        <NavLink
                        to={"/logout"}
                        className="block text-gray-800 hover:text-orange-700 transition"
                        >
                        Logout
                        </NavLink>
                    </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
