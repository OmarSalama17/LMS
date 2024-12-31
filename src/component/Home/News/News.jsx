import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import img1 from "../../../../img/news 1.jpg"
import img2 from "../../../../img/news 2.jpg"
import img3 from "../../../../img/news 3.jpg"
import img4 from "../../../../img/news 4.jpg"
const News = () => {
  const [activeNews, setActiveNews] = useState(1);
const {isDarkMode}=useContext(ThemeContext)
  const newsData = [
    {
      id: 1,
      imgSrc: img1,
      date: "November 17th, 2024",
      title: "ICT Minister Attends Graduation Ceremony of Academy Cybersecurity Academy First Cohort",
    },
    {
      id: 2,
      imgSrc: img3,
      date: "November 13th, 2024",
      title: "The National Telecommunications Institute announces the commencement of operations at three new locations of Egypt's Digital Innovation Hubs.",
    },
    {
      id: 3,
      imgSrc: img4,
      date: "November 12th, 2024",
      title: "Academy Wins Premier+ Award from Cisco Networking Academy",
    },
    {
      id: 4,
      imgSrc: img2,
      date: "October 17th, 2024",
      title: "Signing of a Memorandum of Understanding between Academy and Dell Technologies Center of Excellence in Egypt",
    },
  ];

  const currentNews = newsData.find((news) => news.id === activeNews);

  return (
    <div className="container">
    <div className="row w-[100%]">
      <div className="col-12">
        <h1 className={`${isDarkMode ? "color" : " "} text-center sm:text-left p-[40px]`}>Latest News</h1>
      </div>
      <div className="col-12 col-lg-8 ">
        <div className="row ">
          {currentNews && (
            <div className="col-12 rounded-15">
              <img src={currentNews.imgSrc} alt="" className="w-full shadow-8 rounded-md" />
              <div className="col-12 my-[25px]">
                <div className="text-[#696969] text-[20px] mt-3 mb-[15px]"><span className="mr-[8px]">📅</span>{currentNews.date}</div>
                <Link
                  to="/aboutus"
                  rel="noopener noreferrer"
                  className="no-underline max-w-[75%] text-[25px] block"
                >
                  {currentNews.title}
                </Link>
              </div>
              <Link
                to="/aboutus"
                rel="noopener noreferrer"
                className="no-underline "
              >
                <button className="btn btn-primary mb-[50px] shadow-8">Read More &gt;&gt;</button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="col-lg-4 d-none d-lg-block">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="row  mb-4 cursor-pointer sm:mb-2"
            onClick={() => setActiveNews(news.id)}
          >
            <div className="col-4 sm:col-12">
              <img src={news.imgSrc} alt="" className="mw-100 shadow-8 rounded-md" />
            </div>
            <div className="col-8 sm:col-12">
              <div className="row">
                <div className="col-12 text-[#696969] text-[20px] mb-[10px]"><span className="mr-[8px]">📅</span>{news.date}</div>
                <div className="col-12">
                  <Link
                    to="/aboutus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    {news.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default News;
