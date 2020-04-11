import React from 'react';

function Homepage() {
  return(
    <div className="container">
      <div className="overlay">
        <div className="content-box">
          <div className="first-name">Rob</div>
          <div className="last-name">Watkins</div>
          <hr></hr>
          <div className="web-dev">Web Developer</div>
          <div className="hr-tabs">
            <hr className="hr2"></hr>
            <div className="tabs">
              <div className="tab home">Home</div>
              <div className="tab about">About</div>
              <div className="tab portfolio">Portfolio</div>
              <div className="tab contact">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;