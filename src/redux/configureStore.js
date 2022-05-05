import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import Books from './books/books';
import categories from './categories/categories';

const rootReducer = combineReducers({ bookshelf: Books, checkStatus: categories });
const middleWare = applyMiddleware(thunk, logger);
const store = configureStore({ reducer: rootReducer }, middleWare);

export default store;
