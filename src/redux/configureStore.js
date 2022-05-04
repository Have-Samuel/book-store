import { configureStore, combineReducers } from '@reduxjs/toolkit';
import Books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ bookshelf: Books, checkStatus: categories });

const store = configureStore({ reducer: rootReducer });

export default store;
