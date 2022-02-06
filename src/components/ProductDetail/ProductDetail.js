import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js';
import {useParams} from 'react-router-dom';
import ProductPage from 'components/ProductPage/ProductPage';
import './ProductDetail.scss';
import useAPIError from 'components/UseAPIError/UseAPIError'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';


const ProductDetail = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams()
    
    const {addError} = useAPIError();
    
    useEffect(() => {
        
        axios.get(`${baseURL}/${params.id}`)
        .then(res => {
            setDetails(res.data);
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
            addError(`${err}`, err.response.status);
            setTimeout(addError, 3000);    
        });
    }, [params.id, addError]);
    
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
        {loading
            ? <LoadingSpinner />
            : <>{displayDetails}</>
        }
        </div>
        )
    }
        
export default ProductDetail;