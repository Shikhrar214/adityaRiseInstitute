import React, { useState } from 'react'
import axios from 'axios'

function Course() {

    const [courseData, setCourseData] = useState({
        thumbnail: "",
        tutor: "",
        price: "",
        discountedPrice: "",
        message: "",
        lastDate: "",
        nextBatchDate: "",
        discription: "",
    })

    const handelSubmit =  async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("/api/v1/courses/course", courseData);
            console.log(res);
            
        } catch (error) {
            console.log("err: ",error.response.data);
            alert("smoething went erong")
            return
        }
        console.log(courseData);
        alert("course added sucessfully!")
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setCourseData({...courseData, [name]: value})
    }
    return (
        <>
            <div className=''>
                <div className='bg-orange-400 p-8 rounded-t-2xl '>
                    <h1>Add New Course</h1>
                </div>
                <div className='bg-slate-600 p-8 '>
                    <form 
                    className=''
                    onSubmit={handelSubmit}>

                        <div className='flex'>
                       <div className='px-8'>
                            <div>
                                    <label className="block mb-1 text-white" >Thumbnail</label>
                                    <input 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    type="text" 
                                    name="thumbnail" 
                                    value={courseData.thumbnail}
                                    onChange={handleChange}
                                    required
                                    />
                                </div>

                                <div>
                                    
                                    <label className="block mb-1 text-white" >Tutor Name</label>
                                    <input 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    type="text" 
                                    name="tutor" 
                                    value={courseData.tutor}
                                    onChange={handleChange}
                                    required
                                    />
                                </div>


                                <div>
                                    <label className="block mb-1 text-white" >Actual Price</label>
                                    <input 
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    type="number" 
                                    name="price" 
                                    value={courseData.price}
                                    onChange={handleChange}
                                    required
                                    />
                                </div>
                        </div>
                                    
                        <div className='px-8'>

                                    <div>
                                        <label className="block  mb-1 text-white" >Discpounted price</label>
                                        <input 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        type="text" 
                                        name="discountedPrice" 
                                        value={courseData.discountedPrice}
                                        onChange={handleChange}

                                        />
                                    </div>

                                    <div>
                                        <label className="block  mb-1 text-white" >Message</label>
                                        <input 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        type="text" 
                                        name="message" 
                                        value={courseData.message}
                                        onChange={handleChange}
                                        placeholder='as Sale for (time)'
                                        />
                                    </div>

                                    <div>
                                        <label className="block  mb-1 text-white" >Last Date</label>
                                        <input 
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        type="Date" 
                                        name="lastDate" 
                                        value={courseData.lastDate}
                                        onChange={handleChange}
                                        required
                                        />
                                    </div>
                        </div>

                        <div className='px-8'>
                            <div>
                                <label className="block  mb-1 text-white" >Next Batch</label>
                                <input 
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                type="Date" 
                                name="nextBatchDate" 
                                value={courseData.nextBatchDate}
                                onChange={handleChange}

                                />
                            </div>


                            <div>
                                <label className="block  mb-1 text-white">Discription</label>
                                <input 
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                type="text" 
                                name="discription" 
                                value={courseData.discription}
                                onChange={handleChange}
                                required
                                />
                            </div>
                        </div>
                        </div>


                        <div className='text-center bg-orange-600 hover:bg-orange-900 rounded-2xl my-4'>
                        <button type='submit'>Post Course</button>
                        </div>
                    </form>
                </div>

                <div>
                    <h1>Total Courses: {}</h1>

                </div>
            </div>
        </>
    )
}

export default Course
