import React from 'react';
import { useSelector } from 'react-redux';
import Book from './sub-components/book';
import AddBook from './sub-components/AddBook';

export default function Books() {
  const books = useSelector((store) => store.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
}
