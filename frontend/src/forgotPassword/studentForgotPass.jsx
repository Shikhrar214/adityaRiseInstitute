import React from "react";
import { useState } from "react";

function StudentForgotPass() {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Password reset successful!");
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

             {/* email input */}
             <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <input 
              type="text" 
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              
             />
            </div>
            <button className="px-4 py-2 border rounded-md focus:outline-none w-full bg-orange-600 text-white hover:bg-orange-700transition">verify E-mail</button>

            {/* OTP Input */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Enter 6-digit OTP
              </label>
              <input
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* New Password Input */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                New Password
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default StudentForgotPass;
