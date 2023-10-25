import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import './style.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
    const [Product, setProduct] = useState();
    const nav = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:9999/api/products/product')
            .then((data) => setProduct(data.data))
            .then(console.log(Product))
            .catch((error) => console.error("Error fetching product", error));
    }, [])

    if (!Product) {
        return (
            <div>
                loading...
            </div>
        )
    }

    const handleDetail = (id) => {

    }

    return (
        <div>
            <div className="container">
                <div className="head-name">
                    <h1>Product List</h1>
                    <button className='add-btn' onClick={() => nav(`/createProduct`)}>Add Product</button>
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