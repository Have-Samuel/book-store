import { v4 as uuidv4 } from 'uuid';

const appId = '7rDBw05bg8rr1uCOgCDM';
const BooksURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const ADD_BOOK = './books/ADD_BOOK';
const GET_BOOKS = './books/GET_BOOKS';
const REMOVE_BOOK = './books/REMOVE_BOOK';

// set initial default state for the shelf

export const fetchBooks = async () => {
  const response = await fetch(
    BooksURL,
  );
  const data = await response.json();
  const books = [];
  Object.entries(data).forEach((book) => {
    const bookObj = Object.assign({ id: book[0] }, ...book[1]);
    books.push(bookObj);
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

export const addBook = (newTitle, newAuthor) => async (dispatch) => {
  const newID = uuidv4();
  const bookForAPI = JSON.stringify({
    item_id: newID, title: newTitle, author: newAuthor, category: 'under Construction',
  });
  await fetch(BooksURL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: bookForAPI,
  });
  dispatch({
    type: ADD_BOOK,
    payload: { id: newID, title: newTitle, author: newAuthor },
  });
};

const initialState = {
  books: [],
};

export const removeBook = (id) => async (dispatch) => {
  const apiRemoveURL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books${id}`;
  await fetch(apiRemoveURL, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ item_id: id }),
  });
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return { ...state, books: [...state.books, action.payload] };
    }
    case REMOVE_BOOK: {
      const filteredBooks = state.books.filter((booke) => booke.id !== action.payload);
      return { ...state, books: [...filteredBooks] };
    }
    case GET_BOOKS: {
      return { ...state, books: [...action.payload] };
    }
    default:
      return state;
  }
};
