import { useContext } from 'react';
import { ThemeContext } from '../ThemeDark/ThemeDark';
import { Link , useLocation} from 'react-router-dom';
import { RiHome2Line } from "react-icons/ri";
import Style from "./Courses.module.css";
import { MdFolderDelete } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { HiAcademicCap } from "react-icons/hi";

const Page3 = () => {
  const {role} = useContext(ThemeContext)
    const location = useLocation()
    let btn="bg-red-500 pl-[14px] pr-[14px] pt-[8px] pb-[8px] rounded-full no-underline text-white hover:bg-red-700 transition duration-300";

    const {Courses , deleteCourse  , isDarkMode} = useContext(ThemeContext);
    const navigation = [
        {href: '/LMS/courses'},
        {href:'/LMS/page2'},
        {href:'/LMS/page3'},
      ]
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
    
    return (
    <>
        <div>
          <div className={`${Style.nobg} bg-[#001d62] ${isDarkMode? "dark": ""} `}>
            <div className="container ">
              <div className="row">
                <div className="col-md-12">
                    <div className="">
                      <h1 className={`${isDarkMode ? "color": " " } pt-[45px] pb-[45px] text-white text-[29px]`}>All courses</h1>
                    </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                        <ol className="breadcrumb z-10 items-center">
                          <li className="breadcrumb-item z-10">
                            <Link to='/' className="">
                            <RiHome2Line />
                            </Link>
                          </li>
                          <li className="breadcrumb-item z-10">
                            <Link
                              className="no-underline text-white"
                            to='/courses'>
                              Courses
                            </Link>
                          </li>
                          <li className="breadcrumb-item z-10">
                            <Link
                              className="no-underline text-white"
                              to="/page2"
                            >
                              Page 2
                            </Link>
                          </li>
                          <li className="breadcrumb-item z-10">
                            <Link
                              className="no-underline text-white"
                              to="/page3"
                            >
                              Page 3
                            </Link>
                          </li>
                        </ol>
                </div>
              </div>
            </div>
          </div>
</div>
        <div className="container pt-[50px] pb-[50px] gap-y-10 gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {Courses.map((Course, index) => (
            <div className="rounded " key={index}>
              <div className={Style.Course}>
                {role === "admin" ?
              <span className='text-[red]'>
              <MdFolderDelete onClick={() => deleteCourse(index)} className='float-right cursor-pointer text-[25px] !text-red'/>
              </span>
              : null}
                <div className={`${Style.image} `}>
                  <img
                    className="w-full h-53 object-cover rounded  hover:scale-110 transition-transform duration-300"
                    src={Course.preview}
                    alt={`Preview of ${Course.fileName}`}
                  />
                </div>
                <div className="flex flex-col justify-between  border-b border-[#dfdfdf]">
                  <div className="">
                  <h3 className={`${isDarkMode ? "color": " " } text-lg font-semibold mt-2`}>
                  {Course.name}
                    </h3>
                    <span className="flex text-red">
                       <span className="flex text-red items-center " style={{color:"#ff7000"}}>
                        <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } mr-[3px]  text-[14px]`}
                        >0
                        </span>
                        <IoIosStarOutline/> <IoIosStarOutline/> <IoIosStarOutline/> <IoIosStarOutline/> <IoIosStarOutline/>
                        </span>  
                        <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } text-[13px] text-[#777]  ml-[3px]`}>
                          (0)
                          </span>
                          </span>
                    <div className="mt-auto">
                      <p className={`${isDarkMode ? "color": " " } text-gray-600`}>{Course.nameTeacher}</p>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div>
                      <p className={`${isDarkMode ? "color": " " } font-bold text-xl`}>${Course.Price}</p>
                    </div>
                                        <div className="flex item-center">
                                          <div>
                                            <HiAcademicCap className={`${isDarkMode ? "color": " " }`}/>
                                          </div>
                                          <p className={`${isDarkMode ? "color": " " } text-sm font-semibold`}>
                                            (0)
                                          </p>
                                        </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    <div className='container'>
                <ul className="flex mb-[50px]">
                  <li className="mr-[10px]">
                  <Link className={classNames(
                          location.pathname === navigation[0].href ? btn : 'text-black !font-bold no-underline bg-white ',
                      ' px-3 py-2 text-sm font-medium no-underline' ,
                        )} to='/LMS/courses'>1</Link>
                  </li>
                  <li className="mr-[10px]">
                  <Link className={classNames(
                          location.pathname === navigation[1].href ? btn : 'text-black !font-bold no-underline bg-white ',
                      ' px-3 py-2 text-sm font-medium no-underline' ,
                        )} to='/LMS/page2'>2</Link>
                  </li>
                  <li>
                <Link className={classNames(
                          location.pathname === navigation[2].href ? btn : 'text-black !font-bold no-underline bg-white  ',
                      'px-3 py-2 text-sm font-medium no-underline',
                        )} to='/LMS/page3'>3</Link>
                  </li>
                </ul>
              </div>
    </>
  );
};

export default Page3;
