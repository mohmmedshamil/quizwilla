import React from 'react'
import "./home.scss"
import didyouknow from '../../Assets/images/didyouknow.jpg'
import quiz from '../../Assets/images/quiz.jpg'
function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="content-text">
          <h1>Create. Share. Quiz.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, sint
            quia. Voluptate possimus nulla aut, iure ea molestias saepe,
            voluptatem quos perspiciatis voluptas est itaque officia maxime
            aliquid minus dolore.
          </p>
          <div className="buttons">
              <button>Create</button>
              <button>Join</button>
          </div>
        </div>
      </div>
      <div className="colorbakground">
      <div className="absolute-image">
        <div className="images">
          <img src={didyouknow} alt="" />
          <img src={quiz} alt="" />
          <img src={didyouknow} alt="" />
          <img src={quiz} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home