import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddProduct = () =>{
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [img, setImg] = useState([])
    const [cate, setCate] = useState()



    const nav = useNavigate()
    console.log(name, price, cate);

    const handleCreate = async e =>{
        e.preventDefault();
        axios.post('http://localhost:9999/api/products/product', {
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
                        <input
                            name='category'
                            type='text'
                            placeholder='Category name'
                            required
                            value={cate}
                            onChange={e => setCate(e.target.value)}
                        />
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