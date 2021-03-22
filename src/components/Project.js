import React from 'react';

function Project(props) {
    return(
        <>
        <a href={props.git}>
            <img src={props.img} alt={props.alt} className="image-fluid float-left mr-3 mb-3"/>
        </a>
        </>
    )

}

export default Project;