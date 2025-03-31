import React, { useState, useEffect } from "react";
import axios from "axios";
function AllCourses() {


    const [data, setData] = useState([])
    const [totalCourse, setTotalCourse] = useState(0);
    
    const responce = async () => {
        try {
          const res = await axios.get("/api/v1/courses/courses")
          console.log(res);
          if (!res) {
            console.log("data not found", data);
          }
          setTotalCourse(res.data.courses.length)
          setData(res.data?.courses)
          console.log("acd == ==",res.data.courses);
          
        } catch (error) {
          console.log(error);
          console.log(data);            
        }
    }

    useEffect(()=>{
       responce()
    },[])

    const SimpleLoading = () => {
      return(
          <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
      );
    };

    if (totalCourse === 0) {
        return<>
          <div className="flex items-center justify-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
        </div>
        </>
    }

  return (
    <>
      <div className="w-full">
        <h1 className="text-orange-800 text-4xl bg-slate-800 text-center p-8">
          Course Status
        </h1>
        <div>
          <div className="sm:block md:block lg:flex lg:flex-wrap  w-full bg-slate-600">
            {data.map((data) => (
              <div
                key={data._id}
                className="w-96 h-full bg-slate-700 m-8 rounded-2xl p-4  mx-auto "
              >
                <div className="text-center text-pretty text-orange-400 font-extrabold text-7xl first-letter:hover:text-orange-950 cursor-pointer bg-orange-100 rounded-t-2xl">
                  {data.thumbnail}
                </div>
                <div className="text-gray-300 text-2xl">
                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      discription:{" "}
                    </span>
                    {data.discription}
                  </div>

                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      Start Date:{" "}
                    </span>
                    {data.lastDate}
                  </div>
                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      next Batch Date:{" "}
                    </span>
                    {data.nextBatchDate || ""}
                  </div>

                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      tutor:{" "}
                    </span>
                    {data.tutor}
                  </div>
                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      price:{" "}
                    </span>
                    {data.price}
                  </div>
                  <div>
                    <span className="font-thin font-serif text-orange-500 ">
                      discountedPrice:{" "}
                    </span>
                    {data.discountedPrice}
                  </div>
                  <div className="text-red-800">
                    <span className="font-thin font-serif text-orange-500 ">
                      message:{" "}
                    </span>
                    {data.message}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourses;
