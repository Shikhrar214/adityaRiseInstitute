import React, { useState } from "react";
import axios from 'axios'


const StudentRegistration = () => {
  const [studentID, setStudentID] = useState ("");
  let [count, setCount] = useState(0);
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    email: "",
    dob: "",
    gender: "",
    course: "CCC",
    category: "SC",
    address: "",
    post: "",
    district: "",
    state: "",
    pincode: "",
    mobile: "",
    aadhar: "",
    password: "",
    photo: null,
    signature: null,
  });

  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };




  const handleSubmit = async (e) => {
    e.preventDefault();    
   
    
    try {
      const responce = await axios.post("/api/v1/students/student", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })   
      console.log("responce: ", responce);
      alert("Form submitted successfully!")
    } catch (error) {
      console.log(error);
      alert("")
      
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-5">Student Registration</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data"  >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Full Name</label>
              <input
                type="text"
                name="fullName"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Father Name</label>
              <input
                type="text"
                name="fatherName"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Mother Name</label>
              <input
                type="text"
                name="motherName"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.motherName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">E-mail</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Date of Birth</label>
              <input
                type="date"
                name="dob"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Gender</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    onChange={handleChange}
                  />{" "}
                  Other
                </label>
              </div>
            </div>
            <div>
              <label className="block mb-2">Course</label>
              <select
                name="course"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.course}
                onChange={handleChange}
                required
              >
                 <option value="Select">Select</option>
                <option value="CCC">CCC</option>
                <option value="ADCA">ADCA</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Category</label>
              <select
                name="category"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="Select">Select</option>
                <option value="GENERAL">GENERAL</option>
                <option value="OBC">OBC</option>
                <option value="SC">SC</option>
                <option value="ST">ST</option>
              </select>
            </div>
            <div>
              <label className="block mb-2">Address</label>
              <input
                type="text"
                name="address"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Post</label>
              <input
                type="text"
                name="post"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.post}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">District</label>
              <input
                type="text"
                name="district"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.district}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">State</label>
              <input
                type="text"
                name="state"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Pincode</label>
              <input
                type="text"
                name="pincode"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Mobile No.</label>
              <input
                type="text"
                name="mobile"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Aadhar No.</label>
              <input
                type="text"
                name="aadhar"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.aadhar}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Password</label>
              <div className="flex items-center">
                
                <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={formData.password}
                onChange={handleChange}
                required
                />
                <button 
                onClick={togglePasswordVisibility}
                >
                  {
                    showPassword?(<span>🙈</span>):(<span>👁️</span>)
                  }
                </button>

              </div>
              
            </div>
            <div>
              <label className="block mb-2">Upload Photo</label>
              <input
                type="file"
                name="photo"
                className="w-full p-2 border rounded-md"
                onChange={handleFileChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2">Upload Signature</label>
              <input
                type="file"
                name="signature"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                onChange={handleFileChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
