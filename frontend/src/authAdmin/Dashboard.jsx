import React from 'react';
import { Outlet, NavLink } from 'react-router'


function Dashboard() {
    return (
        <>
           <div className=''>
                <h1 className='text-center text-4xl '>
                    AdminDashboard
                </h1>
           </div>
           
           <div className='flex'>
                    <aside className='bg-gray-200 px-5  text-3xl w-full md:w-1/6 h-16 md:h-auto md:min-h-screen border rounded-l-2xl   '>
                        <div className='rounded-sm'>
                            <ul>
                            <li className='py-6'>
                                    <NavLink 
                                    to=""
                                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                        
                                        Home 
                                    </NavLink>
                                </li>

                                <li className='py-6'>
                                    <NavLink 
                                    to={"alladmin"}
                                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                        
                                        All Admin
                                    </NavLink>
                                </li>

                                <li className='py-6'>
                                    <NavLink 
                                    to={"allstudent"}
                                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                        
                                        All Students
                                    </NavLink>
                                </li>

                                <li className='py-6'>
                                    <NavLink 
                                    to={"course"}
                                    className={({isActive})=>`block py-2 pr-4 pl-3 duration-200  border-b ${isActive ?"text-orange-700":"text-gray-700"} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                        
                                        Add Course
                                    </NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </aside>
                    <aside className=' w-full md:w-5/6 p-6 bg-orange-200 text-2xl'>
                        <Outlet />
                    </aside>
           </div>
           
        </>
    )
}

export default Dashboard
