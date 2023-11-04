import './App.css';
import 'react-bootstrap'
import AddCategory from './component/Category/AddCategory';
import AddProduct from './component/Product/AddProduct';
import Home from './component/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/Header/Header';
import ProductDetail from './component/Product/ProductDetail';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route exact path="/createProduct" element={<AddProduct />} />
          <Route exact path="/createCategory" element={<AddCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
