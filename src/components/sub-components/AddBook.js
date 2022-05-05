import React from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();

  const handleNewBookSubmit = (event) => {
    event.preventDefault();
    const { target } = event;
    const title = target.title.value;
    const author = target.author.value;
    dispatch(addBook({ title, author, category: '' }));
    target.title.value = '';
    target.author.value = '';
  };

  return (
    <div id="add-book">
      <form onSubmit={handleNewBookSubmit}>
        <h2>Add Book</h2>
        <p>Title</p>
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <p>Author</p>
        <input type="text" name="author" id="author" placeholder="Book author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
