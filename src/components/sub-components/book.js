import React from 'react';

export default function book({ title, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <small>{author}</small>
      <ul>
<<<<<<< HEAD
        <li>
          <a href="#temp">Comment</a>
        </li>
        <li>
          <a href="#temp">Remove</a>
        </li>
        <li>
          <a href="#temp">Edit</a>
        </li>
=======
        <li><a href="#temp">Comment</a></li>
        <li><a href="#temp">Remove</a></li>
        <li><a href="#temp">Edit</a></li>
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
      </ul>
      <button type="submit">Remove this book</button>
    </div>
  );
}
