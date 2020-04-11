import React from 'react';

function Homepage() {
  return(
    <div className="container">
      <div className="overlay">
        <div className="nav-bar">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* <div className="tabs">
          <div className="tab home">Home</div>
          <div className="tab about">About</div>
          <div className="tab portfolio">Portfolio</div>
          <div className="tab contact">Contact</div>
        </div> */}
        <div className="title-box">
          <hr className="top-bar"/>
          <div className="first-name">Rob</div>
          <div className="last-name">Watkins</div>
          <hr></hr>
          <div className="web-dev">Web Developer</div>
          <hr className="hr2"></hr>
        </div>
        <div className="blog-box">
          <h1>Recent Blog Posts</h1>
          <h6>How Bloggy Should a Good Blog Be?</h6>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ipsum hic similique error nihil quasi architecto impedit unde accusantium modi quibusdam, molestiae eius commodi quam debitis vel quisquam. Et, consequuntur!</p>
          <h6>How Bloggy Should a Good Blog Be?</h6>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ipsum hic similique error nihil quasi architecto impedit unde accusantium modi quibusdam, molestiae eius commodi quam debitis vel quisquam. Et, consequuntur!</p>
          <h6>How Bloggy Should a Good Blog Be?</h6>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus ipsum hic similique error nihil quasi architecto impedit unde accusantium modi quibusdam, molestiae eius commodi quam debitis vel quisquam. Et, consequuntur!</p>
        </div>
      </div>
    </div>
  )
}

export default Homepage;