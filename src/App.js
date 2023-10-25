import logo from './logo.svg';
import ProductList from './component/Product/ProductList';
import CategoryList from './component/Category/CategoryList';
import './App.css';
import 'react-bootstrap'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AddCategory from './component/Category/AddCategory';
import AddProduct from './component/Product/AddProduct';
import { createContext } from 'react';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Header from './component/Header/Header';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/createProduct" element={<AddProduct />} />
          <Route exact path="/createCategory" element={<AddCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
