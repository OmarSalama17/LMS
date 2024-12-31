import { useState, useContext } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import style from "../Dashbboard/Dashboard.module.css"
import { BsList } from "react-icons/bs";
import Page3 from "./Page3";
const AddCourse = ({OpenSidebar}) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filePreview, setFilePreview] = useState(null);
  const [CourseName, setCourseName] = useState("");
  const [Nameteacher, setNameteacher] = useState("");
  const [Price, setPrice] = useState("");

  const { isDarkMode , setCourses , PageCourse } = useContext(ThemeContext);


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
    if (!CourseName || !file) {
      alert("يرجى إدخال اسم التقييم واختيار الملف!");
      return;
    }
    const newCourse = {
      name: CourseName,
      nameTeacher:Nameteacher,
      fileName: file.name,
      Price:Price,
      preview: filePreview,
    };
    setCourses((prevCourses) => {
      const updatedCourses = [...prevCourses, newCourse];
      localStorage.setItem("Courses", JSON.stringify(updatedCourses));
      return updatedCourses;
    });
    setFile(null);
    setFileName("");
    setFilePreview(null);
    setCourseName("");
    setNameteacher("");
    setPrice("");
    alert(`تم رفع التقييم: ${CourseName}`);
  };


  const renderUploadPage = () => (
    <>
      
        <div className={`w-[80%] flex-1 md:p-5 lg:p-5 xl:p-5 rounded-lg shadow-lg `}>
                        <div className='container'> 
                    <button onClick={OpenSidebar} className={`${style.buttonHidden}  ${isDarkMode ? "text-white" : ""}text-[40px] hidden py-[30px]`}><BsList /></button>
                    </div>
          <form
            onSubmit={handleSubmit}
            className={`${
              isDarkMode ? "dark color" : ""
            } flex lg:p-[25px] md:p-[25px] xl:p-[25px] rounded-md flex-col gap-4`}
          >
            <h1 className="text-center text-[30px] ">Add Course</h1>
            <div className="flex flex-col">
              <input
                type="text"
                id="CourseName"
                value={CourseName}
                onChange={(e) => setCourseName(e.target.value)}
                placeholder="Course Name"
                className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none m-[25px]"
                required
              />
              <input
                type="text"
                id="TeacherName"
                value={Nameteacher}
                onChange={(e) => setNameteacher(e.target.value)}
                placeholder="Teacher Name "
                className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none  m-[25px]"
                required
              />
              <input
                type="number"
                id="Price"
                value={Price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price "
                className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none m-[25px]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="fileInput"
                className="font-semibold text-gray-700 mb-1"
              >
                Select File
              </label>
              <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="p-3 text-lg border border-gray-300 rounded-md focus:border-purple-600 outline-none"
                required
              />
              {fileName && (
                <p className="text-sm text-gray-500 mt-2">
                  Selected File: {fileName}
                </p>
              )}
            </div>
            <div className="text-center">
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

  return PageCourse === "upload" ? (
    renderUploadPage()
  ) : (
    <Page3
    />
  );
};

export default AddCourse;
