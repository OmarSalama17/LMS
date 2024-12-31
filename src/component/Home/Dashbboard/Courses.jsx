import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";

export default function Courses({OpenSidebar}) {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://omarsalama25x25.github.io/api/api.json")
            .then((response) => response.json())
            .then((data) => {
                const selectedIndexes = role === "admin" ? [0,1,2,3,4,5,6,7,8,9,10, 11, 12, 13, 14,15, 16,17,18, 19, 20,21] :role === "instructor" ? [0,1,2,3,4]:[ 11, 12, 13, 14, 16, 19, 20] ;
                const selectedData = selectedIndexes.map((index) => data.products[index]).filter(Boolean);
                setProducts(selectedData);
            })
            .catch((error) => console.error("Error fetching data:", error));
    }, []);
    const { isDarkMode ,role} = useContext(ThemeContext);
    return (
        <div className={` flex-1  p-5 text-gray-700 font-sans`}>
                    <div className='container'> 
                <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
                </div>
            <div>
                <h1 className="text-[#263043] font-black text-[25px] mt-0.25rem ml-8">Courses</h1>
            </div>
            <div className="w-full h-[93px] mt-[25px] pl-[34px] pt-[10px] rounded-t-[21px]">
                <h3 className={`${isDarkMode ? "color" : ""} text-[26px] text-[#00030e] font-bold`}>Course List</h3>
                <p className="text-[#a8abab] font-semibold text-[15px]"> 
                    Total courses
                    <span className="text-[#263043] ml-[14px] text-[17px] font-extrabold">{role === "admin" ? products.length : products.length }</span>
                </p>        
            </div>  
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-[#919495] text-[15px] font-semibold mt-6">
                {products.map((product, index) => (
                    <div key={index} className={`${isDarkMode ? "dark color " : "bg-white"} rounded-lg shadow-lg p-6 flex flex-col items-center justify-between space-y-4`}>
                        <div className="flex flex-col items-center">
                            <img
                                className=" object-cover rounded-lg mb-4"  
                                src={product.image}
                                alt={product.title}
                            />
                            <p className="  w-[230px] font-bold text-center">{product.title}</p> 
                        </div>
                        <div className="flex flex-col items-center w-full space-y-2">
                            <span className="text-center font-semibold">{product.rating}</span>
                            <span className="text-center font-semibold">{product.Language}</span>
                            <span className="text-center font-semibold">{product.price}</span>
                        </div>
                        <div className="w-full text-center text-[#9b9b9b] font-semibold">
                            <p>{product.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
