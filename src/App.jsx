import './App.css'
import Header from './component/Home/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Offers from './component/Home/Offers/Offers';
import HomePage from './component/Home/HomePage/HomePage';
import Courses from './component/Home/Courses/Courses';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './component/Home/Error';
import Page2 from './component/Home/Courses/page2';
import CoursesDetails from './component/Home/CoursesDetails/CoursesDetails';
import Form from './component/Home/Form/Form';
import { useContext, useState } from 'react';
import { ThemeContext } from './component/Home/ThemeDark/ThemeDark';
import Footer from './component/Home/Footer/Footer';
import Dash from './component/Home/Dashbboard/dash';
import Contact from './component/Home/ContactUs.jsx/Contact';
import Teacher from './component/Teacher/Teacher';
import PageProfile from './component/Home/PageProfile/PageProfile';
import PageTeacher from "./component/Teacher/PageTeacher/PageTeacher"
import Page3 from './component/Home/Courses/Page3';
import AboutUs from './component/Home/AboutUs/AboutUs';
function App() {
  const {isDarkMode , role} = useContext(ThemeContext)

if(isDarkMode){
  document.body.classList.add('bg-[#252728]')
}else{
  document.body.classList.remove('bg-[#252728]')
}

  const [formData,setFormData]=useState([])
  const [form,setForm]=useState(false)
  const openForm=()=>{
    setForm(true)
  }
  const closeForm=()=>{
    setForm(false)
  }
  function login() {
    return setForm(false)
  }
  let form1;
  if (form) {
    form1 = <Form click={closeForm} login={login}/>
  }else{
    form1;
  }
  return (
    <>
      <BrowserRouter>
    {form1}
      <Header openForm={openForm} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursesDetails/>} />
        <Route path="/contactUs" element={<Contact setFormData={setFormData} formData={formData} />} />
        <Route path="/aboutus" element={<AboutUs setFormData={setFormData} formData={formData} />} />
        {role === "admin" || role === "user" || role === "instructor" ?<Route path="/Dashboard" element={<Dash formData={formData} setFormData={setFormData}/>} />: null}
        <Route path="/page2" element={<Page2/>} />
        <Route path="/page3" element={<Page3/>} />
        <Route path='/karimwagdi' element={<PageTeacher teacher="Kareem wagdi" />}/>
        <Route path='/WilliamJohnson' element={<PageTeacher teacher="William Johnson" />}/>
        <Route path='/JohnWick' element={<PageTeacher teacher="John Wick" />}/>
        <Route path='/IsabellaMiller' element={<PageTeacher teacher="Isabella Miller" />}/>
        <Route path='/MillerWilliam' element={<PageTeacher teacher="Miller William" />}/>
        {role ==="admin" || role === "user" || role === "instructor" ? <Route path='/pageprofile' element={<PageProfile/>}/> : null}
        <Route path="*" element={<Error/>} />
      </Routes>
        <Footer/> 
      </BrowserRouter>
      
    </>
  )
}

export default App