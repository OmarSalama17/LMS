import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../ThemeDark/ThemeDark';
import ViewAssignments from './ViewAssignments'; 
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";
import { MdAssessment } from "react-icons/md";

const HomeworkApp = ({OpenSidebar}) => {
  const { isDarkMode ,setAssignments,assignments, navigateTo , currentPage } = useContext(ThemeContext);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [filePreview, setFilePreview] = useState(null);
  const [assessmentName, setAssessmentName] = useState('');




  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);

      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!assessmentName || !file) {
      alert('يرجى إدخال اسم التقييم واختيار الملف!');
      return;
    }

    const newAssignment = {
      name: assessmentName,
      fileName: file.name,
      preview: filePreview,
    };

    setAssignments((prevAssignments) => {
      const updatedAssignments = [...prevAssignments, newAssignment];
      localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
      return updatedAssignments;
    });

    setFile(null);
    setFileName('');
    setFilePreview(null);
    setAssessmentName('');
    alert(`تم رفع التقييم: ${assessmentName}`);
  };

  const deleteAssignment = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
    localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
  };
const {role} = useContext(ThemeContext)
  const renderUploadPage = () => (
    <>
    
    <div className={`w-[80%] mx-auto p-5 rounded-lg shadow-lg `}>
            <div className='container'> 
        <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
        </div>
      <header className={`text-center ${isDarkMode ? "dark color " : " "} mb-[75px] p-5 rounded-15 bg-[#eeedff] shadow-lg  text-[#303030] `}>
        <h1 className="text-2xl font-bold tracking-wide flex items-center justify-center "><MdAssessment className='mr-[7px]'/>Assignment</h1>
      </header>
      <form onSubmit={handleSubmit} className={`${isDarkMode ? "dark color" : ""} flex p-[25px] rounded-md flex-col gap-4`}>
        <div className="flex flex-col">
          <label htmlFor="AssignmentName" className="font-semibold text-gray-700 mb-1">Assignment Name</label>
          <input
            type="text"
            id="AssignmentName"
            value={assessmentName}
            onChange={(e) => setAssessmentName(e.target.value)}
            placeholder="Enter Assignment name"
            className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="fileInput" className="font-semibold text-gray-700 mb-1">Select File</label>
          <input
            type="file"
            id="fileInput"
            onChange={handleFileChange}
            className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none"
            required
          />
          {fileName && <p className="text-sm text-gray-500 mt-2">Selected File: {fileName}</p>}
        </div>
       <div className='text-center'>
       <button
        type="submit"
        className="p-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md cursor-pointer hover:translate-y-1 transition-all duration-300 w-[300px]"
              >
         Upload
        </button>
       </div>

      </form>
    </div>
      </>
  );

  return currentPage === 'upload' ? renderUploadPage() : <ViewAssignments assignments={assignments} deleteAssignment={deleteAssignment} navigateTo={navigateTo}  />;
};

export default HomeworkApp;
