const ADD_BOOK = './books/ADD_BOOK';
const REMOVE_BOOK = './books/REMOVE_BOOK';

// set initial default state for the shelf
const initialState = [];

export const addBook = (newID, newTitle, newAuthor) => (
  {
    type: ADD_BOOK,
    payload: { id: newID, title: newTitle, author: newAuthor },
  }
);
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: {
      return [...state.books, action.payload];
    }
    case REMOVE_BOOK: {
      const filteredBooks = state.filter((book) => book.id !== action.payload.id);
      return [...filteredBooks];
    }
    default:
      return state;
  }
};
