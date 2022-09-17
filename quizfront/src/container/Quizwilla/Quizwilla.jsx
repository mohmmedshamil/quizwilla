import React, { useState } from 'react'
import "./Quizwilla.scss"
import { Routes, Route, Link } from "react-router-dom";
import Home from '../Home/Home';
import About from '../About/About';
import CreateQuiz from '../CreateQuiz/CreateQuiz';
function Quizwilla() {
    const [headerli, headerList] = useState([{name:"Home",linkTo:"/"},{name:"About",linkTo:"/about"},{name:"Contact Us",linkTo:"/contactus"},{name:"Create Quiz",linkTo:"/createquiz"},{name:"Join Quiz",linkTo:"/joinquiz"}])
  return (
    <div className="quizwilla">
      <header className="header">
        <ul>
          <li className="quizwillaIcon">Quizwilla Icon</li>
          {headerli.map((obj,i) => {
            return (
              <div className="header-li">
                  <Link to={obj.linkTo} key={i}><li>{obj.name}</li></Link>
              </div>
            );
          })}
        </ul>
      </header>
      <div className="routesList">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createquiz" element={<CreateQuiz />} />
      </Routes>
      </div>
    </div>
  );
}

export default Quizwilla