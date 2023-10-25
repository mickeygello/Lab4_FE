import axios from "axios";
import { event } from "jquery";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const AddCategory = () => {
    const [name, setName] = useState()
    const [des, setDes] = useState()
    const nav = useNavigate()
    console.log(name, des);

    const handleCreate = async e =>{
        e.preventDefault();
        axios.post('http://localhost:9999/api/categories/category', {
            name: name,
            description: des
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
                        <textarea
                            name='description'
                            type='textarea'
                            placeholder='Description'
                            // required
                            value={des}
                            onChange={e => setDes(e.target.value)}
                        />
                    </div>
                    <button
                        type='submit'
                        className='add-btn'
                    >
                        Create new Category
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddCategory