import React, { useState, useEffect } from "react";
import Book  from "../components/ui/Book"


const Books = ({ books: initalBooks }) => {
    const [books, setBooks] = useState(initalBooks);
   
   
    function filterBooks(filter) {
      console.log (filter);
          if (filter ===  "LOW_TO_HIGH") {
          setBooks(
            books
              .slice()
              .sort(
                (a, b) =>
                  (a.salePrice || a.originalPrice) -
                  (b.salePrice || b.originalPrice)
              )
          );
              }
   
   
        if (filter === "HIGH_TO_LOW") {
           setBooks(
            books
              .slice()
              .sort(
                (a, b) =>
                  (b.salePrice || b.originalPrice) -
                  (a.salePrice || a.originalPrice)
              )
          );
              }
   
   
        if (filter === "RATING") {
           setBooks(books.slice().sort((a, b) => b.rating - a.rating));
      }
    }
   
  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  All Auto Specialists
                </h2>
                <select
                  id="filter" defaultValue={"DEFAULT"}
                  onChange={(event) => filterBooks(event.target.value)}
                  
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="LOW_TO_HIGH">Auto Mechanics</option>
                  <option value="HIGH_TO_LOW">Auto Body Technician</option>
                  <option value="HIGH_TO_LOW">Automotive Painter</option>
                  <option value="HIGH_TO_LOW">Auto Glass Technician </option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books && books.map((book) => {
               return <Book book={book} key={book.id} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;