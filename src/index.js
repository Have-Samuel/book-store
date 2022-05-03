import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
import { Provider } from 'react-redux';
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';
import store from './redux/configureStore';
=======
import Categories from './components/Categories';
import Books from './components/Books';
import Navbar from './components/Navbar';
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
=======
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 33763f95d19cbf4c464dee3807c0828d7cb437bb
  </React.StrictMode>,
);
