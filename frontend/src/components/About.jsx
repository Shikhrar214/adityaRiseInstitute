import React from 'react'
import { AbhayPandey, AvneeshPandey, GarimaPandey, PriyankJaiswal, RavinderVerma, SatyamSrivastav, VinodKumar } from '../assets/images'



function About() {
    return (
        <>
        <h1 className='bg-slate-950 text-gray-300 pl-48 m-5 rounded-full text-4xl font-bold'>About Us</h1>

        <div className='bg-orange-50  mx-5  rounded-2xl '>

            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={AvneeshPandey} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8 '>Avneesh Pandey</h1>
                <p className ='px-8'>Hello, I’m Avneesh Pandey, and I bring over 6 years of experience in IT and management to my role as a Manager at this institute. My expertise lies in technology-driven solutions and organizational leadership, which allows me to streamline operations, implement innovative strategies, and foster collaboration across teams. I’m dedicated to ensuring the seamless execution of projects and maximizing the effective use of IT resources to drive excellence across departments. My commitment to innovation and team development is what I believe sets me apart, and I take pride in contributing to the growth and success of this institute.</p>
                </div>
            </div>

            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={GarimaPandey} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8'>Garima Pandey </h1>
                <p className ='px-8'>Hello, I’m Garima Pandey, the Director of this institute. With 4 years of expertise in Tally and GST, I specialize in streamlining financial operations and ensuring compliance with the latest tax regulations. My role involves overseeing the institute’s strategic direction while maintaining a strong focus on efficient financial management. I am passionate about creating a structured and transparent environment that fosters growth and success. By integrating my knowledge of Tally and GST into our processes, I ensure accuracy, accountability, and continuous improvement. It’s my privilege to lead this institute toward excellence and innovation in every aspect of our work.</p>
                </div>
            </div>


            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={AbhayPandey} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8'>Abhay Pandey</h1>
                <p className ='px-8'>Hello, I’m Abhay Pandey, a proud Faculty Member at this institute with a strong academic background in IT, holding a BCA and MCA. As an IT expert, I am passionate about sharing my knowledge and guiding students in understanding the dynamic world of technology. My focus is on creating an engaging and practical learning environment that empowers students to develop their skills and achieve their goals. I strive to inspire curiosity, encourage innovation, and ensure that our learners are equipped with the tools they need to excel in the ever-evolving field of IT. It’s an honor to contribute to their growth and success.</p>
                </div>
            </div>


            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={VinodKumar} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8'>Vinod Kumar </h1>
                <p className ='px-8'>Hello, I’m Vinod Kumar, a dedicated Faculty Member at this institute. My passion lies in educating and inspiring students to achieve their fullest potential. I believe in fostering a supportive and engaging learning environment where students can explore their interests and gain valuable skills. With a commitment to academic excellence and practical knowledge, I strive to guide students on their journey toward success. It’s a privilege to be part of this institute, contributing to shaping the future of our learners and helping them build strong foundations for their careers.</p>
                </div>
            </div>


            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={PriyankJaiswal} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8'>Priyank Jaiswal</h1>
                <p className ='px-8'>Hello, I’m Priyank Jaiswal, a dedicated Faculty Member at this institute. I am passionate about guiding students and helping them unlock their true potential through effective teaching and mentorship. My focus is on creating an interactive and practical learning environment where students can develop the knowledge and skills needed to succeed in their chosen fields. I believe in fostering curiosity, encouraging innovation, and supporting students as they work toward achieving their academic and professional goals. It’s an honor to contribute to their growth and be a part of this institute’s mission to deliver excellence in education.</p>
                </div>
            </div>


            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={RavinderVerma} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8'>Ravindra Verma</h1>
                <p className ='px-8'>Hello, I’m Ravindra Verma, a committed Faculty Member at this institute. I take pride in mentoring students and helping them achieve their academic and professional aspirations. My approach focuses on creating a dynamic and engaging learning environment where students can gain practical knowledge and develop essential skills for their future careers. I strive to inspire curiosity, critical thinking, and a passion for lifelong learning. Being a part of this institute allows me to contribute to shaping the future of our students and guiding them toward success with dedication and care.</p>
                </div>
            </div>


            <div className='p-8 lg:flex '>
                <div 
                className='w-64 h-64 '
                >
                    <img src={SatyamSrivastav} alt="Faculty Image" class="w-full h-full object-contain" />
                    
                </div>
                
                <div className='w-1/2'>
                <h1 className='font-semibold px-8 '>Satyam Srivastav</h1>
                <p className ='px-8' >Hello, I’m , a dedicated Faculty Member at this institute. My goal is to provide students with a learning experience that is both insightful and inspiring. I focus on creating a supportive and engaging environment where students can build their skills, expand their knowledge, and prepare for successful careers. I am committed to fostering a culture of curiosity, innovation, and excellence in education. It is a privilege to contribute to the growth and success of our students and be a part of this institute's journey toward academic and professional excellence.</p>
                </div>
            </div>

            
        </div>
        </>
    )
}

export default About
