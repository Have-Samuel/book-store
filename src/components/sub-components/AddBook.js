import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

export default function AddBook() {
  const dispatch = useDispatch();
  const handleNewBookSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements[0].value;
    const author = event.target.elements[1].value;
    dispatch(addBook(title, author));
  };
  return (
    <div id="add-book">
      <form onSubmit={handleNewBookSubmit}>
        <h2>Add Book</h2>
        <input type="text" name="title" id="title" placeholder="Book Title" required />
        <p>Author</p>
        <input type="text" name="author" id="author" placeholder="Book author" required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
