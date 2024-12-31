import { ThemeContext } from '../ThemeDark/ThemeDark';
import styles from './Contact.module.css'; 
import { useState, useEffect, useContext } from 'react';

export default function Contact({setFormData,formData}){
const {isDarkMode} = useContext(ThemeContext)
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData(storedData); 
    }
  }, [setFormData]);

  const handleSend = (event) => {
    event.preventDefault();

    const newEntry = { name, email, message };
    const updatedFormData = [...formData, newEntry];

    localStorage.setItem("formData", JSON.stringify(updatedFormData));

    setFormData(updatedFormData); 

    setName("");
    setEmail("");
    setMessage("");
  };



    return (
<div className={styles.body}>
<section>
            <div className={styles["section-header"]}>
            <div className={styles.container}>
              <h2>Contact Us</h2>
              <p>
                  "If you have any inquiries or feedback, feel free to contact us using the information 
                   below or by filling out the form and sending your message. We are here to assist you and will
                   be happy to respond to all your questions and help you at any time.               
              </p>
            </div>
          </div>
    
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles["contact-info"]}>
                <div className={styles["contact-info-item"]}>
                  <div className={styles["contact-info-icon"]}>
                    <i className="fas fa-home"></i>
                  </div>
    
                  <div className={styles["contact-info-content"]}>
                    <h4>Address</h4>
                    <p>
                      4671 Sugar Camp Road,
                      <br /> Owatonna, Minnesota, <br />55060
                    </p>
                  </div>
                </div>
    
                <div className={styles["contact-info-item"]}>
                  <div className={styles["contact-info-icon"]}>
                    <i className="fas fa-phone"></i>
                  </div>
    
                  <div className={styles["contact-info-content"]}>
                    <h4>Phone</h4>
                    <p>571-457-2321</p>
                  </div>
                </div>
    
                <div className={styles["contact-info-item"]}>
                  <div className={styles["contact-info-icon"]}>
                    <i className="fas fa-envelope"></i>
                  </div>
    
                  <div className={styles["contact-info-content"]}>
                    <h4>Email</h4>
                    <p>ntamerrwael@mfano.ga</p>
                  </div>
                </div>
              </div>

              <div className={`${styles["contact-form"]} ${isDarkMode ? "dark color" : " "} rounded-md`}>
                <form
                 action="" id={styles["contact-form"]}
                 onSubmit={handleSend}
                 >
                  <h2>Send Message</h2>
                  <div className={styles["input-box"]}>
                    <input
                    className='rounded-md'
                     type="text" required name=""
                          value={name}
                     onChange={(event)=>{
                      setName(event.target.value)
                     }}
                      />
                    <span>Full Name</span>
                  </div>
    
                  <div className={styles["input-box"]}>
                    <input
                    className='rounded-md'
                     type="email" required name=""
                          value={email}
                      onChange={(event)=>{
                      setEmail(event.target.value)
                     }}
                     />
                    <span>Email</span>
                  </div>
    
                  <div className={styles["input-box"]}>
                    <textarea
                    className='rounded-md'
                     required name=""
                        value={message}
                     onChange={(event)=>{
                     setMessage(event.target.value)
                     }}>
                     </textarea>
                    <span>Type your Message...</span>
                  </div>
    
                  <div className={styles["input-box"]}>
                    <input type="submit" value="Send" name="" />
                  </div>
                </form>
              </div>
            </div>
          </div>
      </section>
</div>
    );
};








