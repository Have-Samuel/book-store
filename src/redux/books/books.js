import { v4 as uuid } from 'uuid';

const appId = 'NXcpJ7tVwe6VklFiOYLn';
const BooksUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';
const GET_BOOKS = './books/GET_BOOKS';

export const fetchBooks = async () => {
  const response = await fetch(
    BooksUrl,
  );
  const data = await response.json();
  const books = [];
  Object.entries(data).forEach((book) => {
    books.push(...book[1]);
    console.log({ ...book[1], id: book[0] });
  });
  return books;
};

export const getBooksFromApi = () => async (dispatch) => {
  const books = await fetchBooks();
  dispatch({
    type: GET_BOOKS,
    payload: books,
  });
};

export const addBook = (newTitle, newAuthor) => {
  const newID = uuid();
  return {
    type: ADD_BOOK,
    payload: { id: newID, title: newTitle, author: newAuthor },
  };
};

const initialState = {
  books: [],
};

export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return { ...state, books: [...state.books, action.payload] };
    }
    case REMOVE_BOOK: {
      const filteredBooks = state.books.filter(
        (book) => book.id !== action.payload,
      );
      return { ...state, books: [...filteredBooks] };
    }
    case GET_BOOKS: {
      return { ...state, books: [...action.payload] };
    }
    default:
      return state;
  }
};
