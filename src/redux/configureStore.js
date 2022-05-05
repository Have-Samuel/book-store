import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ bookshelf: Books, checkStatus: categories });
const middleWare = applyMiddleware(thunk);
const store = configureStore({ reducer: rootReducer }, middleWare);

export default store;
