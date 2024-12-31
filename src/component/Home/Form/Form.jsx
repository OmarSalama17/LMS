import { useContext, useState } from "react";
import styles from './Form.module.css'; 
import { IoCloseSharp } from "react-icons/io5";
import { ThemeContext } from "../ThemeDark/ThemeDark";
import { useNavigate } from "react-router-dom";


const Form = ({click , login}) => {
        const navigate = useNavigate("")
  const {isDarkMode ,setRole , users , username, setUsername , password,email, setEmail, setPassword , foundUser, setLoggedInUser}=useContext(ThemeContext)


    const handelUsername= (e)=>{
      setUsername(e.target.value)
    }
    const handelPassword= (e)=>{
      setPassword(e.target.value)
    }
  
    const handleLogin = (e) => {
      e.preventDefault();

      if (foundUser) {
        setRole(foundUser.role);
        setLoggedInUser(foundUser.userName)
        setEmail(foundUser.email)
        if (foundUser.role === "admin") {
          navigate("/LMS")
          login()
        } else if(foundUser.role === "user"){
            navigate("/LMS")
            login()
        }else if(foundUser.role === "instructor"){
          navigate("/LMS")
          login()
        }
        }
      else {
        alert("The password or username is incorrect");
      }
    };
    

  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
      <div className={`${isDarkMode?"!bg-[#1c1d1f] color":""} ${styles.wrapper} fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
        <div className="flex justify-end"><button className="text-[21px]" onClick={click}><IoCloseSharp/></button></div>
        <div className={styles["title-text"]}>
          <div className={`${styles.title} ${isLogin ? styles.login : styles.signup}`}>
            {isLogin ? "Login" : "Signup"}
          </div>
        </div>
        <div className={styles["form-container"]}>
          <div className={styles["slide-controls"]}>
            <label
              htmlFor="login"
              className={`${styles.slide} ${styles.login} ${isLogin ? styles.active : ""} text-black`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className={`${styles.slide} ${styles.signup} ${!isLogin ? styles.active : ""}`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </label>
            <div className={`${styles["slider-tab"]} ${isLogin ? styles.toLeft : styles.toRight}`}></div>
          </div>
          <div className={styles["form-inner"]}>
            {isLogin ? (
              <form action="#" className={styles.login}>
                <div className={styles.field}>
                  <input type="text" placeholder="Email Address" required  onChange={handelUsername}/>
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Password" required  onChange={handelPassword}/>
                </div>
                <div className={styles["link-link"]}>
                  <a href="#">Forgot password?</a>
                </div>
                <div className={`${styles.field} ${styles.btn}`}>
                  <div className={styles["btn-layer"]}></div>
                  <input type="submit" value="Login"  onClick={handleLogin}/>
                </div>
                <div className={styles["signup-link"]}>
                  Not a member? <a onClick={toggleForm}>Signup now</a>
                </div>
              </form>
            ) : (
              <form action="#" className={styles.signup}>
                <div className={styles.field}>
                  <input type="text" placeholder="Email Address" required />
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Password" required />
                </div>
                <div className={styles.field}>
                  <input type="password" placeholder="Confirm password" required />
                </div>
                <div className={`${styles.field} ${styles.btn}`}>
                  <div className={styles["btn-layer"]}></div>
                  <input type="submit" value="Signup" />
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
  );
};

export default Form;
