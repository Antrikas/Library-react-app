import React from "react";
import Book from "./ui/Book";
import BestBooks from "./ui/BestBooks";

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
           Mechanics <span className="purple">In</span> <a href="#Mechanics">
              <button className="btn">Nicosia</button>
              </a>
          </h2>
          <BestBooks />
        </div>
      </div>
    </section>
  );
};

export default Featured;