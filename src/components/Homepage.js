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
          <hr className="hr2"></hr>
          <div className="tabs">
            <div className="tab"></div>
            <div className="tab"></div>
            <div className="tab"></div>
            <div className="tab"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;