import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import { IoFilter } from "react-icons/io5";

const Filter = ({ maxPrice, handlePriceChange , difficultyFilter ,setDifficultyFilter }) => {
  const {isDarkMode}=useContext(ThemeContext)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const[searchTerm,setSearchTerm]=useState("")


  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };



  return (
    <div className="relative p-4 ">
      <button
        onClick={toggleDropdown}
        className={`${isDarkMode ? "color" : "text-black"}  bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
        type="button"
      >
        <IoFilter className="mr-[10px]"/>
        Filter
        <svg
          className="w-4 h-4 ml-2"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div className={`${isDarkMode? "!bg-[#1c1d1f]" : "bg-white"} absolute left-0 mt-2 w-56 p-3  rounded-lg shadow dark:bg-gray-700`}>
          <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
            Category
          </h6>
          <ul className="space-y-2 text-sm">
            {[
              { id: "ALL", label: "ALL", checked: difficultyFilter === "ALL" || true },
              { id: "HARD", label: "HARD " ,checked: difficultyFilter === "HARD" },
              { id: "EASY", label: "EASY " , checked: difficultyFilter === "EASY" },
            ].map((item) => (
              <li key={item.id} className="flex items-center">
                <input
                  id={item.id}
                  checked={difficultyFilter === item.id}
                  onChange={() => setDifficultyFilter(item.id)}
                  type="checkbox"
                  defaultChecked={item.checked}
                  className="w-4  h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label

                  htmlFor={item.id}
                  className={`${isDarkMode? "text-white":" "} ml-2 text-sm font-medium text-gray-900 dark:text-gray-100`}
                >
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              value={maxPrice}
              onChange={handlePriceChange}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:ring-primary-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
              placeholder="Enter price"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
