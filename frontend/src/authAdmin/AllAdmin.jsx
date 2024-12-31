import React, { useEffect, useState } from 'react'
import moment from 'moment'
import axios from 'axios'

function AllAdmin() {
    const [data, setData] =useState([])

    useEffect( ()=>{
        axios.get('/api/superadmin')
        .then((res)=>{
            console.log(res.data.superAdmin);
            setData(res.data.superAdmin)
            console.log("all admins are ? : ",res.data.sucess);
            
        })  
    },[])

    return (
        <>
            <div>
                <h1>
                    all Admin list
                </h1>

                <div>
                    {
                        data.map((data, index)=>(
                            <div 
                            className='bg-slate-500 p-8 m-4 rounded-2xl flex'
                            key={data._id}>
                                {/* <div>
                                <h2>{data.fullName}</h2>
                                <h6>{data._id}</h6>
                                <h6>{data.email}</h6>
                                <h6>{data.photo}</h6>
                                <h6>{data.mobileNumber}</h6>
                                <h6>{data.fullAddress}</h6>
                                <h6>{data.branchName}</h6>
                                <h6>{data.branchLocation}</h6>
                                <h6>{data.aadhar}</h6>
                                <h6>{data.password}</h6> 
                                <h6>{data.createdAt}</h6>
                                <h6>{data.updatedAt}</h6>
                                <h6>{data.__v}</h6>
                                </div> */}


                                <div>
                                    <div className='bg-white h-60 w-60 rounded-2xl mx-4'>
                                    {data.photo}
                                    </div>
                                </div>


                                <div className='w-full text-white  '>
                                    <h1 className='text-center bg-slate-950'>{data.fullName}</h1>
                                    <div >
                                        
                                        <table>
                                            <tr>
                                                <td>Email: </td>
                                                <td>{data.email}</td>
                                                
                                                <td>Phone:</td>
                                                <td>{data.mobileNumber}</td>
                                            </tr>
                                            <tr>
                                                <td>Aadhar: </td>
                                                <td>{data.aadhar}</td>
                                                
                                                <td>Created: </td>
                                                <td>{moment(data.createdAt).format("DD-MM-YYYY")}</td>
                                            </tr>
                                            <tr>
                                                <td>Last Updated: </td>
                                                <td>{moment(data.updatedAt).format("DD-MM-YYYY")}</td>
                                                
                                                <td>Branch: </td>
                                                <td>{data.branchName}</td>
                                            </tr>
                                            <tr>
                                                <td>Branch Location: </td>
                                                <td>{data.branchLocation}</td>
                                                
                                                <td>Full Address: </td>
                                                <td>{data.fullAddress}</td>
                                            </tr>
                                            
                                        </table>

                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllAdmin
