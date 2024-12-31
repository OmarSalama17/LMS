import { createContext, useState, useEffect} from 'react';
export const ThemeContext = createContext();

const ThemeDark = ({ children }) => {
  
  const [currentPage, setCurrentPage] = useState("upload");
  const [assignments, setAssignments] = useState([]);
const deleteAssignment = (index) => {
    const updatedAssignments = assignments.filter((_, i) => i !== index);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
};
    const navigateTo = (page) => {
  setCurrentPage(page);
};
useEffect(() => {
  const storedAssignments = JSON.parse(localStorage.getItem('assignments'));
  if (storedAssignments) {
    setAssignments(storedAssignments);
  }
}, []);

useEffect(() => {
  if (assignments.length > 0) {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }
}, [assignments]);


const [PageCourse, setPageCourse] = useState("upload");
const [Courses, setCourses] = useState([]);
const deleteCourse = (index) => {
  const updatedCourses = Courses.filter((_, i) => i !== index);
  setCourses(updatedCourses);
  localStorage.setItem("Courses", JSON.stringify(updatedCourses));
};
  const navigateToCourse = (pageCourse) => {
    setPageCourse(pageCourse);
};
useEffect(() => {
  const storedCourses = JSON.parse(localStorage.getItem("Courses"));
  if (storedCourses) {
    setCourses(storedCourses);
  }
}, []);
useEffect(() => {
  if (Courses.length > 0) {
  localStorage.setItem("Courses", JSON.stringify(Courses));
  }
  }, [Courses]);
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(() => {
    const savedemail = localStorage.getItem("email");
    return savedemail ? savedemail : ""; 
  });

    useEffect(() => {
      if (email) {
        localStorage.setItem("email", email);
      }
    }, [email]);
  const users=[
    {userName:"admin",password:"admin", email: "admin@gmail.com" , role:"admin"},
    {userName:"instructor",password:"1234", email: "instructor@gmail.com" ,role:"instructor"},
    {userName:"shady",password:"1234", email: "shadymohammed@gmail.com" ,role:"user"},
    {userName:"omar",password:"1234", email: "omarsalama25x25@gmail.com" ,role:"user"},
    {userName:"LOLO",password:"1234", email: "ibrahemmohammed@gmail.com" ,role:"instructor"},
    {userName:"elmasry",password:"1234", email: "omarelmasry@gmail.com" ,role:"instructor"},
  ]
  const foundUser = users.find(
    (user) => user.userName === username || user.email === username && user.password === password
  );
  const [loggedInUser, setLoggedInUser] = useState(
    () => {
      const savedloggedInUser = localStorage.getItem("loggedInUser");
      return savedloggedInUser ? savedloggedInUser : ""; 
    });
    useEffect(() => {
      if (loggedInUser) {
        localStorage.setItem("loggedInUser", loggedInUser);
      }
    }, [loggedInUser]);
  const [role, setRole] = useState(() => {
    const savedRole = localStorage.getItem("role");
    return savedRole ? savedRole : ""; 
  });
  useEffect(() => {
    if (role) {
      localStorage.setItem("role", role);
    }
  }, [role]);
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  return (
    
    <ThemeContext.Provider value={{ 
      isDarkMode, 
      toggleTheme ,
      role , 
      setRole, 
      users,
      navigateTo ,
      deleteAssignment,
      assignments,
      setAssignments,
      setCurrentPage,
      currentPage,
      PageCourse,
      setPageCourse,
      Courses,
      setCourses,
      deleteCourse,
      navigateToCourse,
      foundUser,
      username, 
      setUsername,
      password, 
      setPassword,
      loggedInUser, setLoggedInUser,
      email, setEmail
      }}>
      
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeDark;