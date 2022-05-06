/* eslint-disable import/named */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import Book from './sub-components/book';
import AddBook from './sub-components/AddBook';
import { getBooks } from '../redux/books/books';

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookshelf);
  useEffect(() => {
    dispatch(getBooks());
  }, []);
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

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
