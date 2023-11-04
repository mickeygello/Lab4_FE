import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
    const [categories, setCategory] = useState()
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [img, setImg] = useState([])
    const [cate, setCate] = useState()

    useEffect(() => {
        axios.get('http://localhost:9999/categories/')
            .then((data) => setCategory(data.data.data))
            .then(console.log(categories))
            .catch((error) => console.error("Error fetching category", error));
    })

    const nav = useNavigate()
    console.log(name, price, cate);

    const handleCreate = async e => {
        e.preventDefault();
        axios.post('http://localhost:9999/products/', {
            name: name,
            price: price,
            images: img,
            category: cate
        })
            .then(function (response) {
                console.log(response);
            })
            .then(nav(`/`))
            .catch(function (error) {
                console.log(error);
            });
    }

    if (!categories) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            <form onSubmit={handleCreate}>
                <div className='create-form'>
                    <div className='form-group'>
                        <input
                            name='name'
                            type='text'
                            placeholder='Name'
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                        <input
                            name='price'
                            type='number'
                            placeholder='Price'
                            required
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                        />
                        {/* <input
                            name='category'
                            type='text'
                            placeholder='Category name'
                            required
                            value={cate}
                            onChange={e => setCate(e.target.value)}
                        /> */}
                        <select
                            onChange={(e) => setCate(e.target.value)}
                            value={cate}
                        >
                            <option value="">Select a category</option>
                            {categories.map((e) => (
                                <option key={e._id} value={e.name}>
                                    {e.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type='submit'
                        className='add-btn'
                    >
                        Create new Product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;