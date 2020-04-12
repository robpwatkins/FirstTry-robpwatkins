import React from 'react';

function Homepage() {
  return(
    <div className="main-container">
      <div className="homepage-container">
        <div className="container">
          <div className="overlay">
            <hr className="tippy-top" />
            <div className="title-box">
              <hr className="top-bar"/>
              <div className="first-name">Rob</div>
              <div className="last-name">Watkins</div>
              <hr></hr>
              <div className="web-dev">Web Developer</div>
              {/* <hr className="hr2"></hr> */}
            </div>
            <footer>
            <div className="nav-bar">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
              </ul>
            </div>
            </footer>
          </div>
        </div>
      </div>
      {/* <div className="about-container">About, here.</div> */}
    </div>
  )
}

export default Homepage;