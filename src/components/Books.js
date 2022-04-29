import React from 'react';
import Book from './sub-components/book';
import AddBook from './sub-components/AddBook';

export default function Books() {
  const books = [
    {
      id: 1,
      title: 'The Croods 1',
      author: 'Have',
    },
    {
      id: 1,
      title: 'The Croods 2',
      author: 'Have',
    },
  ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </div>
  );
}
