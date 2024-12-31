import { useContext } from "react";
import { useRef } from "react";
import landing from "./Landing.module.css";
import { Carousel } from "react-bootstrap";
import { ThemeContext } from "../ThemeDark/ThemeDark";
export default function Landing() {
  const {isDarkMode}=useContext(ThemeContext)
  const carouselRef = useRef(null);
  let isDragging = false;
  let startX = 0;

  const handleMouseDown = (e) => {
    isDragging = true;
    startX = e.clientX;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const diff = e.clientX - startX;

    if (diff > 50) {
      carouselRef.current.prev();
      isDragging = false;
    } else if (diff < -50) {
      carouselRef.current.next();
      isDragging = false;
    }
  };

  return (
    <div className=" ">
      <Carousel
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
      >
        <Carousel.Item>
          
          <div className={`${landing.landing} ${isDarkMode ? landing.before :""}`}>
            <div className={landing.text}>
              <h1 className={`font-bold`}>Learn online</h1>
              <h3 className={`${landing.h3}`}>
                Learn graphics, programming, artificial intelligence techniques
                <br />, e-marketing, languages, and website and application
                development
              </h3>
              <button className={`${landing.button} `}>
                Create a new account
              </button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
        

          <div className={`${landing.landing1} ${isDarkMode ? landing.before :""}`}>
            <div className={landing.text}>
              <h1 className={`font-bold`}>Research and Development</h1>
              <h3 className={`${landing.h3}`}>
                Five Scientific Departments more than
                <br />, 30 paper per year more than 20 Lab.
              </h3>
              <button className={`${landing.button} `}>
                Create a new account
              </button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>

          <div className={`${landing.landing2} ${isDarkMode ? landing.before :""}`}>
            <div className={landing.text}>
              <h1 className={`font-bold`}>Post Graduate Diploma</h1>
              <h3 className={`${landing.h3}`}>
                Postgraduate Diploma in Communications and Information
                Engineering
                <br />
                started in 1993. The first specialization is “Artificial
                Intelligence
                <br />
                and Modern Technologies” and the second specialization is
                “Advanced
                <br />
                Communications Networks.
              </h3>
              <button className={`${landing.button} `}>
                Create a new account
              </button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
