import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Home/ThemeDark/ThemeDark";
import { Link } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import { LiaStarSolid } from "react-icons/lia";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
const PageTeacher = ({ teacher }) => {
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

  const [courses, setCourses] = useState([]);
const {isDarkMode}=useContext(ThemeContext)
  useEffect(() => {
    fetch("https://omarsalama25x25.github.io/api/api.json")
      .then((response) => response.json())
      .then((data) => {
        const { products } = data;
        if (Array.isArray(products)) {
          setCourses(products);
        } else {
          console.error("Products data is not in expected format");
        }
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const teacherCourses = courses.filter(course => course.teacher === teacher);

  return (
    <div className="container">
      <h2 className="py-[30px]">Courses by {teacher}</h2>
      <div className="gap-y-10 gap-x-6 mb-[30px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {teacherCourses.slice(0, 12).map((product) => (
            <div className="rounded " key={product.id}>
              <Link className="no-underline text-black" to={`/courses/${product.id}`}>
              <div>
                <div>
                  <img
                    className="w-full h-53 object-cover rounded hover:scale-110 transition-transform duration-300"
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
                    <div className="flex item-center ">
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
  );
};

export default PageTeacher;
