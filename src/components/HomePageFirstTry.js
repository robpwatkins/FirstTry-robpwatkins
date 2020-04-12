import React from 'react';
import Bill from '../img/Bill-thumb.jpg';

const HomePageFirstTry = () => (
  <div>
    <header>
      <hr/>
      <nav>
        <ul>
          <li className="home">Home</li>
          <li className="about">About</li>
          <li className="portfolio">Portfolio</li>
          <li className="contact">Contact</li>
        </ul>
      </nav>
    </header>
    <div className="title-box">
      <div className="face-box">
        <div className="inner-face">
          <img src={Bill} alt=""/>
        </div>
      </div>
      {/* <div className="name-box">
        Rob Watkins
      </div>
      <hr className="hr-dev"/>
      <div className="web-dev">
        Web Developer
      </div> */}
      {/* <div className="placard-name">
        Rob Watkins
      </div> */}
      <div className="placard-web-dev">
        Rob Watkins
      </div>
    </div>
  </div>
)

export default HomePageFirstTry;