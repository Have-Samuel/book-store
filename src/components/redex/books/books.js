const ADD_BOOK = 'NEW_BOOK_ADD';
const REMOVE_BOOK = 'BOOK_REMOVE';
const initialState = [
  {
    id: 1,
    title: 'The Croods 1',
    author: 'Have',
  },
  {
    id: 1,
    title: 'The Croods 2',
    author: 'Have',
  },
];

export const addBook = (title, author) => {
  { type: ADD_BOOK, payload: { title, author,}}
}