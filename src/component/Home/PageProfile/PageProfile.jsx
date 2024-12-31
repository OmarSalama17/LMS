import { useState,useContext } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import logo from "../../../../img/logoins.png"
import logoUser from "../../../../img/vecteezy_default-male-avatar-profile-icon-social-media-chatting_25337669.jpg"
const PageProfile = () => {
  const logoinstructor=logo
const {isDarkMode , role ,users , loggedInUser,email }=useContext(ThemeContext)

  return (
    <section className="relative pt-40 pb-24">
      <img
        src="https://pagedone.io/asset/uploads/1705473378.png"
        alt="cover-image"
        className="w-full absolute top-0 left-0 z-0 h-60 object-cover"
      />
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex items-center !justify-center sm:justify-start relative z-10 mb-5">
          <img
            src={role === "admin" ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80": role === "user" ? logoUser :logoinstructor}
            alt="user-avatar-image"
            className="border-4 w-[25%] border-solid border-[#DBDBDB] !bg-floralwhite rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col  sm:flex-row max-sm:gap-5 items-center justify-center mb-5">
          <div className="block">
            <h3 className={`${isDarkMode ? "color" : " "} font-manrope font-bold text-4xl text-center text-gray-900 mb-1`}>
              {loggedInUser}
            </h3>
            <p className="font-normal text-center text-base leading-7 text-gray-500">{role === "admin" ? "Los Angeles" : role === "user" ?"San Andreas":"New York"} , California</p>
          </div>
        </div>
        {role === "user" || role === "instructor"?
        <div className="flex !justify-end flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="flex items-center gap-2 font-medium text-lg leading-8 text-gray-400">
              Skills
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.78135 5.55191C9.4453 3.5173 9.77728 2.5 10.3928 2.5C11.0083 2.5 11.3403 3.5173 12.0043 5.55191L12.2949 6.44244C12.4784 7.00479 12.5701 7.28596 12.7928 7.44706C13.0155 7.60816 13.3125 7.60816 13.9063 7.60816H14.8683C17.0355 7.60816 18.119 7.60816 18.3081 8.19335C18.4972 8.77854 17.6169 9.40763 15.8563 10.6658L15.0921 11.2118C14.6069 11.5586 14.3643 11.732 14.278 11.9937C14.1918 12.2554 14.2841 12.5382 14.4687 13.1038L14.7569 13.9872C15.4209 16.0218 15.7529 17.0391 15.2549 17.3993C14.7569 17.7595 13.8878 17.1308 12.1496 15.8733L11.3887 15.323C10.9083 14.9754 10.6681 14.8016 10.3928 14.8016C10.1175 14.8016 9.87731 14.9754 9.39687 15.323L8.63605 15.8733C6.89779 17.1308 6.02866 17.7595 5.5307 17.3993C5.03273 17.0391 5.36471 16.0218 6.02866 13.9872L6.31927 13.0966C6.50278 12.5343 6.59454 12.2531 6.50948 11.9924C6.42441 11.7318 6.18419 11.558 5.70375 11.2104L4.94293 10.6601C3.20467 9.40261 2.33555 8.77389 2.52575 8.19102C2.71596 7.60816 3.79026 7.60816 5.93886 7.60816H6.87929C7.47315 7.60816 7.77008 7.60816 7.99277 7.44706C8.21547 7.28596 8.30723 7.00479 8.49074 6.44244L8.78135 5.55191Z"
                  stroke="#9CA3AF"
                  strokeWidth="1.6"
                />
              </svg>
            </p>
            <ul className="flex items-center max-sm:justify-center max-sm:flex-wrap gap-2.5">
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">{role==="instructor" ? "Full Stack" : "HTML"}</li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">{role==="instructor" ? "Fultter" : "CSS"}</li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">{role==="instructor" ? "UI UX" : "Dart"}</li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">{role==="instructor" ? "PHP" : "C++"}</li>
              <li className="py-3.5 px-7 rounded-full bg-orange-50 font-semibold text-base leading-7 text-gray-700">{role==="instructor" ? "JAVA" : "UI Design"}</li>
            </ul>
          </div>
        </div> : null}
        {role === "user" || role === "instructor" ? 
        <div className="container flex flex-col">
          <div className="mb-[25px]">
          <label htmlFor="username" className={`mr-[10px] ${isDarkMode ? "color" : ""}`}>UserName</label>
          <input type="text" value={loggedInUser} disabled id="username" className="bg-[#d7d7d7] border border-black border-1px border-solid"/>
          </div>
          <div >
          <label htmlFor="username" className={`mr-[10px] ${isDarkMode ? "color" : ""}`}>Email</label>
          <input type="email" value={email} disabled className="bg-[#d7d7d7] w-[250px] border border-black border-1px border-solid"/>
          </div>
        </div> : null}
        <div className="sm:overflow-x-auto">
            {role === "admin" ?
    <table className="hidden sm:table table-auto w-full border-collapse border border-gray-200 text-sm">
        <thead className="bg-gray-100">
            <tr>
                <th className="p-2 border">userName</th>
                <th className="p-2 border">email</th>
                <th className="p-2 border">password</th>
                <th className="p-2 border">role</th>
            </tr>
        </thead>
        <tbody>
            {users.slice(1, 10).map((e, i) => (
                <tr key={i} className={`hover:bg-gray-50 ${isDarkMode ? "dark color" : ""}`}>
                    <td className="p-2 border">{e.userName}</td>
                    <td className="p-2 border">{e.email}</td>
                    <td className="p-2 border">{e.password}</td>
                    <td className="p-2 border">{e.role}</td>
                </tr>
            ))}
        </tbody>
    </table> : null }
    {role === "admin"?
    <div className="sm:hidden space-y-4">
        {users.slice(1, 10).map((e, i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm">
                <p>
                    <span className="font-bold">UserName:</span> {e.userName}
                </p>
                <p>
                    <span className="font-bold">Email:</span> {e.email}
                </p>
                <p>
                    <span className="font-bold">Password:</span> {e.password}
                </p>
                <p>
                    <span className="font-bold">Role:</span> {e.role}
                </p>
            </div>
        ))}
    </div> : null }
</div>

      </div>
    </section>
  );
};

export default PageProfile;