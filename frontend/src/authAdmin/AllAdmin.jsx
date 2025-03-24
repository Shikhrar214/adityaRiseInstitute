// 



import React, { useEffect, useState } from 'react';
import moment from 'moment';
import axios from 'axios';

function AllAdmin() {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        axios.get('/api/v1/admins/superadmin')
            .then((res) => {
                setData(res.data.admin);
                console.log("All admins:", res.data.admin);
            })
            .catch((error) => console.error("Error fetching admins:", error));
    }, []);

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Welcome!</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data && (
                    <div key={data._id} className="bg-slate-500 p-6 rounded-2xl shadow-lg flex flex-col items-center">
                        <div className="bg-white h-40 w-40 rounded-full overflow-hidden">
                            <img className="w-full h-full object-cover" src={data.photo} alt={data.fullName} />
                        </div>
                        <h2 className="text-white text-lg font-semibold bg-slate-950 w-full text-center py-2 mt-4">{data.fullName}</h2>
                        <table className="w-full text-white text-sm mt-4">
                            <tbody>
                                <tr>
                                    <td className="font-bold pr-2">Email:</td>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Phone:</td>
                                    <td>{data.mobileNumber}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Aadhar:</td>
                                    <td>{data.aadhar}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Created:</td>
                                    <td>{moment(data.createdAt).format("DD-MM-YYYY")}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Last Updated:</td>
                                    <td>{moment(data.updatedAt).format("DD-MM-YYYY")}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Branch:</td>
                                    <td>{data.branchName}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Branch Location:</td>
                                    <td>{data.branchLocation}</td>
                                </tr>
                                <tr>
                                    <td className="font-bold pr-2">Full Address:</td>
                                    <td>{data.fullAddress}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AllAdmin;
