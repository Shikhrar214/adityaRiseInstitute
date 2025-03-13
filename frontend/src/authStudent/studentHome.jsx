import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentHome() {
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await axios.get('/api/v1/students/student');
      setData(response.data.student);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen flex flex-col items-center">
      {data ? (
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg overflow-hidden p-6">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img
              className="h-32 w-32 object-cover rounded-full border-2 border-gray-300"
              src={data.photo}
              alt="Student Photo"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">{data.fullName}</h2>
              <p className="text-gray-600">ID: {data.ID}</p>
              <p className="text-gray-600">Course: {data.course}</p>
              <p className="text-gray-600">Email: {data.email}</p>
            </div>
          </div>

          {/* Additional Details */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <p><span className="font-semibold">Father's Name:</span> {data.fatherName}</p>
            <p><span className="font-semibold">Mother's Name:</span> {data.motherName}</p>
            <p><span className="font-semibold">DOB:</span> {new Date(data.dob).toLocaleDateString()}</p>
            <p><span className="font-semibold">Gender:</span> {data.gender}</p>
            <p><span className="font-semibold">Category:</span> {data.category}</p>
            <p><span className="font-semibold">Mobile:</span> {data.mobile}</p>
            <p><span className="font-semibold">Aadhar:</span> {data.aadhar}</p>
            <p><span className="font-semibold">Address:</span> {data.address}, {data.post}, {data.district}, {data.state} - {data.pincode}</p>
          </div>

          {/* Signature */}
          <div className="mt-6 text-center">
            <h3 className="text-lg font-semibold">Signature</h3>
            <img className="h-16 mx-auto mt-2" src={data.signature} alt="Signature" />
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
}

export default StudentHome;
