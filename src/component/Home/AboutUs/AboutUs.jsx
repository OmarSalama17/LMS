import { Description } from "@headlessui/react";

export default function AboutUs() {
    const dataOne=[
        {
            img:"https://www.talentlms.com/wp-content/uploads/2023/04/keep-it-real.gif",
            title:"Embracing Simplicity",
            Description:"We believe learning should be simple, not overwhelming. By prioritizing simplicity in everything we do, we ensure that each learner has a seamless and effective experience. When training becomes easy and intuitive, we know we’ve succeeded."
        },
        {
            img:"https://www.talentlms.com/wp-content/uploads/2020/10/Automate-Frequent-Administrative-Processes.gif",
            title:"Helping Hands at the Ready",
            Description:"Innovation is at the heart of what we do. We keep up with the latest trends to bring you the best learning experiences. We are always here to support you, ready to assist with your educational needs whenever they arise."
        },
        {
            img:"https://www.talentlms.com/wp-content/uploads/2020/10/03_v1.gif",
            title:"Learning Never Ends",
            Description:"There’s no shortcut to mastering new skills, and we embrace that journey wholeheartedly. What we don’t know, we’re eager to learn—from our students, colleagues, and the world around us."
        },
    ]
    const dataTwo=[
        {
            img:"https://www.talentlms.com/wp-content/uploads/2020/10/Prize-simplicity.gif",
            title:"Staying Authentic",
            Description:"At US Academy, we are committed to providing a transparent and honest learning experience. Everything we do is built on trust, and we’re here to support you on your educational journey. We are always ready to help, because being genuine is at the heart of our teaching philosophy."
        },
        {
            img:"https://www.talentlms.com/wp-content/uploads/2023/04/Help-Others.gif",
            title:"Providing Solutions",
            Description:"Learning can present challenges, but at US Academy, solutions are always within reach. We’re dedicated to helping you overcome obstacles in your studies, ensuring that every challenge is met with the right resources, guidance, and support to help you grow."
        },
        {
            img:"https://www.talentlms.com/wp-content/uploads/2020/10/Enjoy-Simple-Course-Creation.gif",
            title:"Exceeding Expectations",
            Description:"We believe in going beyond the standard. Whether we’re designing engaging courses, offering support, or providing educational tools, we put in the effort to deliver the best learning experience possible. At US Academy, we aim to make your educational journey not only effective but exceptional."
        },
    ]
  return (
    <>
      <div className=" my-[50px] ">
        <div className="flex before shadow-15">
          <div className="container flex z-10 items-center col-4">
            <h1 className="text-[#009ca6]">About Us</h1>
          </div>
          <div>
            <video autoPlay muted loop>
              <source
                src="https://www.civica.com/globalassets/videos/about-us-video-banner-19042022.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="container my-[100px]">
          <div className="flex flex-col items-center">
            <p className="w-[67%] mb-[25px]">
            Hi, we’re  Academy, and we’re here to unlock your potential through quality education and impactful learning experiences.
            At  Academy, we believe that knowledge is the key to success, and we’re dedicated to providing accessible and engaging courses for everyone. Our platform is designed to support learners in building valuable skills for personal and professional growth.
            </p>
            <p className="w-[67%] mb-[25px]">
            Whether you’re a student starting your educational journey or a professional seeking to upskill, we’re here to guide you every step of the way.
            Our mission is to create a supportive learning environment where everyone feels empowered to achieve their goals. We combine expert instruction with user-friendly technology to ensure you get the best educational experience possible.
            </p>
            <p className="w-[67%] mb-[25px]">
            With a growing community of students, passionate instructors, and diverse course offerings, we’re building a brighter future for learners everywhere.
            Join  Academy today, and let’s start shaping your success story together.
            </p>
        </div>
        <div className="container">
            <h1 className="my-[50px]"><span className="border-bm">Our</span> Journey in Numbers</h1>
        </div>
        <div className="container relative block-radius mx-auto p-4 mt-[50px]  bg-white rounded-lg shadow-lg overflow-hidden">
            <div>
                <div className="block-box">
                    <div >
                    <ul className="flex pl-[0px] column-gap text-center items-center">
                        <li  className="flex items-center flex-col">
                        <img src="https://images.www.talentlms.com/wp-content/uploads/2023/09/Group-247.png" alt="" className="w-[30px] h-[45px]" loading="lazy"/>
                        <span className="mt-[32px] text-[32px]  font-bold mb-[13px]">2024</span>
                        <p>Academy launch</p>
                        </li>
                        <li className="flex items-center flex-col">
                        <img src="https://images.www.talentlms.com/wp-content/uploads/2023/09/Group-248.png" alt="" className="w-[30px] h-[45px]" loading="lazy"/>
                        <span className="mt-[32px] text-[32px] font-bold mb-[13px]">5</span>
                        <p>instructors shaping the future of education</p>
                        </li>
                        <li className="flex items-center flex-col">
                        <img src="https://images.www.talentlms.com/wp-content/uploads/2023/09/Group-237.png" alt="" className="w-[30px] h-[45px]" loading="lazy"/>
                        <span className="mt-[32px] text-[32px] font-bold mb-[13px]">258</span>
                        <p>students enrolled in our courses</p>
                        </li>
                        <li className="flex items-center flex-col">
                        <img src="https://images.www.talentlms.com/wp-content/uploads/2023/09/Group-246.png" alt="" className="w-[30px] h-[45px]" loading="lazy"/>
                        <span className="mt-[32px] text-[32px] font-bold mb-[13px]">20</span>
                        <p>courses available to enhance your skills</p>
                        </li>
                    </ul>
                    </div>
                </div>
                    <img className="absolute top-0 right-0 h-full max-h-[464px] object-contain  " src="../../../../img/aboutus.png" alt="" />
            </div>
        </div>
        </div>
    <div className="container">
            <h1 className="my-[50px]"><span className="border-bm">Our</span> Commitment</h1>
    </div>
        <div className="flex container mb-[50px] justify-between">
                
                <div className="w-[45%] mt-[90px] br-37 overflow-hidden h-full rounded-md ">
                    <img src="../../../../img/news 4.jpg" alt="" className="w-full rounded-md"/>
                </div>
                <div className="flex col-6 flex-col">
                        {
                            dataOne.map((e,i) =>{
                                return(
                                    
                            <div key={i}  className="flex mb-[50px] items-center">
                                    <div className="w-[65%] h-[50%] flex justify-center items-center ">
                                    <img src={e.img} alt="" />
                                </div>
                                <div>
                                <h1 className="text-[19px] font-bold mb-[15px]">{e.title}</h1>
                                <p>
                                    {e.Description}
                                </p>
                                </div>
                            </div>
                                
                                )
                            })
                        }
                </div>
            </div>

            <div className="flex container mb-[50px] flex-row-reverse justify-between">
                
                <div className="w-[45%] mt-[100px] h-full br-37 overflow-hidden rounded-md ">
                    <img src="/img/news%201.jpg" alt="" className="w-full rounded-md"/>
                </div>
                <div className="flex col-6 flex-col">
                {
                            dataTwo.map((e,i) =>{
                                return(
                                    
                            <div key={i}  className="flex mb-[50px] items-center">
                                    <div className="w-[65%] h-[50%] flex justify-center items-center ">
                                    <img src={e.img} alt="" />
                                </div>
                                <div>
                                <h1 className="text-[19px] font-bold mb-[15px]">{e.title}</h1>
                                <p>
                                    {e.Description}
                                </p>
                                </div>
                            </div>
                                
                                )
                            })
                        }
                </div>
            </div>

        <div className="container flex flex-col lg:flex-row xl:flex-row ">
                <picture className="h-[455px] h-[100%] rounded-md">
                    <source  src="https://www.civica.com/globalassets/photography-on-brand/annual-review/2021/animations/annual-review-2021-main-hero-gif.gif" media="(min-width: 992px)"/>
                    <img className="w-full h-full rounded-md" src="https://www.civica.com/globalassets/photography-on-brand/annual-review/2021/animations/annual-review-2021-main-hero-gif.gif"/>
                </picture>
                <div className="p-[50px]">
                    <h1>
                    <span className="border-bm">Academy</span> <p className="mt-[15px]">Annual Review 2024</p>
                    </h1>
                    <p className="mt-[30px] mb-[50px]">
                    Hear how Civica has supported the public sector in 
                    2024 and what trends we see in each of our key sectors
                    </p>
                    <span className="py-[20px] px-[40px] bg-[#009ca6] text-white font-bold text-[18px] more">Find out more</span>
            </div>
        </div>
      </div>
    </>
  );
}
