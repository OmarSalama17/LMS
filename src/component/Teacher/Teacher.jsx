import { useContext } from "react";
import { FaCheck } from "react-icons/fa6";
import { ThemeContext } from "../Home/ThemeDark/ThemeDark";
import { Link } from "react-router-dom";
import "./teacher.css";
const image=[
  {src:"https://b2662075.smushcdn.com/2662075/wp-content/uploads/03-Partner-Training-persona-1.png?lossy=0&strip=1&webp=1",
    color:"color1",
    cborder:"#eccde3",
    description:"full stack developer,senior Backend,Database",
    title:"Karim Wagdi",
    after:"60deg",
    to:"/karimwagdi"
    
  },
  {src:"https://b2662075.smushcdn.com/2662075/wp-content/uploads/02-Customer-Training-persona-1.png?lossy=0&strip=1&webp=1",
    color:"color2",
    cborder:"#b6eee1",
    title:"Isabella Miller",
    to:"/IsabellaMiller",
    description:"English language CEFR A1",

  },
  {src:"https://b2662075.smushcdn.com/2662075/wp-content/uploads/01-Employee-Training-persona-1.png?lossy=0&strip=1&webp=1",
    color:"color3",
    cborder:"#fee6ac",
    title:"John Wick",
    after:"80deg",
    befor:"60deg",
    to:"/JohnWick",
    description:"Project management , Finance fundamentals , Financial planning and wealth management ",


  },
  {src:"https://b2662075.smushcdn.com/2662075/wp-content/uploads/05-Extended-Enterprise-persona-1.png?lossy=0&strip=1&webp=1",
    color:"color4",
    cborder:"#ccdafb",
    title:"William Johnson",
    after:"135deg",
    befor:"200deg",
    to:"/WilliamJohnson",
    description:"Landing page with zero coding skills + 2 projects , English grammar and structures , Business communication , Business innovation",

  },
  {src:"https://b2662075.smushcdn.com/2662075/wp-content/uploads/04-Member-Training-persona-1.png?lossy=0&strip=1&webp=1",
    color:"color5",
    cborder:"#ffd0d4",
    title:"Miller William",
    after:"291deg",
    befor:"242deg",
    to:"/MillerWilliam",
    description:"Accounting",

  }
  ]
const Teacher = () => {
  const {isDarkMode}=useContext(ThemeContext)
  return (
    <>
      <div className={`${isDarkMode ? "text-white" : " "} flex flex-wrap justify-center items-center gap-6 p-4`}>
        {
          image.map((item, index) => {
            return(
              
              <div key={index} className="flex justify-center items-center w-full max-w-[393px] flex-col div1">
        <div className=" relative w-[100%] max-w-[220px] image" style={{"--color":item.cborder,"--after":item.after,"--before":item.befor} }>
          <Link className="no-underline text-black" to={item.to}>
          <img
          className="w-[100%] h-[100%]"
            src={item.src}
            alt="Extended Enterprise"
            loading="lazy"
          />
        </Link>
        </div>
        <h2 className="flex justify-center items-center mt-[30px]"><span className={`icon mr-2 w-[5px] ${item.color} opacity-0 transition-all duration-500`}><FaCheck/></span> {item.title} 
        </h2>
        <div>
          <p className="text-center font-bold text-[23px]	">
              {item.description}
          </p>
        </div>
        </div>
            )
          })
        }
      </div>
    </>
  );
};

export default Teacher;
