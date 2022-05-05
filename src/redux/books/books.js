import { v4 as uuid } from 'uuid';
import { fetchBooks, createBook, deleteBook } from './books-api';

const appId = 'NXcpJ7tVwe6VklFiOYLn';
const BooksUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}/books`;

const ADD_BOOK = './books/ADD_BOOK';
const DELETE_BOOK = './books/REMOVE_BOOK';
const GET_BOOKS = './books/GET_BOOKS';

const initialState = {
  books: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, ...action.payload];
    case GET_BOOKS:
      return [...state, ...action.payload];
    case DELETE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export const getBooks = async (dispatch) => {
  let books;
  try {
    books = await fetchBooks();
    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  } catch (err) {
    return err;
  }
  return books;
};

export const addBook = (book) => async (dispatch) => {
  try {
    const newBook = await createBook({ ...book, item_id: uuid() });
    dispatch({
      type: ADD_BOOK,
      payload: newBook,
    });
    return true;
  } catch (err) {
    return err;
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await deleteBook(id);
    dispatch({
      type: DELETE_BOOK,
      id,
    });
    return true;
  } catch (err) {
    return err;
  }
};
