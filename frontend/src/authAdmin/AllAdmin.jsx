import React, { useEffect, useState } from 'react'
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
                                <div>
                                <h2>{data.fullName}</h2>
                                <h6>{data._id}</h6>
                                <h6>{data.email}</h6>
                                <h6>{data.photo}</h6>
                                <h6>{data.mobileNumber}</h6>
                                <h6>{data.fullAddress}</h6>
                                <h6>{data.branchName}</h6>
                                <h6>{data.branchLocation}</h6>
                                <h6>{data.aadhar}</h6>
                                {/* <h6>{data.password}</h6> */}
                                <h6>{data.createdAt}</h6>
                                <h6>{data.updatedAt}</h6>
                                <h6>{data.__v}</h6>
                                </div>
                                <div className='w-full text-white  '>
                                    <h1 className='text-center bg-slate-950'>Recieved Amount</h1>
                                    <div >
                                        
                                        <table>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td>Knocky</td>
                                                <td>Flor</td>
                                                <td>Ella</td>
                                                <td>Juan</td>
                                            </tr>
                                            <tr>
                                                <td>Breed</td>
                                                <td>Jack Russell</td>
                                                <td>Poodle</td>
                                                <td>Streetdog</td>
                                                <td>Cocker Spaniel</td>
                                            </tr>
                                            <tr>
                                                <td>Age</td>
                                                <td>16</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>5</td>
                                            </tr>
                                            <tr>
                                                <td>Owner</td>
                                                <td>Mother-in-law</td>
                                                <td>Me</td>
                                                <td>Me</td>
                                                <td>Sister-in-law</td>
                                            </tr>
                                            <tr>
                                                <td>Eating Habits</td>
                                                <td>Eats everyone's leftovers</td>
                                                <td>Nibbles at food</td>
                                                <td>Hearty eater</td>
                                                <td>Will eat till he explodes</td>
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
