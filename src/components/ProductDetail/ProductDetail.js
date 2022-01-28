import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js';
import {useParams} from 'react-router-dom';
import ProductPage from 'components/ProductPage/ProductPage';

const ProductDetail = () => {
    const [details, setDetails] = useState([]);
    const params = useParams()

    useEffect(() => {
        axios.get(`${baseURL}/${params.id}`)
          .then(res => setDetails(res.data))
          .catch(err => console.log(err));
    }, []);

    const displayDetails = [details] //dlaczego jest error bez []?
        .map(detail => {
            const {id, img, title, price, place, label, saved, createdAt} = detail;
            return(
                <ProductPage 
                    key={id} 
                    image={img} 
                    title={title} 
                    price={price} 
                    place={place} 
                    label={label}
                    saved={saved}
                    id={id}
                    createdAt={createdAt}
                />
            )
        }
    )

    return(
        <div>
            {displayDetails}
        </div>
    )
}

export default ProductDetail;