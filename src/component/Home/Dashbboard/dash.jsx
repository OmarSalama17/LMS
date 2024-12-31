import { useContext, useState } from 'react'
import styles from './Dashboard.module.css'; 
import Sidebar from './Sidebar'
import Dashboard from './dashboard'
import Courses from './Courses'
import Assessment from './Assessment'
import StudentDashboard from './Student'
import ViewAssignments from './ViewAssignments';
import DisPlayData from './DisplayData';
import { ThemeContext } from '../ThemeDark/ThemeDark';
import AddCourse from '../Courses/AddCourse';
function Dash({formData , setFormData}) {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [open,setOpen]=useState("dashboard")
const {role}= useContext(ThemeContext)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  let component;
  const OpenDashboard=()=>{
    setOpen("dashboard")
  }

  const OpenCourses=()=>{
    setOpen("Courses")
  }

  const OpenAssessment=()=>{
    setOpen("Assessment")
  }

  const OpenStudent=()=>{
    setOpen("Student")
  }

  
const OpenDisPlayData  = () =>{
  setOpen("DisplayData")
}
const OpenViewAssignments = ()=>{
  setOpen("ViewAssignments")
}
const OpenCourse = () =>{
  setOpen("addcourse")
}
  if(open==="dashboard"){
    component= <Dashboard  OpenSidebar={OpenSidebar}/>
  }else if(open==="Courses"){
    component= <Courses OpenSidebar={OpenSidebar}/>
  }else if (open==="Assessment"){
    component= <Assessment OpenSidebar={OpenSidebar}/>
  }else if (open==="Student"){
    if (role === "admin"){
      component= <StudentDashboard OpenSidebar={OpenSidebar}/>
    }
    
  }else if (open === "DisplayData"){
    if(role === "admin"){
    component = <DisPlayData formData={formData} OpenSidebar={OpenSidebar} setFormData={setFormData}/>
  }
}else if (open === "ViewAssignments"){
  component = <ViewAssignments OpenSidebar={OpenSidebar}/>
}else if ( open === "addcourse"){
  if (role === "admin" || role === "instructor"){
    component = <AddCourse OpenSidebar={OpenSidebar}/>
  }
}
    
  return (
    <div className='flex relative'>
      <Sidebar openSidebarToggle={openSidebarToggle}
      OpenSidebar={OpenSidebar} 
      OpenDashboard={OpenDashboard} 
      OpenCourses={OpenCourses} 
      OpenAssessment={OpenAssessment} 
      OpenStudent={OpenStudent} 
      OpenDisPlayData={OpenDisPlayData} 
      OpenViewAssignments={OpenViewAssignments}
      OpenCourse={OpenCourse}
      open={open}
      />
      {component}
    </div>
  )
}

export default Dash;
