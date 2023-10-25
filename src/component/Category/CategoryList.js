import axios from "axios";
import React, { useEffect, useState } from "react";


const CategoryList = () =>{
    const [category, setCategory] = useState();

    useEffect(() =>{
        axios.get('http://localhost:9999/api/categories/category')
        .then((data) =>setCategory(data.data))
        .then(console.log(category))
        .catch((error) => console.error("Error fetching category", error));
    })

    if(!category){
        return(
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="head-name">
                    <h1>Category List</h1>
                </div>
                <table style={{ borderCollapse: "collapse" }}>
                    <thead style={{ borderBottom: "1px black solid" }}>
                        <tr style={{ backgroundColor: "white" }}>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {category.map((cate) => {
                            return (
                                <tr key={cate._id} >
                                    <td>{cate._id}</td>
                                    <td>{cate.name}</td>
                                    <td>{cate.description}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CategoryList