import { useState, useEffect, useContext } from "react";
import Style from "./Courses.module.css";
import { HiAcademicCap } from "react-icons/hi";
import { Link , useLocation } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { LiaStarSolid } from "react-icons/lia";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import Filter from "../Filter/filter";

const navigation = [
    {href: '/LMS/courses'},
    {href:'/LMS/page2'},
    {href:'/LMS/page3'},
  ]
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const hasHalfStar = rating % 1 !== 0; 
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
    return (
      <>
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <LiaStarSolid key={`full-${index}`} />
          ))}
        {hasHalfStar && <IoStarHalfOutline key="half-star" />}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <IoIosStarOutline key={`empty-${index}`} />
          ))}
      </>
    );
  };
  
function Page2() {
    const {isDarkMode}=useContext(ThemeContext)
    const [searchQuery, setSearchQuery] = useState("");
    const[filterProductData,setFilterProductData]=useState([])
  const [difficultyFilter, setDifficultyFilter] = useState("ALL");
    const[maxPrice,setMaxprice]=useState("")
    const maxLimit=150;



    useEffect(() => {
      fetch("https://omarsalama25x25.github.io/api/api.json")
        .then((response) => response.json())
        .then((data) =>{ setProducts(data.products)
          setFilterProductData(data.products)
        })
        .catch((error) => console.error("Error fetching data:", error));
    }, []);

    
    const handleSearchChange = (e) => {
      const value=e.target.value.toLowerCase()
      setSearchQuery(value)
      const newData =products.filter((item)=>{
        return(
          item.title.toLowerCase().includes(value)  
        )
      })
      setFilterProductData(newData)
    };

    const handlePriceChange=(event)=>{
      const value = event.target.value
      setMaxprice(value)
    
      if(value>maxLimit){
        setMaxprice(maxLimit)
        const filter=products.filter((item)=>{
          return(
          item.price <= value  
          )
        }
      )
          setFilterProductData(filter)
         return;
    }
    
      if (value==="") {
        setFilterProductData(products)
      }  else {
          const filter=products.filter((item)=>{
            return(
            item.price <= value  
          )
        }
      )
        setFilterProductData(filter)
      }
    }
  
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      console.log("Search", searchQuery);
    };
    const location = useLocation()
    let btn="bg-red-500 pl-[14px] pr-[14px] pt-[8px] pb-[8px] rounded-full no-underline text-white hover:bg-red-700 transition duration-300";

    const [products, setProducts] = useState([]);


  useEffect(() => {
    if (products.length === 0) return; 
  
    let filteredData = products;
  
    if (difficultyFilter === "EASY") {
      filteredData = products.filter((product) => product.price < 70);
    } else if (difficultyFilter === "HARD") {
      filteredData = products.filter((product) => product.price >= 70 && product.price <= 150);
    } else {
      filteredData = products; 
    }
  
     setFilterProductData(filteredData);
  }, [difficultyFilter, products]); 

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
                            >
                              Page 2
                            </Link>
                          </li>
                        </ol>
                </div>
              </div>
            </div>
          </div>
</div>
      <div className="container mx-auto px-4 mb-[50px]">
      <div className={`${isDarkMode ? "dark": " " } rounded-md mx-auto flex  items-center justify-between bg-[#f9f9f9] h-[45px] mt-[45px] mb-[35px]  p-[7px] px-[0px] `}>
        <Filter 
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
            maxPrice={maxPrice} 
            handlePriceChange={handlePriceChange}
        />
          <div className="  border-gray-200 rounded-[2px] h-[35px] search-field d-inline-flex align-items-center">
          <div className="flex justify-center">
      <form onSubmit={handleSearchSubmit} className="w-full max-w-[500px]">
        <div className="relative">
          <input
            type="text"
            id="search"
            className="block w-full p-2.5 pl-12 pr-3 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <svg
            className="absolute top-1/2 left-4 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </div>
      </form>
    </div>
          </div>
        </div>
        <div className="gap-y-10 gap-x-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ">
          {filterProductData.slice(12, ).map((product) => (
            <div className="rounded " key={product.id}>
              <Link className="no-underline text-black" to={`/courses/${product.id}`}>
              <div className={Style.Course}>
                <div className={`${Style.image} `}>
                  <img
                    className="w-full h-53 object-cover rounded  hover:scale-110 transition-transform duration-300"
                    src={product.image}
                    alt={product.title}
                  />
                </div>
                <div className="flex flex-col justify-between  border-b border-[#dfdfdf]">
                  <div className="">
                  <h3 className={`${isDarkMode ? "color": " " } text-lg font-semibold mt-2`}>
                  {product.title}
                    </h3>
                    
                    <span className="flex text-red">
                       <span className="flex text-red items-center " style={{color:"#ff7000"}}>
                        <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } mr-[3px]  text-[14px]`}
                        >{product.rating}
                        </span>
                        {renderStars(product.rating)}
                        </span>  <span style={{fontWeight:"bold"}} className={`${isDarkMode ? "color": " " } text-[13px] text-[#777]  ml-[3px]`}>
                          ({product.numrating})
                          </span>
                          </span>
                    <div className="mt-auto">
                      <p className={`${isDarkMode ? "color": " " } text-gray-600`}>{product.teacher}</p>
                    </div>
                  </div>
                  <div className="flex justify-between ">
                    <div>
                      <p className={`${isDarkMode ? "color": " " } font-bold text-xl`}>${product.price}</p>
                    </div>
                    <div className="flex item-center">
                      <div>
                        <HiAcademicCap className={`${isDarkMode ? "color": " " }`}/>
                      </div>
                      <p className={`${isDarkMode ? "color": " " } text-sm font-semibold`}>
                        ({product.student})
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          ))}
          <div>
            <ul className="flex">
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
                  'rounded-md px-3 py-2 text-sm font-medium',
                    )} to='/LMS/page3'>3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page2;
