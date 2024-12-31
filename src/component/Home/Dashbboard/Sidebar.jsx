import React, { useContext } from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
 import { MdLibraryAdd } from "react-icons/md";
 import { FaCircleInfo } from "react-icons/fa6";

import styles from './Dashboard.module.css'; 
 import { FaGraduationCap } from "react-icons/fa";
 import { MdAssignment } from "react-icons/md";
 import { HiMiniUserGroup } from "react-icons/hi2";
import { ThemeContext } from '../ThemeDark/ThemeDark';
function Sidebar({openSidebarToggle, OpenSidebar,OpenDashboard,OpenCourses,OpenAssessment, OpenStudent, OpenDisPlayData , OpenViewAssignments , OpenCourse, open}) {
    const {isDarkMode , role}=useContext(ThemeContext)
    const Dashboard = (open === "dashboard") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const Student = (open === "Student") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const openCourses = (open === "Courses") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const Assessment = (open === "Assessment") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const info = (open === "DisplayData") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const ViewAssignments = (open === "ViewAssignments") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    const AddCourse = (open === "addcourse") 
    ? (isDarkMode ? "!bg-[#393939] rounded-15" : "bg-[#b3b3b3] rounded-15") 
    : "";
    return (
    <aside id={styles.sidebar} className={`${openSidebarToggle ? styles.sidebarResponsive: ""} min-w-[310px]  !bg-[#eee] ${isDarkMode ? "dark color" : "text-black"}`}>
        <div className={styles['sidebar-title']}>
            <div className="mt-[15px] text-[25px] text-center font-bold" >
                Academy
            </div>
            <span className='align-middle leading-[1px] text-[20px] mr-[5px] text-red-500 ml-[30px] mt-[10px] cursor-pointer' onClick={OpenSidebar}>X</span>
        </div>
<div className='sticky top-[100px]'>
        <ul className="p-0 list-none">
            <li className={`${Dashboard}  p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenDashboard}>
                
                <BsGrid1X2Fill className='icon'/> <span>Dashboard</span>
                
            </li>
            {role === "admin" ? 
            <li className={`${Student} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenStudent} >
                
                <HiMiniUserGroup  className='text-[27px]'/><span>Student</span>
            
            </li> : null }
            <li className={`${openCourses} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenCourses}>
                
                <FaGraduationCap  className='text-[27px]'/><span>{role === "admin" ? "Courses" : "My Courses"}</span>
                
            </li>
            {role === "user" ?
            <li className={`${Assessment} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenAssessment}>
                
                <MdAssignment  className='text-[27px]'/><span>Assignments</span>
            </li> : null }
            {role === "admin" ? 
            <li className={`${info} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenDisPlayData}>
                
                <FaCircleInfo className='text-[27px]'/><span>info</span>
            </li> : null }
            {role === "admin" || role === "instructor"? 
            <li className={`${ViewAssignments} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenViewAssignments}>
                
                <MdAssignment  className='text-[27px]'/><span>ViewAssignments</span>
            </li> : null }
            {role === "admin" || role === "instructor"? 
            <li className={`${AddCourse} p-[20px] text-[18px]  hover:rounded-[15px] hover:cursor-pointer`} onClick={OpenCourse}>
                
                <MdLibraryAdd className='text-[27px]'/><span>AddCourse</span>
            </li> : null }

        </ul>
        </div>
    </aside>
  )
}

export default Sidebar