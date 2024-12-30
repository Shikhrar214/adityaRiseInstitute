import React, { useState } from 'react'

function Courses() {

    const [totalCourse, setrTotalCourse] = useState(0)

    if (totalCourse === 0) {
        return <>

            <div className='h-48 bg-black'>
                    <p className='text-orange-500 text-center font-extrabold text-4xl '>"I sincerely apologize for my actions. I realize they may have hurt or upset you, and that was never my intention. I deeply regret what happened and take full responsibility. Please know I am truly sorry and committed to making things right. Your forgiveness would mean so much."</p>
            </div>


            <div className='bg-orange-400 flex justify-center items-center h-96'>
                <h1 className='text-white text-center items-center  font-bold text-3xl'>Please Contact us to get more information: <a 
                className='font-bold text-3xl'
                href="tel:1010101010">1010101010</a></h1>
            </div>
            
        </>
    }
    return (
       <>
            <div>
                <h1 className='text-orange-800 text-3xl bg-slate-800 text-center'>Courses</h1>
                <div>
                    Courses
                </div>
            </div>
       </> 
    )
}

export default Courses
