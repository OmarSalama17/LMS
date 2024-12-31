import { useState, useEffect, useContext } from "react";
import CoursesSm from "../courses-sm/Courses-sm";
import Landing from "../Landing/Landing";
import Style from "./Cour.module.css";
import Features from "../Features/Features";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import { LiaStarSolid } from "react-icons/lia";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi";
import { Link } from "react-router-dom";
import News from "../News/News"
import Register from "../Register/Register";
export default function HomePage() {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); 
        const hasHalfStar = rating % 1 !== 0; 
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      
        return (
          <>
            {Array(fullStars)
              .fill(0)
              .map((_, index) => (
                <LiaStarSolid key={`full-${index}`} />
              ))}
            {hasHalfStar && <IoStarHalfOutline key="half-star" />}
            {Array(emptyStars)
              .fill(0)
              .map((_, index) => (
                <IoIosStarOutline key={`empty-${index}`} />
              ))}
          </>
        );
      };
    const [products, setProducts] = useState([]);
const {isDarkMode}=useContext(ThemeContext)
    useEffect(() => {
    fetch("https://omarsalama25x25.github.io/api/api.json")
        .then((response) => response.json())
        .then((data) => {
            console.log("Fetched data:", data);
            setProducts(data.products);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
    return(
        <>
        <Landing/>
        <CoursesSm/>
        <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.slice(8,11).map((product) => (
            <div className="rounded mt-[50px]" key={product.id}>
                <Link className="no-underline text-black" to={`/courses/${product.id}`}>
            <div className={Style.Course}>
                <div className={`${Style.image} overflow-hidden rounded`}>
                <img
                    className="w-full h-53 object-cover rounded hover:scale-110 transition-transform duration-300 hover:rotate-2"
                    src={product.image}
                    alt={product.title}
                />
                </div>
                <div className="flex flex-col justify-between  border-b border-[#dfdfdf]">
                <div className="">
                <h3 className={`${isDarkMode ? "color": " " } text-lg font-semibold mt-2`}>
                {product.title}
                    </h3>
                    
                    <span className="flex text-red">
                    <span className="flex text-red items-center " style={{color:"#ff7000"}}>
                        <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } mr-[3px]  text-[14px]`}
                        >{product.rating}
                        </span>
                        {renderStars(product.rating)}
                        </span>  <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } text-[13px] text-[#777]  ml-[3px]`}>
                        ({product.numrating})
                        </span>
                        </span>
                    <div className="mt-auto">
                    <p className={`${isDarkMode ? "color": " " } text-gray-600`}>{product.teacher}</p>
                    </div>
                </div>
                <div className="flex justify-between ">
                    <div>
                    <p className={`${isDarkMode ? "color": " " } font-bold text-xl`}>${product.price}</p>
                    </div>
                    <div className="flex item-center">
                    <div>
                        <HiAcademicCap className={`${isDarkMode ? "color": " " }`}/>
                    </div>
                    <p className={`${isDarkMode ? "color": " " } text-sm font-semibold`}>
                        ({product.student})
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </Link>
            </div>
        ))}
    </div>
    </div>
    <div className={`${isDarkMode ? "dark color" : "bg-gray-100"}`}>
        <div className="container">
    <h3 className="text-[65px] pt-[30px] mt-[50px] mb-[30px] w-[50%] ">Academy LMS features</h3>
        <Features />
        </div>
    </div>
    <div className={`${isDarkMode ? "dark color" : "bg-gray-100"} flex justify-between lg:flex-row flex-col py-[50px] my-[50px]`}>
        <div>
        <img className="w-[95%]" src="../../../../img/freepik_br_f0aa722f-ab47-4af6-b051-e66111a1ec9a.png" alt="" />
        </div>
        <div className="lg:w-[80%] p-[25px]">
            <div>
                <h2 className="mb-[30px]">Earn valuable certifications</h2>
                <div>
                <p className="mb-[20px]">Earn credentials that show employers what you can do. Our platform offers certification exams at different skill levels, and you’ll see your results right away. These 
                    industry-recognized certificates help you stand out and get ahead in your career.</p>
                    <p className="mb-[18px] font-bold">Each of our certificate courses includes the exam.</p>
                    <p>When you enroll in one of our certificate courses, you’ll receive all the materials and guidance you need to pass.</p>
                    <p className="mb-[35px]"><span className="font-bold">Note:</span> You have 3 attempts to pass each exam.</p>
                    </div>
                    <Link to="/courses" className="text-white font-bold no-underline bg-[#04aa6d] px-[18px] py-[12px]">Explore certificate courses</Link>
            </div>
        </div>
    </div>
    <Register/>
    <News/>
        </>
    )
}