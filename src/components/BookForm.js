import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  return (
    <form action="submit">
      <label htmlFor="title">
        <h2>Title</h2>
        <input type="text" name="title" id="title" placeholder="Add Title..." />
      </label>
      <label htmlFor="title">
        <p>Author</p>
        <input type="text" name="author" id="author" placeholder="Add Author..." />
      </label>
      <button
        onClick={(e) => {
          // prevents page reset
          e.preventDefault();

          // establishes values from the form fields into variables for passing into dispatch
          const newTitle = e.target.parentElement.title.value;
          const newAuthor = e.target.parentElement.author.value;

          dispatch(addBook(newTitle, newAuthor));

          // resets the form inputs
          e.target.parentElement.title.value = '';
          e.target.parentElement.author.value = '';
        }}
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookForm;
