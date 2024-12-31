import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeDark/ThemeDark';
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";

const StudentDashboard = ({OpenSidebar}) => {
    const {isDarkMode} = useContext(ThemeContext);
    const students = [
        { name: 'Elend Venture', email: 'elendv@gmail.com', date: 'October 26, 2022, 6:12 am', courses: 3, avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Vin M.', email: 'vin@gmail.com', date: 'October 26, 2022, 6:10 am', courses: 2, avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Tessa Grey', email: 'tessagrey@gmail.com', date: 'October 21, 2022, 5:35 am', courses: 1, avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Simon Lewis', email: 'simonlewis@gmail.com', date: 'October 20, 2022, 11:04 am', courses: 2, avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Daniel James', email: 'danieljames@gmail.com', date: 'October 20, 2022, 5:12 am', courses: 8, avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
    ];

    return (
        <div className={`${isDarkMode ? "dark" : ""} flex-1  text-gray-700 font-sans`}>
                    <div className='container'> 
                <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
                </div>
            <div className="w-full xl:p-[15px] p-[0px]  mx-auto my-10 p-8 rounded-lg shadow-lg font-poppins">
                <div className="flex flex-wrap pt-[20px] justify-between items-center mb-8">
                    <div className="flex space-x-3 w-full sm:w-auto">
                        <select className="p-2 border border-gray-300 rounded-lg hover:border-blue-500 text-sm focus:outline-none">
                            <option>Bulk Action</option>
                            <option>Delete</option>
                            <option>Mark as Completed</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                            Apply
                        </button>
                        <button className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none">
                            Reset
                        </button>
                    </div>
                    <div className="flex space-x-3 w-full sm:w-auto mt-4 sm:mt-0">
                        <select className="p-2 border border-gray-300 rounded-lg hover:border-blue-500 text-sm focus:outline-none">
                            <option>All Courses</option>
                            <option>Course 1</option>
                            <option>Course 2</option>
                        </select>
                        <select className="p-2 border border-gray-300 rounded-lg hover:border-blue-500 text-sm focus:outline-none">
                            <option>DESC</option>
                            <option>ASC</option>
                        </select>
                        <input
                            type="date"
                            className="p-2 border border-gray-300 rounded-lg text-sm hover:border-blue-500 focus:outline-none"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1  xl:grid-cols-4 lg:grid-cols-2 gap-6">
                    {students.map((student, index) => (
                        <div key={index} className={`${isDarkMode ? "dark color" : "bg-white "} flex  flex-col p-3 rounded-lg shadow-md hover:bg-gray-50`}>
                            <div className="flex flex-wrap items-center mb-4">
                                <img
                                    src={student.avatar}
                                    alt={student.name}
                                    className="w-16 h-16 rounded-full mr-4 border-2 border-gray-300 transform transition-transform duration-300 hover:scale-110"
                                />
                                <div>
                                    <p className="font-semibold">{student.name}</p>
                                    <p className="text-sm text-gray-500">{student.email}</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-600">Registration Date: {student.date}</p>
                                <p className="text-gray-600">Courses Taken: {student.courses}</p>
                            </div>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none">
                                Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
