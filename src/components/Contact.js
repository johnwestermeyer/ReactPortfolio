import React from 'react';

function Contact() {
    return(
        <>
        <div className="container-fluid mt-5">
        <div className="col-12 py-3 bg-light h-auto d-inline-block" style={{"width":"600px"}}>
            <h1 style={{"color":"#0a6751"}}>Contact</h1>
            <hr />
            <form className="pr-3">
                <div className="form-group">
                  <label htmlFor="nameInput">Name</label>
                  <input type="name" className="form-control" id="nameInput" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="emailInput">Email Address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" />
                  </div>
                <div className="form-group">
                  <label htmlFor="messageInput">Message</label>
                  <textarea className="form-control" id="messageInput" rows="3"></textarea>
                </div>
                <input className="btn" type="submit" value="Submit" style={{"backgroundColor":"#0a6751", "color":"#FFF"}} />
              </form>
        </div>
        </div>
        </>
    )

}

export default Contact;