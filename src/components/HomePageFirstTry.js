import React from 'react';
import Bill from '../img/RPW-temp-pic.png';
import { Dehaze } from '@material-ui/icons';

const HomePageFirstTry = () => (
  <div>
    <header>
      <hr/>
      <div className="header-box">
        <div className="name-box">
          <div className="name">Rob Watkins</div>
        </div>
        <div className="icon-box">
          <Dehaze />
        </div>
      </div>
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
      {/* <div className="placard-outline">
        <div className="placard-web-dev">
          Rob Watkins
          <hr className="hr-web-dev"/>
          <div className="web-dev">Web Developer</div>
        </div>
      </div> */}
    </div>
  </div>
)

export default HomePageFirstTry;