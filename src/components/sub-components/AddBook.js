import React from 'react';

export default function AddBook() {
  return (
    <div id="add-book">
      <form action="#" method="POST">
        <input type="text" name="title" id="title" placeholder="Book Title" />
        <input type="text" name="author" id="author" placeholder="Book author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}
