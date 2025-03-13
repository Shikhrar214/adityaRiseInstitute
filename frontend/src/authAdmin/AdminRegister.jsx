import React from 'react'
import { useState } from 'react';
import axios from 'axios';

function AdminRegister() {

    


    const [formData, setFormData] = useState({
            fullName: '',
            email: '',
            role: 'Admin',
            photo: null,
            mobileNumber: '',
            fullAddress: '',
            branchName: '',
            branchLocation: '',
            aadhar: '',
            password: '',
          });
        
          const handleChange = (e) => {
            const { name, value, files } = e.target;
            if (name === 'photo') {
              setFormData({ ...formData, [name]: files[0] });
              
              
            } else {
              setFormData({ ...formData, [name]: value });
              
            }
          };
          
          
          const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
                const response = await axios.post("/api/v1/admins/superadmin", formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                })
                console.log("response: ", response);
                alert('Form submitted successfully!');
            } catch (error) {
                console.log("Upload failed: " , error);
                
            }
            
          };
    return (
        <>
            <div className="min-h-screen bg-gray-200 flex justify-center items-center">
                <div className="bg-white p-8 m-8 rounded-lg shadow-lg max-w-md w-full">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                    <form onSubmit={handleSubmit}  enctype="multipart/form-data" className="space-y-4">
                    <div>
                        <label className="block text-gray-600 mb-1">Full Name</label>
                        <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">E-mail</label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>

                    {/*  */}
                        <div>
                            <label className="block mb-2">Role</label>
                            <select
                                name="role"
                                className="w-full p-2 border rounded-md"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="Admin">Admin</option>
                                <option value="sAdmin">SuperAdmin</option>
                                
                            </select>
                        </div>
                    {/*  */}
            
                    <div>
                        <label className="block text-gray-600 mb-1">Photo</label>
                        <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        accept="image/*"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Mobile Number</label>
                        <input
                        type="text"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Full fullAddress</label>
                        <textarea
                        name="fullAddress"
                        value={formData.fullAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        ></textarea>
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Branch Name</label>
                        <input
                        type="text"
                        name="branchName"
                        value={formData.branchName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Branch Location</label>
                        <input
                        type="text"
                        name="branchLocation"
                        value={formData.branchLocation}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Aadhar Number</label>
                        <input
                        type="text"
                        name="aadhar"
                        value={formData.aadhar}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <div>
                        <label className="block text-gray-600 mb-1">Create Password</label>
                        <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                        />
                    </div>
            
                    <button
                        type="submit"
                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
                    >
                        Register
                    </button>
            </form>
          </div>
        </div>
        </>
    )
}

export default AdminRegister
