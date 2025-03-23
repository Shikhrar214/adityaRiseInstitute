import React from "react";
import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router";

function OwnerLoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitFormData = await axios.post("/api/v1/owner/login", formData, {
        withCredentials: true,
      });
      if (!submitFormData) {
        return (
          <>
            <div>
              <h1>some error occerd!</h1>
            </div>
          </>
        );
      }
      alert("login successfully!");
      // redirect("/ownerdashboard")
      navigate("/ownerdashboard");
    } catch (error) {
      console.log("err ===>", error);
    }
  };

  const resetPass = () => {
    navigate("/owner-reset-pass")
  }

  return (
    <>
      <div className="my-32 flex items-center">
        <div className="mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1 className="text-center text-white">Admin Login</h1>

          <form onSubmit={handleSubmit} className="text-orange-600">
            <div>
              <label htmlFor="" className="block text-white mb-1">
                email{" "}
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label htmlFor="" className="block text-white mb-1">
                password{" "}
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div></div>
            <button
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 my-8"
              type="submit"
            >
              Login
            </button>
            <span className="hover:cursor-help">Forgot Password?<span onClick={resetPass} className="px-7 hover:cursor-pointer font">Click</span></span>
          </form>
        </div>
      </div>
    </>
  );
}

export default OwnerLoginPage;
