import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js';
import {useParams} from 'react-router-dom';
import ProductPage from 'components/ProductPage/ProductPage';
import './ProductDetail.scss';

const ProductDetail = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams()

    useEffect(() => {
        setLoading(true);

        axios.get(`${baseURL}/${params.id}`)
          .then(res => {
              setDetails(res.data);
              setLoading(false);
          })
          .catch(err => {
            setLoading(false);
            console.log(err.message);
          });
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
            {loading ? <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> :
                <>
                    {displayDetails}
                </>
            }
        </div>
    )
}

export default ProductDetail;