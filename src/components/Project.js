import React from 'react';

function Project(props) {
    return(
        <div>
            <a href={props.git}>
                <img src={props.img} alt={props.alt} className="image-fluid float-left mr-3 mb-3"/>
            </a>
            <br/>
            <p>{props.desc}</p>
            <p>Technologies Used: {props.tech}</p>
            <a href={props.link}>Live Demo</a>
        </div>
    )

}

export default Project;