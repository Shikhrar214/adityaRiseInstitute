import React, { useEffect, useState } from 'react';
import axios from 'axios'

function Courses() {

    const [totalCourse, setrTotalCourse] = useState(0);
    const [data, setData] = useState([])
    const [updatedData, setUpdatedData] = useState({})


    

//   update course 
    const editCourse = async (id) => {
        
       const responce = await axios.put(`/api/course/${id}`,updatedData);
    };

// delete course

    const deleteCourse = async (id) => {
        
        alert(" Do you wants to delete ")
        await axios.delete(`/api/course/${id}`)
        .then(() => {
            alert("Course Deleted Sucessfully")
        })
        .catch((err) => {
            console.log("err: ",err.responce.data);
            
        })
    };

// fetch data

    const responce = async () => {
        await axios.get("/api/v1/courses/courses")
        .then((res) => {
            setData(res.data.courses)
            setrTotalCourse(res.data.courses.length)
            console.log ("trial + = ",res.data.courses);
            
        })
    }
    useEffect(()=>{
       responce()
    },[])

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
            <div className='w-full'>
                <h1 className='text-orange-800 text-4xl bg-slate-800 text-center p-8'>Course Status</h1>
                <div>
                    <div className='sm:block md:block lg:flex lg:flex-wrap  w-full bg-slate-600'>
                        {
                            data.map((data)=>(
                                <div 
                                key={data._id}
                                className='w-96 h-full bg-slate-700 m-8 rounded-2xl p-4  mx-auto '>
                                    <div className='text-center text-pretty text-orange-400 font-extrabold text-7xl first-letter:hover:text-orange-950 cursor-pointer bg-orange-100 rounded-t-2xl'>
                                        {data.thumbnail	}
                                    </div>
                                    <div className='text-gray-300 text-2xl'>
                                        
                                        <div><span className='font-thin font-serif text-orange-500 '>discription: </span>{data.discription}</div>
                                        
                                        <div><span className='font-thin font-serif text-orange-500 '>Start Date: </span>{data.lastDate}</div>
                                        <div><span className='font-thin font-serif text-orange-500 '>next Batch Date: </span>{data.nextBatchDate || ""}</div>
                                       
                                        <div><span className='font-thin font-serif text-orange-500 '>tutor: </span>{data.tutor}</div>
                                        <div><span className='font-thin font-serif text-orange-500 '>price: </span>{data.price}</div>
                                        <div><span className='font-thin font-serif text-orange-500 '>discountedPrice: </span>{data.discountedPrice}</div>
                                        <div className='text-red-800'><span className='font-thin font-serif text-orange-500 '>message: </span>{data.message}</div>
                                    </div>

                                    <div className='flex'>
                                        <div>
                                            <button onClick={() => {
                                                console.log(data._id);
                                                editCourse(data._id);
                                            }} className='bg-orange-900 rounded-2xl p-2 mx-8'>
                                            editCourse    
                                            </button>    
                                        </div>
                                        
                                        
                                        <div>
                                            <button onClick={() => {
                                                console.log(data._id);
                                                deleteCourse(data._id);
                                            }} className='bg-orange-900 rounded-2xl p-2 mx-8'>
                                                deleteCourse
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
       </> 
    )
}

export default Courses
