import {useContext, useEffect,useState} from "react"
import { useParams } from "react-router-dom"
import Style from '../Courses/Courses.module.css'
import Error from "../Error";
import { LiaStarSolid } from "react-icons/lia";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { BsCheckLg } from "react-icons/bs";
import { BsExclamationLg } from "react-icons/bs";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import { IoIosSend } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
export default function CoursesDetails() {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = JSON.parse(localStorage.getItem('comments'));
    if (Array.isArray(storedComments)) { 
      setComments(storedComments);
    }
  }, []);

  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem('comments', JSON.stringify(comments));
    }
  }, [comments]);
  const handleAddComment = () => {
    if (comment) {
      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };
  const handleDeleteComment = (index) => {
    const newComments = comments.filter((_, i) => i !== index); 
    setComments(newComments);
  };
  const{isDarkMode,role}=useContext(ThemeContext)
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
      

      const { id } = useParams();
      const [product, setProduct] = useState(null);
      
      useEffect(() => {
          console.log("Product ID:", id);
          fetch('https://omarsalama25x25.github.io/api/api.json')
              .then((response) => response.json())
              .then((data) => {
                  const selectedProduct = data.products.find((product) => product.id === parseInt(id));
                  setProduct(selectedProduct);
              })
              .catch((error) => console.log("Error fetching :", error));
      }, [id]);
      
    if (!product) {
        return (
          <Error/>
        )
    }
  const bg={
    backgroundImage:`url(${product.image})`,
  backgroundRepeat:"no-repeat",
  backgroundSize:"100% 100%",
  backgroundPosition: 'center'
}
    return(
      <>
      <div className={`${Style.nobg2} z-[-1] `} style={bg}>
        <div className="container pt-[60px] pb-[50px] flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3 mb-6 lg:mb-0 z-10">
            <div>
              <h1 className="text-white text-[28px] md:text-[35px] mb-[20px]">
                {product.title}
              </h1>
              <p className="text-white mt-[10px] text-[14px] md:text-[16px]">
                {product.description}
              </p>
              <div className="flex flex-wrap mt-[15px]">
                <span
                  className={`${Style.border} text-[12px] md:text-[14px] mr-[10px] rounded-full py-[2px] px-[12px] text-white flex pt-[3px]`}
                >
                  <span className="flex items-center text-[#ff7000]">
                    <span className="mr-[3px]">{product.rating}</span>
                    {renderStars(product.rating)}
                  </span>
                  <span className="ml-[3px] text-[#777]">
                    ({product.numrating})
                  </span>
                </span>
                <span
                  className={`${Style.border} text-[12px] md:text-[14px] mr-[10px] rounded-full py-[2px] px-[12px] text-white`}
                >
                  {product.student} students
                </span>
                <span
                  className={`${Style.border} text-[12px] md:text-[14px] rounded-full py-[2px] px-[12px] text-white`}
                >
                  Last updated: {product.date}
                </span>
              </div>
              <div className="flex items-center mt-[20px]">
                <img
                  className="w-[40px] md:w-[50px] rounded-full"
                  src={product.icon}
                  alt=""
                />
                <p className="text-white text-[14px] md:text-[15px] mb-[0px] ml-[10px]">
                  {product.teacher}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${Style.border} lg:w-[28%] h-full shadow-lg backdrop-blur-[5px] rounded-[2px] bg-white/10 p-[20px]`}
          >
            <ul className="text-[#fff] pl-[15px] mb-[0px]">
              <li
                className={`${Style.borderBottom} flex justify-between pt-[5px] pb-[12px]`}
              >
                <span>Length:</span> <span>{product.Length}</span>
              </li>
              <li
                className={`${Style.borderBottom} flex justify-between pt-[5px] pb-[12px]`}
              >
                <span>Effort:</span> <span>{product.Effort}</span>
              </li>
              <li
                className={`${Style.borderBottom} flex justify-between pt-[5px] pb-[12px]`}
              >
                <span>Certificate:</span> <span>{product.Certificate}</span>
              </li>
              <li
                className={`${Style.borderBottom} flex justify-between pt-[5px] pb-[12px]`}
              >
                <span>Level:</span> <span>{product.Level}</span>
              </li>
              <li className="flex justify-between pt-[5px] pb-[12px]">
                <span>Language:</span> <span>{product.Language}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row mt-[50px]">
          <div className={`${isDarkMode?"bg-[#1c1d1f] color":""} w-full md:w-[70%] `}>
            <div >
        <video className="w-full" controls  muted>
          <source src={product.video} type="video/mp4" />
        </video>
            </div>
            <div className="p-[20px]">
              <div>
              <h2 className="mt-[25px] text-[25px]  font-bold">About the course</h2>
            <p className="text-[15px]">
              {product.description}
            </p>
              </div>
              <div className={`${Style.border1} `}>
                <h3 className={`pt-[25px] pl-[25px] pb-[5px] text-[20px] md:text-[23px] font-bold`}>What you will learn</h3>
                <ul className="flex flex-wrap">
            {[
              product.li1,
              product.li2,
              product.li3,
              product.li4,
              product.li5,
              product.li6,
              product.li7,
              product.li8,
            ].map((item, index) => (
              <li key={index} className="mt-[5px] mr-[20px] md:mr-[68px] mb-[15px]">
                <div className="flex items-center">
                  <span className="mr-[10px] bg-[#25a18e] text-white rounded-full">
                    <BsCheckLg />
                  </span>
                  <span>{item}</span>
                </div>
              </li>
            ))}
          </ul>
              </div>
              <div className="mt-[50px]">
                <h3 className="text-[1.67rem] pb-[20px] md:text-[1.67rem]">Requirements</h3>
                <ul>
                  <li className="mb-[15px]"><div className="flex items-center"><span className="mr-[10px] bg-[#fde7bb] text-black rounded-full"><BsExclamationLg /></span> <span>We highly recommend to use headset for a better audio experience</span></div></li>
                  <li className="mb-[15px]"><div className="flex items-center"><span className="mr-[10px] bg-[#fde7bb] text-black rounded-full"><BsExclamationLg /></span> <span>A pen and paper could be useful so you can take notes</span></div></li>
                </ul>
                <div className="mt-[60px]">
          <h4 className="text-[25px] font-bold">Certificate</h4>
          <img className="w-full" src="../../../../img/freepik_br_f0aa722f-ab47-4af6-b051-e66111a1ec9a.png" alt="" />
        </div>
              </div>
            </div>
      <div className="m-[25px]">
        <h3 className="border-b-2 border-solid">comments</h3>
        {role === "admin" || role === "user" || role === "instructor" ?
        <div className="flex justify-between ">
        <input
    type="text"
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    placeholder="Add a comment here"
    className="w-[83%] rounded-full bg-[#d4d4d4] border-1 border-solid"
  />
      <button className="flex items-center justify-center bg-black text-white rounded-md p-[5px]" onClick={handleAddComment}>Comment <IoIosSend /></button>
      </div>:" "}
        {comments.map((comment, index) => (
          <div key={index} className="flex mt-[20px]">
            <div className="w-[32px] ">
            <img className="bg-[#b7b7b7] rounded-full" src="../../../../img/pngwing.com.png" alt="" />
            </div>
            <div className="w-[100%]">
            <h4 className="text-[20px] pl-[7px]">User</h4>
          <p className="ml-[25px]">{comment}</p>
          </div>
          { role === "admin"?
          <div>
          <MdDeleteForever className="text-[#ff0000]"  onClick={() => handleDeleteComment(index)}/>
          </div>: null}
          </div>
        ))}
      </div>
          </div>
          <div className={`${isDarkMode?"bg-[#1c1d1f] color":""} lg:w-[29.1667%] md:w-[29.1667%] sm:w-full h-[40%] sticky top-[85px] p-[15px]`}>
            <div className="">
              <span className="text-[2.24rem]  font-bold">${product.price}</span>
              <div className="flex justify-center font-bold text-white items-center transition duration-300 bg-red-600 hover:bg-red-800  p-[13px] rounded-sm mt-[10px]">
                <button className="">
                  Enrol now
                </button>
              </div>
              <div>
                <h3 className="mt-[20px] text-[20px] font-bold">This course includes</h3>
                <ul className="">
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/1.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Assignments</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/2.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Forums</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/3.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Chats</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/4.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Glossaries</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/5.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Lessons</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/6.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Quizzes</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/7.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Resources</span></div></li>
                  <li className="mb-[10px]"><div className="flex items-center"><span className="mr-[15px]"><img src="../../../../img/8.svg" className="w-[21px] h-[21px]" alt="" /></span><span>Surveys</span></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
    )
}