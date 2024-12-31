import { useContext } from 'react';
import { ThemeContext } from '../ThemeDark/ThemeDark';
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";

const ViewAssignments = ({OpenSidebar}) => {
      const {assignments , deleteAssignment, isDarkMode , role} = useContext(ThemeContext);
  return (
    <div className={` p-5 rounded-lg shadow-lg h-[800px]`}>
              <div className='container'> 
          <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
          </div>
      <h2 className="text-xl font-semibold mb-4">Uploaded Assignments</h2>
      {assignments.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {assignments.map((assignment, index) => (
            <div key={index} className={`  rounded-lg p-4 text-center shadow-md ${isDarkMode ? 'dark color' : ''}`}>
              <div className="mb-3">
                {assignment.preview ? (
                  <img
                    src={assignment.preview}
                    alt={`Preview of ${assignment.fileName}`}
                    className="w-full h-40 rounded-lg"
                  />
                ) : (
                  <p >{assignment.fileName}</p>
                )}
              </div>
              <p className={`${isDarkMode? " !text-[#c9c9c9]" : ""} mt-[25px] font-600`}>{assignment.name}</p>
              {role === "admin" ? 
              <button
                onClick={() => deleteAssignment(index)}
                className="p-2 bg-gradient-to-r from-red-400 to-pink-600 text-white rounded-md cursor-pointer hover:translate-y-1 transition-all duration-300"
              >
                Delete
              </button>
              : null}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">No assignments uploaded yet.</p>
      )}
    </div>
  );
};

export default ViewAssignments;
