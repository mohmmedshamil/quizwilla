import React from 'react'
import './about.scss'
import didyouknow from '../../Assets/images/didyouknow.jpg'
import quiz from '../../Assets/images/quiz.jpg'
function About() {
  return (
      <div className="aboutus">
          <div className="aboutusSet">
              <div className="contents">
                  <h1>Lorem ipsum dolor sit amet consectetur,</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis hic voluptas consequuntur tempora laborum fugiat ipsam, sed assumenda! Accusantium possimus expedita ex ducimus id consequatur sed alias sequi repellendus dolore!</p>
              </div>
              <div className="images">
                <img src={didyouknow} alt="" />
              </div>
          </div>
          <div className="aboutusSet">
              <div className="images">
                <img src={quiz} alt="" />
              </div>
              <div className="contents">
                  <h1>Lorem ipsum dolor sit amet consectetur,</h1>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis hic voluptas consequuntur tempora laborum fugiat ipsam, sed assumenda! Accusantium possimus expedita ex ducimus id consequatur sed alias sequi repellendus dolore!</p>
              </div>
          </div>
      </div>
  )
}

export default About