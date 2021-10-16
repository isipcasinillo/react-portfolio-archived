import React from 'react';
import { Link } from 'react-router-dom';
import cjimg from './../assets/images/IMG_0918.JPG';
import './../assets/styles/about.css';

function About() {
  return (
    <div>
      <div className="container">
       
        {/* Title */}
        <div className="row mb-5">
          <h1>Hello, I'm Cyril Casinillo. Great to meet you!.</h1>
        </div>

        {/* Row to hold my picture and about me section */}
        <div className="row">
          
          {/* Column to hold my picture and icons */}
          <div className="col-lg-6">

            <img src={cjimg} alt="cj image profile" className="w-100" />

            <p>Contact Me:</p>
            <div className="row">
              <a href="https://github.com/isipcasinillo" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
              <a href="https://www.linkedin.com/in/isipcasinillo/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
              <a href="mailto:isipcasinnillo@gmail.com"><i className="fas fa-envelope icon"></i></a>
            </div>
            
          </div>

          {/* Column for About Me */}
          <div className="col-lg-6">
            <p className="aboutText">
              I'm from Grand Prairie and my name is Cyril Isip. I am currently a software engineer student at University of Texas at Arlington
            </p>
      
            <p className="aboutText">
              I recently earned my certificate for full stack developer from Southern Methodist University which specialize in MERN stack. I have projects that
              have used technologies such as CSS, Javascript, Node.js, MongoDB, React and Express.
            </p>

            <p className="aboutText">
              On my free time I love to fix my GTR 2016 which I bought salvage and I am trying to get it to work.
            </p>

            <p className="aboutText">
              Check out my <Link to="/portfolio" >portfolio</Link>!
            </p>

            <p className="aboutText">
            I'm experienced in:
              <ul>
                <li>Browser-based Technologies:  HTML5, CSS, JavaScript, jQuery, Bootstrap, and React.js</li>
                <li>Server-side Technologies:  Node.js and Express.js</li>
                <li>Databases:  MySQL, MongoDB, and Mongoose</li>
                <li>API Interaction:  API, JSON, and AJAX</li>
                <li>Deployment:  Git, GitHub Pages, and Heroku</li>
                <li>Other:  Command Line, MVC, Computer Science applied to JavaScript, Quality Assurance, Redux, User Authentication</li>
              </ul>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;
