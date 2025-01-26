import React from 'react';
import { Outlet, NavLink } from 'react-router'


function Dashboard() {
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
                    Home
                  </NavLink>
                </li>
                <li className="py-6">
                  <NavLink
                    to="alladmin"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    All Admin
                  </NavLink>
                </li>
                <li className="py-6">
                  <NavLink
                    to="allstudent"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    All Students
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
                    Add Course
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

export default Dashboard
