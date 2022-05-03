import React from 'react';
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

export default function AddNewBook() {
  const dispatch = useDispatch();
  const handleNewBookSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements[0].value;
    const author = event.target.elements[1].value;
    dispatch(addBook(title, author));
  };
  return (
    <div id="add-new-book">
      <form action="#" method="POST" onSubmit={handleNewBookSubmit}>
=======

export default function AddBook() {
  return (
    <div id="add-book">
      <form action="#" method="POST">
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <input type="text" name="author" id="author" placeholder="Book author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
