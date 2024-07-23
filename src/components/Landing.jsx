import React from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Cyprus's Auto Service Platform</h1>
            <h2>
              Find your Auto Service <span className="orange">Now</span>
            </h2>
            <div className="nav__btns">
            <a href="#Mechanics">
              <button className="btn">Auto Mechanics</button>
              </a>
              <a href="#Auto Body Technician">
              <button className="btn">Auto Body Technician</button>
              </a>
              <a href="#Automotive Painter">
              <button className="btn">Automotive Painter</button>
              </a>
              <a href="#Auto Glass Technician">
              <button className="btn">Auto Glass Technician</button>
            </a>
            </div>
          </div>
          <figure className="header__img--wrapper">
           <img src="../assets/wallpaper.jpeg" alt=""></img>
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;