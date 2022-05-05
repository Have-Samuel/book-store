import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

export default function book({ title, author, id }) {
  const dispatch = useDispatch();
  const handleRemoveBook = (event) => {
    dispatch(removeBook(event.target.getAttribute('id')));
  };
  return (
    <div>
      <h3>{title}</h3>
      <small>{author}</small>
      <ul>
        <li><a href="#temp">Comment</a></li>
        <li><a href="#temp">Edit</a></li>
        <li><a href="#temp" id={id} onClick={handleRemoveBook}>Remove</a></li>
      </ul>
      {/* <button type="submit" id={id} onClick={handleRemoveBook}>
        Remove this book
      </button> */}
    </div>
  );
}
