import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import { MdDelete } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";

export default function DisPlayData({ formData, setFormData ,OpenSidebar}) {
  const { isDarkMode } = useContext(ThemeContext);
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, [setFormData]);

  if (formData.length === 0) {
    return (
      <div className="flex-1">
                    <div className='container h-[110vh]'> 
                      <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
                    </div>
      </div>
    );
  }

  const handleDelete = (indexToDelete) => {
    const updatedData = formData.filter((_, index) => index !== indexToDelete);
    localStorage.setItem("formData", JSON.stringify(updatedData));
    setFormData(updatedData);
  };

  const handleClearAll = () => {
    setFormData([]);
    localStorage.removeItem("formData");
  };
  return (
    <div className="flex-1 h-[800px] ">
                          <div className='container'> 
                      <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
                      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={handleClearAll}
          style={{
            marginBottom: "50px",
            margin: "auto",
            color: "red",
            fontSize: "35px",
            padding: "10px 15px",
            cursor: "pointer",
            border: "none",
          }}
        >
          <VscClearAll />
        </button>
      </div>

      {formData.map((entry, index) => (
        <div
          className={`${isDarkMode ? "dark color" : " "}`}
          key={index}
          style={{
            boxShadow: "-1px 1px 12px #999999",
            width: "90%",
            margin: "30px auto 20px auto",
            borderRadius: "15px",
            border: "2px solid  rgb(191 191 191)",
            padding: "10px",
            position: "relative",
          }}
        >
          <p style={{ marginLeft: "20px", marginTop: "20px" }}>
            <span className="font-bold mr-[7px]">Name:</span>
            {`${entry.name}`}
          </p>
          <p style={{ marginLeft: "20px" }}>
            <span className="font-bold mr-[7px]">Email:</span>
            {` ${entry.email}`}
          </p>
          <p style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <span className="font-bold mr-[7px]">Message:</span>
            {` ${entry.message}`}
          </p>

          <button
            onClick={() => handleDelete(index)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              color: "red",
              fontSize: "25px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
}
