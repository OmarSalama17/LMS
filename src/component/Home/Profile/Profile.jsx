import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../ThemeDark/ThemeDark'
import { useNavigate } from 'react-router-dom'
import ReactNiceAvatar from 'react-nice-avatar';
import logo from "../../../../img/logoins.png"
import logo1 from "../../../../img/avatar.png"
import logo2 from "../../../../img/avatar (1).png"
import logo3 from "../../../../img/vecteezy_default-male-avatar-profile-icon-social-media-chatting_25337669.jpg"
const logoAdmin=<img
alt=""
src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
className="w-[40px] h-[40px] rounded-full"
/>;
const logoUser=<img src ={logo1} className='w-[40px] h-[40px] rounded-full' />
const logoUser2=<img src ={logo2} className='w-[40px] h-[40px] rounded-full' />
const logoUser3=<img src ={logo3} className='w-[40px] h-[40px] rounded-full' />
const logoinstructor =<img
alt=""
src={logo}
className="w-[40px] h-[40px] bg-[lavenderblush] rounded-full"
/>;
export default function Profile() {
    const {role,setRole,isDarkMode,loggedInUser }= useContext(ThemeContext)

        const navigate = useNavigate();
        const handleLogout = () => {
            localStorage.removeItem("role");
            setRole(""); 
            navigate("LMS/");
          };
    return(
        <Menu as="div" className="relative ml-3">
        <div>
          <MenuButton className={`relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800`}>
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            {role==="admin" ? logoAdmin : loggedInUser === "omar" ? logoUser : loggedInUser === "elmasry" ? logoUser2 : role === "instructor" ? logoinstructor : logoUser3 }
          </MenuButton>
        </div>
        <MenuItems
          transition
          className={`${isDarkMode ? "dark color":"bg-white"} absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in`}
        >
            <Link
              to="/LMS/Dashboard"
              className={` ${isDarkMode ? "dark color" : "text-black"} block no-underline px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:outline-none`}
            >
              Dashboard
            </Link>
        <MenuItem>
            <Link
              to="/LMS/pageprofile"
              className={` ${isDarkMode ? "dark color" : "text-black"} block no-underline px-4 py-2 text-sm  data-[focus]:bg-gray-100 data-[focus]:outline-none`}
            >
              Your Profile
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              onClick={handleLogout}
              className={` ${isDarkMode ? "dark color" : "text-black"} !block no-underline px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none`}
            >
              Sign out
            </Link>
          </MenuItem>
        </MenuItems>
      </Menu>
    )
}