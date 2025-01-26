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
            console.log("all admins are ? : ",res.data);
            
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
                                


                                <div>
                                    <div className='bg-white h-60 w-60 rounded-2xl mx-4'>
                                    {/* {data.photo} */}
                                    <img 
                                    className='w-full h-full'
                                    src={data.photo} alt="" />
                                    </div>
                                </div>


                                <div className='w-full text-white  '>
                                    <h1 className='text-center text-xl bg-slate-950'>{data.fullName}</h1>
                                    <div >
                                        
                                        <table cellPadding={20} className='w-full h-full'>
                                            <tr>
                                                <td className='text-2xl font-bold'>Email: </td>
                                                <td className='text-2xl font-semibold'>{data.email}</td>
                                                
                                                <td className='text-2xl font-bold'>Phone:</td>
                                                <td className='text-2xl font-semibold'>{data.mobileNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Aadhar: </td>
                                                <td className='text-2xl font-semibold'>{data.aadhar}</td>
                                                
                                                <td className='text-2xl font-bold'>Created: </td>
                                                <td className='text-2xl font-semibold'>{moment(data.createdAt).format("DD-MM-YYYY")}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Last Updated: </td>
                                                <td className='text-2xl font-semibold'>{moment(data.updatedAt).format("DD-MM-YYYY")}</td>
                                                
                                                <td className='text-2xl font-bold'>Branch: </td>
                                                <td className='text-2xl font-semibold'>{data.branchName}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-2xl font-bold'>Branch Location: </td>
                                                <td className='text-2xl font-semibold'>{data.branchLocation}</td>
                                                
                                                <td className='text-2xl font-bold'>Full Address: </td>
                                                <td className='text-2xl font-semibold'>{data.fullAddress}</td>
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
