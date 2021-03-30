import React from 'react';
import headshot from "../assets/me.png";
import resume from "../assets/John-Westermeyer.pdf"

function Main() {
    return(
        <>
        <div className="container-fluid mt-5">
        <div className="col-12 py-5 bg-light" style={{"width": "1000px"}}>
        <h1 style={{"color":"#0a6751"}}>About Me</h1>
        <hr/>
        <img src={headshot} alt="headshot" className="image-fluid float-left mr-1 pt-1" />
        <p>Hello, my name is John Westermeyer. I am a Front-End Web Developer leveraging a background in retail to build a more intuitive user experience on the web. Known as an innovative problem-solver passionate about developing apps. Strengths in meeting deadlines, creativity and teamwork. Known among staff for a strong work ethic no matter the complexity of the project.
        </p>
        <p>
        Languages: JavaScript, HTML, CSS, SQL, React, NodeJs, JQuery, Bootstrap
        </p>
        <p>
        Located in Long Beach, California.
        </p>  
        <p>
        Contact Info:
        </p>
        <ul className="links">
          <li><a href="https://github.com/johnwestermeyer">GitHub</a></li>
          <li><a href="https://linkedin.com/in/john-westermeyer-310a922/">LinkedIn</a></li>
          <li>Phone: (314) 225-9791</li>
          <li>Email: johnwestermeyer@gmail.com</li>  
          <li><a href={resume}>My Resume (pdf)</a></li>
        </ul>
      </div>
    </div>
        </>
    )

}

export default Main;