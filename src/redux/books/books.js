const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

// set initial default state for the shelf
const initialState = [
  {
    id: 1,
    title: 'The Croods 1',
    author: 'Have',
  },
  {
    id: 2,
    title: 'The Croods 2',
    author: 'Have',
  },
];

export const addBook = (title, author) => (
  {
    type: ADD_BOOK,
    payload: { title, author },
  }
);
export const removeBook = (id) => ({ type: REMOVE_BOOK, payload: id });

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state.books, action.payload];
    
    case REMOVE_BOOK: 
      return state.filter((book) => (book.id !== action.payload ? book : false));

    default:
      return state;
  }
};