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
                                <h1>{data.photo}</h1>
                            </div>
                            <div className='h-10 w-36 bg-zinc-200'>
                                <h1>{data.signature}</h1>
                            </div>
                            
                            
                            <h1><span className='text-orange-900'>Registration Date: </span>{moment(data.createdAt).format("DD-MM-YYYY")}</h1>
                            <h1><span className='text-orange-900'>Last Updation: </span>{moment(data.updatedAt).format("DD-MM-YYYY")}</h1> 
                        <div>

                        </div>
                        
                       </div>

                       <div className='w-full text-white  '>
                                    <h1 className='text-center bg-slate-950'>{data.fullName}</h1>
                                    <div >
                                        
                                        <table>
                                            <tr>
                                                <td>ID :</td>
                                                <td>{data._id}</td>
                                                <td>DOB :</td>
                                                <td>{moment(data.dob).format("DD-MM-YYYY")} </td>
                                                
                                            </tr>
                                            <tr>
                                                <td>Course :</td>
                                                <td>{data.course}</td>

                                                
                                                <td>Category :</td>
                                                <td>{data.category}</td>
                                                
                                            </tr>
                                            <tr>
                                                <td>Aadhar :</td>
                                                <td>{data.aadhar}</td>
                                                
                                                <td>Phone :</td>
                                                <td>{data.mobile}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender :</td>
                                                <td>{data.gender}</td>
                                                
                                                <td>Pin Code :</td>
                                                <td>{data.pincode}</td>
                                            </tr>
                                            <tr>
                                                <td>Father Name: </td>
                                                <td>{data.fatherName}</td>
                                                
                                                <td>Mother Name: </td>
                                                <td>{data.motherName}</td>
                                            </tr>

                                            <tr>
                                                <td>Post: </td>
                                                <td>{data.post}</td>
                                                
                                                <td>District: </td>
                                                <td>{data.district}</td>
                                            </tr>

                                            <tr>
                                                <td>State: </td>
                                                <td>{data.state}</td>
                                                
                                                <td>Registration fee</td>
                                                <td>{data._v}</td>
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
