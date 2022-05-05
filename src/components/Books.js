import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './sub-components/book';
import AddBook from './sub-components/AddBook';
// import { getBooksFromApi } from '../redux/books/books';

export default function Books() {
  const books = useSelector((store) => store.bookshelf);
  return (
    <div className="book">
      {books.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          id={book.id}
        />
      ))}
      <AddBook />
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
