import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js';
import {useParams} from 'react-router-dom';

const ProductDetail = () => {

    const [details, setDetails] = useState([])

    const params = useParams()

    useEffect(() => {
        axios.get(`${baseURL}/${params.id}`)
          .then(res => setDetails(res.data))
          .catch(err => console.log(err));
    }, []);

    return (
        <h1>A tutaj będzie strona produktu - {details.title}</h1>
    )
}

export default ProductDetail;