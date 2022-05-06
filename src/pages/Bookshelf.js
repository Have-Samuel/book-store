import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from '../components/Books';
import BookForm from '../components/BookForm';
import { getBooksFromAPI } from '../redux/books/books';

const Bookshelf = () => {
  const books = useSelector((state) => state.bookshelf);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooksFromAPI());
  }, []);

  return (
    <>
      <div className="bookContainer">
        <ul className="ul-book">
          {books.books.map((book) => (
            <li className="bookitem" key={book.id}>
              <p className="categogory">Action</p>
              <Book id={book.id} title={book.title} author={book.author} />
            </li>
          ))}
        </ul>
        <BookForm />
      </div>
    </>
  );
};
export default Bookshelf;
