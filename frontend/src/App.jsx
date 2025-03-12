import { About, AdminRegister, AdminDashboard, Contect, Courses, Gallary, Home, Layout, Register, StudentRegistration, AllAdmin, AllStudents, AdminHome, AddCourse, Login, AdminLogin, StudentLogin, OwnerLoginPage } from './index'
import { createBrowserRouter, RouterProvider } from "react-router";
import OwnerDashboard from './owner/ownerDashboard';
import Admins from './owner/admins';
import Students from './owner/students';
import Dashboard from './authAdmin/Dashboard';
import Course from './authAdmin/Course';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "contect",
          element: <Contect />
        },
        {
          path: "gallary",
          element: <Gallary />
        },
        {
          path: "courses",
          element: <Courses />
        },
        {
          path: "register",
          element: <Register />,
          children: [
            {
              path: "adminRegister",
              element: <AdminRegister />
            },
            {
              path: "",
              element: <StudentRegistration />
            }
          ]
        },
        {
          path: "ownerLogin",
          element: <OwnerLoginPage />
        },
        {
          path: "adminDashboard",
          element: <AdminDashboard />,
          children: [
            {
              path: "",
              element: <AdminHome />
            },
            {
              path: "alladmin",
              element: <AllAdmin />
            },
            {
              path: "allstudent",
              element: <AllStudents />
            },
            {
              path: "course",
              element: <AddCourse />
            }
          ],
        },
        {
          path: "login",
          element: <Login />,
          children: [
            {
              path: "adminlogin",
              element: <AdminLogin />
            },
            {
              path: "",
              element: <StudentLogin />
            }
          ]
        }
      ]
    },
    {
      path: "ownerdashboard",
      element: <OwnerDashboard />,
      children: [
        {
          path: "admins",
          element: <Admins />
        },
        {
          path: "students",
          element: <Students />
        },
        {
          path: "course",
          element: <Courses />
        },
        {
          path: "addRemoveCourse",
          element: <Course />
        },
      ]
    }
  ])
 
  return (
   <>
   <RouterProvider router={router}></RouterProvider>
   </>
  )
}

export default App
