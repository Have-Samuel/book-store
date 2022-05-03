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
<<<<<<< HEAD
      id: 2,
=======
      id: 1,
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
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
