import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Book from './sub-components/book';
import AddBook from './sub-components/AddBook';

export default function Books() {
  const books = useSelector((store) => store.bookshelf);
  return (
    <div>
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

Book.PropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
