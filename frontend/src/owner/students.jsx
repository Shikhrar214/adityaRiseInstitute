/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";

function Students() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const responce = await axios.get("/api/v1/owner/allStudents");
    console.log(responce.data.allStudents);
    setData(responce.data.allStudents);
    console.log("datattatdhgdfey ========== ", data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <>
        <div>
          <h1>all admin list</h1>

          {/*  */}

          <div>
            <div>
              {data.map((data, index) => (
                <div
                  className="bg-slate-500 p-8 m-4 rounded-2xl flex"
                  key={data._id}
                >
                  {/* img */}
                  <div>
                    <div className="bg-white h-60 w-60 rounded-2xl mx-4">
                      {/* {data.photo} */}
                      <img className="w-full h-full" src={data.photo} alt="" />
                    </div>
                  </div>

                  {/*  */}

                  <div className="w-full text-white  ">
                    <h1 className="text-center text-xl bg-slate-950">
                      {data.fullName}
                    </h1>
                    <div>
                      <table cellPadding={20} className="w-full h-full">
                        <tr>
                          <td className="text-2xl font-bold">ID :</td>
                          <td className="text-2xl font-semibold">{data.ID}</td>
                          <td className="text-2xl font-bold">DOB :</td>
                          <td className="text-2xl font-semibold">
                            {moment(data.dob).format("DD-MM-YYYY")}{" "}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-2xl font-bold">Course :</td>
                          <td className="text-2xl font-semibold">
                            {data.course}
                          </td>

                          <td className="text-2xl font-bold">Category :</td>
                          <td className="text-2xl font-semibold">
                            {data.category}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-2xl font-bold">Aadhar :</td>
                          <td className="text-2xl font-semibold">
                            {data.aadhar}
                          </td>

                          <td className="text-2xl font-bold">Phone :</td>
                          <td className="text-2xl font-semibold">
                            {data.mobile}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-2xl font-bold">Gender :</td>
                          <td className="text-2xl font-semibold">
                            {data.gender}
                          </td>

                          <td className="text-2xl font-bold">Pin Code :</td>
                          <td className="text-2xl font-semibold">
                            {data.pincode}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-2xl font-bold">Father Name: </td>
                          <td className="text-2xl font-semibold">
                            {data.fatherName}
                          </td>

                          <td className="text-2xl font-bold">Mother Name: </td>
                          <td className="text-2xl font-semibold">
                            {data.motherName}
                          </td>
                        </tr>

                        <tr>
                          <td className="text-2xl font-bold">Post: </td>
                          <td className="text-2xl font-semibold">
                            {data.post}
                          </td>

                          <td className="text-2xl font-bold">District: </td>
                          <td className="text-2xl font-semibold">
                            {data.district}
                          </td>
                        </tr>

                        <tr>
                          <td className="text-2xl font-bold">State: </td>
                          <td className="text-2xl font-semibold">
                            {data.state}
                          </td>

                          <td className="text-2xl font-bold">
                            Registration fee
                          </td>
                          <td className="text-2xl font-semibold">{data._v}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Students;
