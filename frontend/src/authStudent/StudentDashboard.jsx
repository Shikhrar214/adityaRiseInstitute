import axios from "axios";
import React from "react";
import { NavLink, Outlet } from "react-router";
import { useNavigate } from "react-router";
function StudentDashboard() {

  const navigate = useNavigate();
  const logOut = async() => {
    await axios.post("/api/v1/students/studentlogout")
    .then((responce)=>{
      if (!responce) {
        return alert("something went wrong")
      }
      alert("logged out")
      navigate("/")
    })
    .catch(Error => navigate("/"))
  };

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="bg-gray-200 text-2xl w-full md:w-1/4 lg:w-1/6 h-auto md:h-screen border-r px-5 py-4 md:sticky top-0">
          <div>
            <ul className="flex md:flex-col justify-around md:justify-start">
              <li className="py-3 md:py-6">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 hover:text-orange-700`
                  }
                >
                  🏚️
                </NavLink>
              </li>
              <li className="py-3 md:py-6">
                <NavLink
                  to="purchases"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 hover:text-orange-700`
                  }
                >
                  🛒
                </NavLink>
              </li>

              <li className="py-3 md:py-6">
                <NavLink
                  to="examForm"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 hover:text-orange-700`
                  }
                >
                  🧑🏻
                </NavLink>
              </li>
              <li className="py-3 md:py-6">
                <NavLink
                  to="download"
                  className={({ isActive }) =>
                    `block py-2 px-3 duration-200 border-b ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } hover:bg-gray-50 hover:text-orange-700`
                  }
                >
                  ⬇️
                </NavLink>
              </li>

              <li className="py-3 md:py-6 mt-auto">
                <button
                  onClick={logOut}
                  className="block w-full text-left py-2 px-3 border-b text-gray-700 hover:bg-gray-50 hover:text-orange-700"
                >
                  👤➡️
                </button>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-orange-200 p-6 min-h-screen">
          <h1 className="text-center text-3xl md:text-4xl">Student Dashboard</h1>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default StudentDashboard;
