import axios from 'axios';
import React, { useState } from 'react'
import { Navigate, useNavigate } from "react-router";


function StudentLogin() {
    
    const [formData, setFormData] =useState(
        {
            ID: "",
            password: ''
        }
    )
    const navigate = useNavigate()
    

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData ({...formData, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/v1/students/studentlogin", formData , {
                withCredentials: true
            })
            console.log('Form Data Submitted:', formData);
            alert('Form submitted successfully!');
            navigate("/student")
        } catch (error) {
            console.log("err ===>", error);
            
        }
        
    }


    const adminLoginPageNavigation = () => navigate("adminlogin")

    return (
        <>
            <div className='my-32 flex items-center'>
                
                <div className='mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>

                <h1 className='text-center text-white'>Student Login</h1>

                    <form onSubmit={handleSubmit} className='text-orange-600'>

                        <div>
                            <label htmlFor="" className="block text-white mb-1">Registration No.: </label>
                            <input 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="text" 
                            name="ID"
                            value={formData.ID}
                            onChange={handleChange}
                            required
                        
                            />
                        </div>

                        <div>
                            <label htmlFor="" className="block text-white mb-1">Password </label>
                            <input 
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required

                            />
                        </div>

                        <div></div>
                        <button 
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 my-8"
                        type='submit'>
                            Login
                        </button>
                       
                       <span>Admin? <span className='font-bold hover:text-rose-900 hover:cursor-pointer'
                       onClick={adminLoginPageNavigation}
                       >login</span></span>
                    </form>
                </div>

            </div>
        </>
    )
}

export default StudentLogin
