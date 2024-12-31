import { useContext } from 'react'
import 
{ BsFillArchiveFill, BsPeopleFill,}
 from 'react-icons/bs'
 import { TbClockHour4Filled } from "react-icons/tb";
 import { MdOutlineTaskAlt } from "react-icons/md";
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import style from "./Dashboard.module.css"
import { BsList } from "react-icons/bs";
import { ThemeContext } from '../ThemeDark/ThemeDark';
function Dashboard({OpenSidebar}) {
const {isDarkMode , role} = useContext(ThemeContext)


const data = [
    { name: 'Jan', TLH: role === "admin" ? 100 : role === "user" ? 50 : 70, Courses: role === "admin" ? 200 : role === "user" ? 10 : 20, amt: 100 },
    { name: 'Feb', TLH: role === "admin" ? 500 : role === "user" ? 15 : 200, Courses: role === "admin" ? 500 : role === "user" ? 5 : 8, amt: 100 },
    { name: 'Mar', TLH: role === "admin" ? 1800 : role === "user" ? 65 : 160, Courses: role === "admin" ? 800 : role === "user" ? 10 : 12, amt: 100 },
    { name: 'Apr', TLH: role === "admin" ? 1200 : role === "user" ? 50 : 250, Courses: role === "admin" ? 900 : role === "user" ? 8 : 15, amt: 100 },
    { name: 'May', TLH: role === "admin" ? 1700 : role === "user" ? 75 : 300, Courses: role === "admin" ? 750 : role === "user" ? 15 : 18, amt: 100 },
    { name: 'Jun', TLH: role === "admin" ? 1500 : role === "user" ? 57 : 270, Courses: role === "admin" ? 100 : role === "user" ? 5 : 22, amt: 100 },
    { name: 'Jul', TLH: role === "admin" ? 2800 : role === "user" ? 100 : 500, Courses: role === "admin" ? 20 : role === "user" ? 6 : 5, amt: 100 },
  ];
     
    const data2 =[
                  {name: 'Jan',StudEnrol: 4000,TaskCompleted: 2400,amt: 2400,},
                  {name: 'Feb',StudEnrol: 3000,TaskCompleted: 1398,amt: 2210,},
                  {name: 'Mar',StudEnrol: 2020,TaskCompleted: 5010,amt: 2290,},
                  {name: 'Apr',StudEnrol: 2780,TaskCompleted: 3908,amt: 2000,},
                  {name: 'May',StudEnrol: 1890,TaskCompleted: 4800,amt: 2181,},
                  {name: 'Jun',StudEnrol: 2390,TaskCompleted: 3800,amt: 2500,},
                  {name: 'Jul',StudEnrol: 3490,TaskCompleted: 4300,amt: 2100,},
                ];
  return (
    <>
    <div className='flex-1 '>
        <div className='container'> 
    <button onClick={OpenSidebar} className={`${style.buttonHidden} ${isDarkMode ? "text-white" : ""} text-[40px] hidden py-[30px]`}><BsList /></button>
    </div>
    <main
     className="mt-[px] mb-[50px] flex-1 p-[20px] font-extrabold text-[rgba(255,255,255,0.95)] font-[Montserrat,sans-serif]">
        <div className="flex justify-between text-[#263043] font-extrabold text-[25px]">
            <h3 className={isDarkMode ? "text-white" : ""}>DASHBOARD</h3>
        </div>
        <div     className="grid gap-3 my-5 grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xs:grid-cols-1 font-semibold">
            <div className="flex flex-col justify-around p-[8px_15px] rounded-[5px] h-[80px] bg-[#2962ff]">
                <div className="flex items-center justify-between">
                    <h3 className='font-200 text-[20px]'>Courses</h3>
                    <BsFillArchiveFill className="text-[25px]"/>
                </div>
                <h1 
                    className="text-[22px] ">
                
                {role==="admin" ? "20": role==="user" ? "6" :"5"}
                </h1>
            </div>
            <div className="flex flex-col justify-around p-[8px_15px] rounded-[5px] h-[80px] bg-[#ff6d00]">
                <div className="flex items-center justify-between">
                    <h3 className='font-200 text-[20px]'>Total learning hours</h3>
                    <TbClockHour4Filled className="text-[25px]"/>
                </div>
                <h1 
                    className="text-[22px] font-bold">
                {role==="admin" ? "2.8K": role==="user" ? "100" :"500"}
                </h1>
            </div>
            {role === "admin" || role === "instructor" ?
            <div className="flex flex-col justify-around p-[8px_15px] rounded-[5px] h-[80px] bg-[#2e7d32]">
                <div className="flex items-center justify-between">
                    <h3 className='font-200 text-[20px]'>students enrol</h3>
                    <BsPeopleFill className="text-[25px]"/>
                </div>
                <h1 
                    className="text-[22px] font-bold">
                                {role==="admin" ? "258": role==="instructor" ? "50" :""}
                </h1>
            </div> : null}
            <div className="flex flex-col justify-around p-[8px_15px] rounded-[5px] h-[80px] bg-[#d50000]">
                <div className="flex items-center justify-between">
                    <h3 className='font-200 text-[20px]'>Task Completed</h3>
                    <MdOutlineTaskAlt className="text-[25px]"/>
                </div>
                <h1 
                    className="text-[22px] font-bold">
                120</h1>
            </div>
        </div>

        <div     className="grid gap-5 mt-10  grid-cols-1 lg:grid-cols-2  gap-[20px] mt-[60px] min-h-[300px]  grid gap-5 mt-10 ">
                
        <ResponsiveContainer width="100%" className="lg:w-[100%] w-[100vh]">
  <BarChart
    width={500}
    height={300}
    data={data}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <XAxis dataKey="name" />
    <YAxis domain={[0, 50]} /> 
    <Tooltip />
    <Legend />
    <Bar dataKey="Courses" fill="#2962ffe6" />
    <Bar dataKey="TLH" fill="#ff6f00e6" />
  </BarChart>
</ResponsiveContainer>

<ResponsiveContainer width="100%" className="lg:w-[100%] w-[100vh]">
  <LineChart
    width={500}
    height={300}
    data={data2}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis domain={[0, 50]} /> {/* تعديل هنا ليبدأ من 0 وينتهي عند 50 */}
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="StudEnrol" stroke="#2e7d32eb" />
    <Line type="monotone" dataKey="TaskCompleted" stroke="#d50000e6" activeDot={{ r: 8 }} />
  </LineChart>
</ResponsiveContainer>


        </div>
    </main>
    </div>
</>
)
}

export default Dashboard