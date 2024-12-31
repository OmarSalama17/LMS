import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
const logo =[
    {src:"https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg",
        width:"115"
    },
    {src:"https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"},
    {src:"https://s.udemycdn.com/partner-logos/v4/box-light.svg"},
    {src:"https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"},
    {src:"https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"},
]
const col1=[
    {Title:'Home',
    to:"/"
    },
    {Title:"Courses",
    to:"/courses"
    },
    {Title:"Teachers",
    to:"/teachers"
    },
    {Title:"Offers",
    to:"/offers"
    },
    {Title:"Contact Us",
    to:"/contactUs"
    }
]
const col2=[
    {Title:'Facebook',
        icon:<FaFacebookF className="!h-[25px]"/>,
        href:"https://www.facebook.com/"
    },
    {Title:"Twitter",
    icon:<FaTwitter className="!h-[25px]" />,
    href:"https://x.com/?lang=ar"
    },
    {Title:"Instagram",
    icon:<FaInstagram className="!h-[25px]"/>,
    href:"https://www.instagram.com/"
    },
    {Title:"linkedin",
    icon:<FaLinkedinIn className="!h-[25px]"/>,
    href:"https://eg.linkedin.com/"
    },
    {Title:"Github",
    icon:<FaGithub className="!h-[25px]"/>,
    href:"https://github.com/"
    }
]
export default function Footer() {
    return (
        <>
            <div className="bg-[#1c1d1f] text-white">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between py-[12px] items-center">
                        <div className="pt-[12px] pb-[12px] text-center md:text-start">
                            <h2 className="text-[17px] font-bold m-[0px]">
                                Top companies choose <span className="text-[#c0c4fc]">Academy</span> to build in-demand career skills.
                            </h2>
                        </div>
                        <div className="flex flex-wrap justify-center md:justify-end">
                            {
                                logo.map((item, index) => (
                                    <div key={index} className="m-[8px]">
                                        <img className={`w-${item.width}`} src={item.src} alt="logo" />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between py-[12px]">
                        <div className=" text-center md:text-start mb-4 md:mb-0">
                            <ul>
                                {col1.map((item, index) => (
                                    <Link key={index} to = {item.to} className="no-underline text-white">
                                    <li  className="pb-[4px] pt-[4px]">{item.Title}</li>
                                    </Link>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-start mb-4 md:mb-0">
                            <ul>
                                {col2.map((item, index) => (
                                    <li key={index} className="flex justify-center md:justify-start items-center pb-[4px] pt-[4px] hover:text-[#78ffee]">
                                        <span className="mr-[8px]">{item.icon}</span>
                                        <a href={item.href} target="blank" className="no-underline text-white ">
                                            {item.Title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-start">
                            <ul>
                                <li className="pb-[20px]">Contact Us</li>
                                <li>
                                    <div>
                                        <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">Email Address</label>
                                        <div className="relative flex items-center mt-2">
                                            <span className="absolute">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-400 dark:text-gray-500">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                                </svg>
                                            </span>
                                            <input type="email" id="email" placeholder="john@example.com" className="block w-full py-2.5 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring focus:ring-blue-300 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600" />
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center pt-[32px] pb-[32px]">
                        <div className="mb-4 md:mb-0">
                            <img className="w-[100px]" src="../../img/logo-colored.D50IsVGx.svg" alt="logo" />
                        </div>
                        <div className="text-[12px]">
                            © 2024 Academy, Inc.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
