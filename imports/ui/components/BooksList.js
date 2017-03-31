import React from 'react';

export default BooksList = (props) => (
  <div id={`${props.type}-books`} className={`BooksList ${props.isActive}`}>
    <ul className="books">
      {props.books.map((book) => {
        return (<li key={ book.title } className="book"><i>{ book.title }</i> by { book.author }</li>);
      })}
    </ul>
  </div>
);
