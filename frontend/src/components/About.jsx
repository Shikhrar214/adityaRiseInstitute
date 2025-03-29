/** @format */

import React from "react";
import {
  AbhayPandey,
  AvneeshPandey,
  GarimaPandey,
  PriyankJaiswal,
  RavinderVerma,
  SatyamSrivastav,
  VinodKumar,
  ChairmanImg,
} from "../assets/images";

function About() {
  const facultyMembers = [
    {
      name: "Avneesh Pandey",
      image: AvneeshPandey,
      role: "Manager",
      description:
        "Hello, I’m Avneesh Pandey, and I bring over 6 years of experience in IT and management to my role as a Manager at this institute. My expertise lies in technology-driven solutions and organizational leadership, which allows me to streamline operations, implement innovative strategies, and foster collaboration across teams. I’m dedicated to ensuring the seamless execution of projects and maximizing the effective use of IT resources to drive excellence across departments. My commitment to innovation and team development is what I believe sets me apart, and I take pride in contributing to the growth and success of this institute.",
    },
    {
      name: "Garima Pandey",
      image: GarimaPandey,
      role: "Director",
      description:
        "Hello, I’m Garima Pandey, the Director of this institute. With 4 years of expertise in Tally and GST, I specialize in streamlining financial operations and ensuring compliance with the latest tax regulations. My role involves overseeing the institute’s strategic direction while maintaining a strong focus on efficient financial management. I am passionate about creating a structured and transparent environment that fosters growth and success. By integrating my knowledge of Tally and GST into our processes, I ensure accuracy, accountability, and continuous improvement. It’s my privilege to lead this institute toward excellence and innovation in every aspect of our work.",
    },
    {
      name: "Ravindra Verma",
      image: RavinderVerma,
      role: "Faculty Member",
      description:
        "Hello, I’m Ravindra Verma, a committed Faculty Member at this institute. I take pride in mentoring students and helping them achieve their academic and professional aspirations. My approach focuses on creating a dynamic and engaging learning environment where students can gain practical knowledge and develop essential skills for their future careers. I strive to inspire curiosity, critical thinking, and a passion for lifelong learning. Being a part of this institute allows me to contribute to shaping the future of our students and guiding them toward success with dedication and care",
    },
    {
      name: "Abhay Pandey",
      image: AbhayPandey,
      role: "Faculty Member",
      description:
        "Hello, I’m Abhay Pandey, a proud Faculty Member at this institute with a strong academic background in IT, holding a BCA and MCA. As an IT expert, I am passionate about sharing my knowledge and guiding students in understanding the dynamic world of technology. My focus is on creating an engaging and practical learning environment that empowers students to develop their skills and achieve their goals. I strive to inspire curiosity, encourage innovation, and ensure that our learners are equipped with the tools they need to excel in the ever-evolving field of IT. It’s an honor to contribute to their growth and success.",
    },
    {
      name: "Vinod Kumar",
      image: VinodKumar,
      role: "Faculty Member",
      description:
        "Hello, I’m Vinod Kumar, a dedicated Faculty Member at this institute. My passion lies in educating and inspiring students to achieve their fullest potential. I believe in fostering a supportive and engaging learning environment where students can explore their interests and gain valuable skills. With a commitment to academic excellence and practical knowledge, I strive to guide students on their journey toward success. It’s a privilege to be part of this institute, contributing to shaping the future of our learners and helping them build strong foundations for their careers.",
    },
    {
      name: "Priyank Jaiswal",
      image: PriyankJaiswal,
      role: "Faculty Member",
      description:
        "Hello, I’m Priyank Jaiswal, a dedicated Faculty Member at this institute. I am passionate about guiding students and helping them unlock their true potential through effective teaching and mentorship. My focus is on creating an interactive and practical learning environment where students can develop the knowledge and skills needed to succeed in their chosen fields. I believe in fostering curiosity, encouraging innovation, and supporting students as they work toward achieving their academic and professional goals. It’s an honor to contribute to their growth and be a part of this institute’s mission to deliver excellence in education.",
    },
    {
      name: "Satyam Srivastav",
      image: SatyamSrivastav,
      role: "Faculty Member",
      description:
        "Hello, I’m  Satyam Srivastav, a dedicated Faculty Member at this institute. My goal is to provide students with a learning experience that is both insightful and inspiring. I focus on creating a supportive and engaging environment where students can build their skills, expand their knowledge, and prepare for successful careers. I am committed to fostering a culture of curiosity, innovation, and excellence in education. It is a privilege to contribute to the growth and success of our students and be a part of this institute's journey toward academic and professional excellence.",
    },
  ];

  return (
    <>
      <h1 className="bg-slate-950 text-gray-300 text-center p-4 px-6 md:px-48 m-5 rounded-full text-3xl md:text-4xl font-bold">
        About Us
      </h1>

      <div className="my-4 p-6 mx-5 sm:m-8 sm:p-8 bg-gray-800 text-white flex items-center justify-center rounded-2xl">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-6xl w-full text-center md:text-left">
        {/* Poster Image */}
        <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 bg-orange-500 rounded-xl flex items-center justify-center relative overflow-hidden shadow-md border-4 border-orange-300">
          <img
            className="w-full h-full object-cover rounded-xl"
            src={ChairmanImg}
            alt="Chairman"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 max-w-2xl px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400">
            Chairman Of Aditya Rise Computer Institute
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            As the Chairman of Aditya Rise Computer Institute, I'm proud to lead an institution
            dedicated to empowering students with the knowledge and skills needed to succeed in
            the digital age. With a career spanning several decades, I've had the privilege of
            mentoring and guiding thousands of students, and I'm committed to continuing this
            legacy. My mission is to make quality computer education accessible to all, fostering
            creativity, critical thinking, and problem-solving skills. I look forward to shaping
            the next generation of leaders and innovators.
          </p>
          <span className="text-base sm:text-lg font-semibold text-orange-300">
            Aditya Pandey
          </span>
        </div>
      </div>
    </div>

      {/*  */}

      <div className="bg-orange-100 mx-5 rounded-2xl p-4 md:p-6 ">
        {facultyMembers.map((member, index) => (
          <div
            key={index}
            className="p-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8"
          >
            <div className="w-40 h-40 md:w-64 md:h-64 border border-orange-800 rounded-2xl flex-shrink-0">
              <img
                src={member.image}
                alt={`${member.name} Image`}
                className="w-full h-full object-contain bg-gray-200 rounded-2xl"
              />
            </div>
            <div className="text-center md:text-left w-full md:w-3/5">
              <h2 className="font-semibold text-lg md:text-xl">
                {member.name}
              </h2>
              <p className="text-gray-700 text-sm md:text-base">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>  
    </>
  );
}

export default About;
