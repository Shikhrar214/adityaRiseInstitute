import React from 'react'
import { NavLink, Outlet } from 'react-router'



function Register() {

    
    return (
        <>
            <div>
                <div className='bg-gray-500 text-gray-900'>
                    <ul className='flex p-2'>
                        <li 
                        className='mx-auto'
                        >
                            <NavLink
                            to={"/register/adminRegister"}
                            >
                                    Admin Register
                            </NavLink>
                    </li>

                        <li
                        className='mx-auto'
                        >
                            <NavLink
                            to={"/register"}
                            >
                                    Student Register
                            </NavLink>
                        </li>
                    </ul>
                </div>
               
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default Register
