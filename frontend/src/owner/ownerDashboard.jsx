import axios from 'axios'
import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { Outlet } from 'react-router'




function OwnerDashboard() {
  const navigate = useNavigate();



    const logOut = async() => {
        try {
          await axios.post("/api/v1/owner/logout")
          .then(()=>{
            navigate("/")
          })
        } catch (error) {
          navigate("/")
        }
    } 


      return (
        <>
        <div className="flex">


          {/* Sticky Sidebar */}
          <aside className="bg-gray-200 text-3xl w-1/6 h-screen border-r px-5 sticky top-24">
            <div>
              <ul>
                <li className="py-6">
                  <NavLink
                    to=""
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li className="py-6">
                  <NavLink
                    to="admins"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    Admin
                  </NavLink>
                </li>
                <li className="py-6">
                  <NavLink
                    to="students"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    Students
                  </NavLink>
                </li>
                <li className="py-6">
                  <NavLink
                    to="course"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    Courses
                  </NavLink>
                </li>

                <li className="py-6">
                  <NavLink
                    to="addRemoveCourse"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    Add Course
                  </NavLink>
                </li>

                <li className="py-6 block mb-0 mt-56">
                  <NavLink
                    
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    <button onClick={logOut}>
                      
                      log out👤➡️👉🏻
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </aside>
      
          {/* Main Content */}
          <main className="ml-1/6 w-5/6 bg-orange-200 p-6">
            <h1 className="text-center text-4xl">Admin Dashboard</h1>
            <Outlet />
          </main>
        </div>
      </>
    )
}

export default OwnerDashboard



