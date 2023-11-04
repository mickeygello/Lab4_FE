import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import './style.css'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState()
    const [comment, setComment] = useState()
    const [text, setText] = useState()

    useEffect(() => {
        axios.get(`http://localhost:9999/products/${id}`)
            .then((data) => setProduct(data.data.data))
            .then(console.log(product))
            .catch((error) => console.error("Error fetching product", error));
        axios.get(`http://localhost:9999/products/${id}/comments`)
            .then((data) => setComment(data.data.data))
            .then(console.log(comment))
            .catch((error) => console.error("Error fetching product", error));
    }, [product])

    const addComment = async e => {
        e.preventDefault();
        axios.post(`http://localhost:9999/products/${id}/comment`, {
            user: "Tuna",
            text: text
        })
            .then(function (response) {
                console.log(response);
            })
            .then(() => {
                setText('')
              })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    if (!product || !comment) {
        return (
            <div>
                loading...
            </div>
        )
    }


    return (
        <div className="container2">
            <div className="card">
                <img src={process.env.PUBLIC_URL + "/images/excel.png"}/>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
            <div className="comment-holder">
                {comment.map((e) => {
                    return (
                        <div key={e._id}>
                            <p style={{ fontWeight: "bold" }}>{e.user}</p>
                            <p>{e.text}</p>
                            <p>{e.createdAt}</p>
                        </div>
                    )
                })}
            </div>
            <div className="comment-container">
                <form onSubmit={addComment}>
                    <textarea
                        name='text'
                        type='textarea'
                        placeholder='Enter your comment'
                        required
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <br />
                    <input type="submit" name="submit" value="Comment" />
                </form>
            </div>
        </div>
    )
}

export default ProductDetail