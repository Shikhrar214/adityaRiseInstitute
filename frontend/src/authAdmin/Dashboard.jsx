import axios from "axios";
import React from "react";
import { Outlet, NavLink } from "react-router";
import { useNavigate } from "react-router";

function Dashboard() {

  const navigate = useNavigate();
  const logOut = async() => {
    await axios.post("/api/v1/admins/logout")
    .then(()=> navigate("/"))
    .catch((err)=>navigate("/"))
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
                  to="allAdmin"
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
                    to="post-student-data"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      } hover:bg-gray-50 hover:text-orange-700`
                    }
                  >
                    post data
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
              <li className="py-6 block mb-0 mt-56">
                <NavLink
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 hover:text-orange-700`
                  }
                >
                  <button onClick={logOut}>log out👤➡️👉🏻</button>
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
  );
}

export default Dashboard;
