import React from 'react'
import { Link } from 'react-router'
import { AdityaChaudha, AdityaVerma, AnchalSingh, DikshaVermaOlevel, KajalHuptaCCC, Logo, NaveenKumar, SundramKashyapCCC, SaktiKumarSingh, KishanVerma, Mukesh, ManishKumar, PrachiGupta, HarshitaUpadhyay, KomalChaurasia, KrishnaVermaAdca, LalitaUpadhyay } from '../assets/images'

function Home() {
    return (
        <>
            <div className='flex  w-full '>


                <div className='mx-auto hidden md:block'><img 
                className='h-52 w-52'
                src={Logo} alt="" /></div>


                <div className='mx-auto'>
                    <aside className='mx-auto text-center content-center justify-center'>
                            <div className='my-5'>
                            <h1 className='text-7xl font-extrabold'>Aditya Rise Computer Institute </h1>
                            <p className='text-3xl font-bold'><span className='text-orange-500'>Aditya Rise Computer Institute</span>  established in 2018 by  <span className='text-orange-500'>Mr. Aditya Pandey</span></p>
                            <p ><span className='font-extrabold text-gray-900'>BABHNAN BASTI (UP) </span></p>
                            <p>1000+ students are happy to join our organization</p>
                            </div>
                            <div>
                            <Link 
                            to="/register"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Register Now
                            </Link>

                            
                            </div>
                    </aside>
                    <br />
                </div>
            </div>



            <div className=''>
                <h1 className='bg-slate-900 text-gray-300 text-center px-auto rounded-2xl text-3xl font-bold'>About Organization</h1>

                <p className='text-2xl m-8 px-8'>
                    <span className='text-gray-700 font-bold '>Aditya Rise Institute: A Local Gem of Excellence</span>

                    <br />

                    Established in 2018 by the visionary educator Aditya Pandey, Aditya Rise Computer Institute has been a cornerstone of quality education in the local community for long time. Known for its dedication to nurturing young minds, the institute enjoys a strong reputation among students and parents alike.

                    Aditya Rise Institute’s success lies in its team of committed and knowledgeable faculty members. The teaching staff includes Garima Pandey, Abhay Pandey, Vinod Kumar, Priyank Jaiswal, Ravindra Verma, and Satyam Srivastav—all of whom bring years of expertise and passion for teaching. Their collective effort ensures personalized attention and tailored learning experiences for each student.

                    Over the years, the institute has become synonymous with academic excellence and holistic development. Despite its modest size, it has successfully shaped the futures of countless students, helping them achieve their educational goals and excel in competitive exams.

                    The institute’s approachable environment fosters strong teacher-student relationships, ensuring that each learner feels supported and motivated. Aditya Rise Institute continues to inspire trust and admiration in the community, remaining a preferred choice for education in the area. It stands as a testament to the power of dedication and passion in making a lasting impact on local education.
                </p>
            </div>

            <h1 className='text-2xl font-semibold rounded-lg px-4 bg-orange-600 p-2'>
                Check Reviews
            </h1>


{/* ol
adca
ccc */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-8'>
                    

                    <div className='m-auto'>
                        <div class="">
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={DikshaVermaOlevel} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Diksha Verma </h1>
                        <p>"I am <span className='font-bold '>Diksha Verma</span>, proud to have completed my <span className='font-bold text-orange-600'>O-Level</span> course in computer science. The institute provided excellent support and quality education. The practical sessions and experienced faculty enhanced my skills. I highly recommend this institute to anyone seeking a strong foundation in computer science. It's truly a life-changing experience!"

                        </p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={AdityaChaudha} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Aditya Chaudhary</h1>
                        <p>"Hello! I'm<span className='font-bold '>Aditya Chaudhary</span> , and my journey through the <span className='font-bold text-orange-600'>O-Level</span> course has been incredible. The institute's structured curriculum and real-world project opportunities were exceptional. I gained confidence and technical expertise that will help me in my career. I encourage aspiring students to join this institute and achieve their goals effortlessly."

                    </p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={SaktiKumarSingh} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Sakti Kumar Singh</h1>
                        <p>"I am <span className='font-bold '>Sakti Kumar Singh</span>, a happy student of this institute, where I completed my<span className='font-bold text-orange-600'>O-Level</span>  course in computer science. The faculty is knowledgeable and approachable, ensuring we understand every concept deeply. If you're considering joining, rest assured you’ll get top-notch education and career-focused training here. It's worth it!"</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={KishanVerma} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Kishan Verma</h1>
                        <p>"Hi, I’m <span className='font-bold '>Kishan Verma</span> ! Completing my<span className='font-bold text-orange-600'>O-Level</span>  course here has been an enriching experience. The learning environment is supportive, and the hands-on training sessions are excellent. This institute is perfect for anyone looking to master computer science. I’m proud to have been part of such an amazing learning journey!"</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={AnchalSingh} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Anchal Singh</h1>
                        <p>"Hello, I’m <span className='font-bold '>Anchal Singh</span>, and I recently completed the <span className='font-bold text-orange-600'>O-Level</span> course in computer science. The institute provided the perfect blend of theoretical knowledge and practical skills. The faculty’s dedication ensured my success. I highly recommend this institute to future students; it’s a place where dreams turn into reality."

                        </p>
                    </div>


                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={AdityaVerma} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Aditya Verma</h1>
                        <p>"Hi, I’m <span className='font-bold text-orange-600'>Aditya Verma</span>. My experience here while completing the <span className='font-bold text-orange-600'>O-Level</span> course has been incredible. The institute’s focus on individual attention and skill-building impressed me the most. I’m grateful for the opportunities provided, and I highly recommend this institute to aspiring students who wish to excel in computer science."</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={LalitaUpadhyay} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Lalita Upadhyay</h1>
                        <p>"Hello! My name is <span className='font-bold text-orange-600'>Lalita Upadhyay</span>, and I’ve had an amazing learning experience here while completing the <span className='font-bold text-orange-600'>O-Level</span> course in computer science. The institute ensures a perfect blend of academic and practical knowledge. I encourage all future students to join this institute for a successful and rewarding learning journey."

                        </p>
                    </div>


                    {/* ADCA */}
                    <div>
                    <div className='m-auto'>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={Mukesh} alt="reviewer image" />
                    </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Mukesh</h1>
                        <p>"My name is <span className='font-bold '>Mukesh</span>, and completing my <span className='font-bold text-orange-600'>ADCA</span> course here has been a wonderful experience. The institute not only gave me technical knowledge but also instilled confidence in me. I urge everyone aspiring for a career in computer science to join this institute for its remarkable training."</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={ManishKumar} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Manish Kumar</h1>
                        <p>"I'm <span className='font-bold '>Manish Kumar</span>, and I’ve successfully completed the <span className='font-bold text-orange-600'>ADCA</span> course in computer science. The institute’s teaching methods are exceptional, with a focus on practical applications. I feel confident about my future, thanks to the knowledge I gained here. I highly recommend this institute to anyone seeking quality education."</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={PrachiGupta} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Prachi Gupta</h1>
                        <p>"Hi! I’m <span className='font-bold '>Prachi Gupta</span>. The <span className='font-bold text-orange-600'>ADCA</span> course I pursued here has exceeded my expectations. The well-structured syllabus and skilled faculty helped me excel. I’ve grown personally and professionally during my time here. To all future students: this institute will shape your career beautifully. Don’t miss this opportunity!"</p>
                    </div>


                    

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={HarshitaUpadhyay} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Harshita Upadhyay</h1>
                        <p>"Hello, I’m <span className='font-bold '>Harshita Upadhayay</span>. Completing the <span className='font-bold text-orange-600'>ADCA</span> course in computer science at this institute has been the best decision of my life. The excellent guidance and interactive learning sessions have been instrumental in my success. I recommend this institute to anyone passionate about computer science and career growth."

                        </p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={KrishnaVermaAdca} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Krishna Verma </h1>
                        <p>"I’m <span className='font-bold '>Krishna Verma</span>, and I proudly completed my <span className='font-bold text-orange-600'>ADCA</span> course here. The faculty’s expertise and the institute’s modern facilities made learning enjoyable. I now feel equipped to take on real-world challenges. Future students, don’t hesitate to join this institute; it’s a stepping stone to your bright future."</p>
                    </div>

                    


                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={KomalChaurasia} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Komal Chaurasia</h1>
                        <p>"I’m <span className='font-bold'>Komal Chaurasia</span>, and I recently completed my <span className='font-bold text-orange-600'>CCC</span> course at this esteemed institute. The supportive environment and engaging faculty made my learning journey memorable. If you are looking for a place to enhance your computer science skills, this institute is your best choice. I’m thankful to be part of it."</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={SundramKashyapCCC} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Sundram Kashyap</h1>
                        <p>"Hi, I’m <span className='font-bold '>Sundram Kashyap</span>. Completing the <span className='font-bold text-orange-600'>CCC</span> course here has truly transformed my understanding of computer science. The hands-on training and real-world projects were incredibly helpful. I encourage aspiring students to join this institute for its excellent education and career-oriented guidance. It’s an investment in your future success!"</p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={KajalHuptaCCC} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Kajal Gupta</h1>
                        <p>"Hello, I’m <span className='font-bold'>Kajal Gupta</span>. My <span className='font-bold text-orange-600'>CCC</span> course journey here was both enlightening and rewarding. The faculty’s dedication and state-of-the-art facilities created the perfect learning atmosphere. I’ve developed skills that I’ll carry forward into my career. If you’re considering joining, this institute is an excellent choice for your future."

                        </p>
                    </div>

                    <div className='m-auto'>
                        <div>
                        <img 
                        className="h-52 w-52 rounded-2xl"
                        src={NaveenKumar} alt="reviewer image" />
                        </div>
                        <h1 className='bg-orange-500 rounded-lg my-2 p-2 font-semibold '>Naveen Kumar</h1>
                        <p>"I’m <span className='font-bold'>Naveen Kumar</span> , and I’m thrilled to have completed my <span className='font-bold text-orange-600'>CCC</span> course in computer science at this institute. The well-crafted curriculum and inspiring mentorship prepared me for real-world challenges. I highly recommend this institute to anyone seeking quality education and a supportive environment. It’s been an unforgettable journey!"</p>
                    </div>


                    {/* Aditya verma , Lalita Upadhaya*/}

            </div>
        </>
    )
}

export default Home
