import React, { useState } from "react";

function PostStudentData() {
    const [formData, setFormData] = useState({
        adminID: "",
        studentID: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === "file" ? files[0] : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("adminID", formData.adminID);
        data.append("studentID", formData.studentID);
        data.append("file", formData.file);
        
        fetch("/api/post-student-data", {
            method: "POST",
            body: data,
        })
        .then((response) => response.json())
        .then((result) => {
            console.log("Success:", result);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div className="w-96 p-6 bg-white shadow-lg rounded-xl mx-auto mt-10">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="adminID"
                    placeholder="Admin ID"
                    value={formData.adminID}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="text"
                    name="studentID"
                    placeholder="Student ID"
                    value={formData.studentID}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}

export default PostStudentData;
