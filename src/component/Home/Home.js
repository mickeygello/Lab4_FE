import React from "react";
import ProductList from "../Product/ProductList";
import CategoryList from "../Category/CategoryList";

const Home = () =>{
    return(
        <div>
            <ProductList/>
            <CategoryList/>
        </div>
    )
}

export default Home