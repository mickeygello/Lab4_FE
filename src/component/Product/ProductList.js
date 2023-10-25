import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './style.css';

const ProductList = () => {
    const [Product, setProduct] = useState();

    useEffect(() =>{
        axios.get('http://localhost:9999/api/products/product')
        .then((data) => setProduct(data.data))
        .then(console.log(Product))
        .catch((error) => console.error("Error fetching product", error));
    },[])

    const handleDetail = (id) =>{

    }

    return (
        <div>
            <div className="container">
                <div className="head-name">
                    <h1>Product</h1>
                </div>
                <table style={{ borderCollapse: "collapse" }}>
                    <thead style={{ borderBottom: "1px black solid" }}>
                        <tr style={{ backgroundColor: "white" }}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Product.map((e) => {
                            return (
                                <tr key={e._id} onClick={() => handleDetail(e._id)}>
                                    <td>{e._id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.price}</td>
                                    <td>{e.category.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList