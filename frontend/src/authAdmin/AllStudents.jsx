import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios'

function AllStudents() {

    const [students, setStudents] = useState([])


    useEffect( ()=>{
        axios.get("/api/student")
        .then((res)=>{
            setStudents(res.data.students)
            console.log("success code is ==== ",res.data.students);
            
        })
        .catch((err)=>{
            return err
        })
    },[])
    return (
        <>
            <h1>
                All Students
            </h1>

           <div>
            {
            
                students.map((data, index)=>(
                    <div key={data._id}
                    className='bg-slate-500 p-8 m-4 rounded-2xl flex'
                    >
                       <div>
                            <div className='h-36 w-36 bg-cyan-200'>
                                <img
                                className='w-full h-full'
                                src={data.photo} alt="" />
                            </div>
                            <div className='h-10 w-36 bg-zinc-200'>
                                <div className='w-full h-full overflow-hidden'>
                                <img src={data.signature} alt="" className='object-cover' />
                                </div>
                            </div>
                            
                            
                            <h1><span className='text-orange-900'>Registration Date: </span>{moment(data.createdAt).format("DD-MM-YYYY")}</h1>
                            <h1><span className='text-orange-900'>Last Updation: </span>{moment(data.updatedAt).format("DD-MM-YYYY")}</h1> 
                        <div>

                        </div>
                        
                       </div>

                       <div className='w-full text-white  '>
                                    <h1 className='text-center bg-slate-950'>{data.fullName}</h1>
                                    <div >
                                        
                                        <table cellPadding={20} className='w-full h-full'>
                                            <tr>
                                                <td className='text-2xl font-bold'>ID :</td>
                                                <td className='text-2xl font-semibold'>{data.ID}</td>
                                                <td className='text-2xl font-bold'>DOB :</td>
                                                <td className='text-2xl font-semibold'>{moment(data.dob).format("DD-MM-YYYY")} </td>
                                                
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Course :</td>
                                                <td className='text-2xl font-semibold'>{data.course}</td>

                                                
                                                <td className='text-2xl font-bold'>Category :</td>
                                                <td className='text-2xl font-semibold'>{data.category}</td>
                                                
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Aadhar :</td>
                                                <td className='text-2xl font-semibold'>{data.aadhar}</td>
                                                
                                                <td className='text-2xl font-bold'>Phone :</td>
                                                <td className='text-2xl font-semibold'>{data.mobile}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Gender :</td>
                                                <td className='text-2xl font-semibold'>{data.gender}</td>
                                                
                                                <td className='text-2xl font-bold'>Pin Code :</td>
                                                <td className='text-2xl font-semibold'>{data.pincode}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Father Name: </td>
                                                <td className='text-2xl font-semibold'>{data.fatherName}</td>
                                                
                                                <td className='text-2xl font-bold'>Mother Name: </td>
                                                <td className='text-2xl font-semibold'>{data.motherName}</td>
                                            </tr>

                                            <tr>
                                                <td className='text-2xl font-bold'>Post: </td>
                                                <td className='text-2xl font-semibold'>{data.post}</td>
                                                
                                                <td className='text-2xl font-bold'>District: </td>
                                                <td className='text-2xl font-semibold'>{data.district}</td>
                                            </tr>

                                            <tr>
                                                <td className='text-2xl font-bold'>State: </td>
                                                <td className='text-2xl font-semibold'>{data.state}</td>
                                                
                                                <td className='text-2xl font-bold'>Registration fee</td>
                                                <td className='text-2xl font-semibold'>{data._v}</td>
                                            </tr>
                                        </table>

                                        
                                    </div>
                                </div>
                    </div>
                ))}
           </div>
        </>
    )
}

export default AllStudents
