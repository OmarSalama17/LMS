import { useContext } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
export default function Register() {
    const {isDarkMode}=useContext(ThemeContext)
  return (
<>
  <div className="grid lg:grid-cols-2 xl:grid-cols-2 ">
    <div className="bg-[#2196f3] relative">
      <div className={`${isDarkMode ? "absolute h-[100%] w-[100%] bg-[#1c19199e]" : ""}`}></div>
      <div className="px-[20px] text-center flex flex-col items-center justify-center">
        <h2 className="font-bold my-[33px] tracking-tighter">We Have A Discount</h2>
        <p className="my-[18px]">
          dolor sit amet consectetur, adipisicing elit.
          Excepturi asperiores consectetur, recusandae ratione provident
          necessitatibus, cumque delectus commodi fuga praesentium beatae.
          Totam vel similique laborum dicta aperiam odit doloribus corporis.
        </p>
        <img
          className="max-w-[100%] w-[300px]"
          src="https://elzerowebschool.github.io/HTML_And_CSS_Template_Three/imgs/discount.png"
          alt=""
        />
      </div>
    </div>
    <div className={`${isDarkMode ? "dark color" : "bg-gray-100"} flex flex-1 items-center justify-center pb-[50px] basis-1/2`}>
      <div className="px-[20px]">
        <h2 className="font-bold my-[33px] tracking-tighter">Register</h2>
        <form action="">
          <input type="text" placeholder="Your Name" className="w-full mb-6 p-4 border border-black bg-gray-100" />
          <input type="email" placeholder="email@example.com" className="w-full mb-6 p-4 border border-black bg-gray-100" />
          <input type="password" placeholder="Password" className="w-full mb-6 p-4 border border-black bg-gray-100" />
          <textarea name="" id="" placeholder="Tell Us About Your Needs" className="w-full mb-6 p-4 border border-black bg-gray-100 h-[200px]"></textarea>
          <input type="submit" className="w-full p-4 bg-[#2196f3] text-white font-bold text-lg border-0 cursor-pointer" />
        </form>
      </div>
    </div>
  </div>
</>

  );
}
