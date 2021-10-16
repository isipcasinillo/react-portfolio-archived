import React from 'react';
import './../assets/styles/contact.css';

function Contact() {
  return (
    <div>
     <div className="container">
       <h1>Contact Me</h1>
       <p>
         <a href="mailto:isipcasinillo@gmail.com">
           <i className="fas fa-envelope icon"> isipcasinillo@gmail.com</i>
          </a>
       </p>

       <p>
         <a href="https://www.linkedin.com/in/isipcasinillo/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin icon"> LinkedIn</i>
         </a>
       </p>

       <p>
         <a href="https://github.com/isipcasinillo" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-github icon"> GitHub</i>
         </a>
       </p>
     </div>
    </div>
    
  );  
}

export default Contact;
