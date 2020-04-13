import React from 'react';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

function Homepage() {

  return(
    <div className="main-container">
      <div className="homepage-container">
        <div className="container">
          <div className="overlay">
            <hr className="tippy-top" />
            <div className="title-box">
              {/* <hr className="top-bar"/> */}
              <div className="first-name">Rob</div>
              <div className="last-name">Watkins</div>
              <hr></hr>
              <div className="web-dev">Web Developer</div>
              {/* <hr className="hr2"></hr> */}
            </div>
            <div className="fab-box">
              <Fab>
                <Add />
              </Fab>
            </div>
            <footer>
            <div className="nav-bar">
              <ul>
                <li className="home">Home</li>
                <li className="about">About</li>
                <li className="portfolio">Portfolio</li>
                <li className="contact">Contact</li>
              </ul>
            </div>
            </footer>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h1>About Me</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti est, recusandae numquam optio non dicta soluta id repellendus, mollitia aut fugit totam odio possimus eos facilis quae laudantium ex.</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;