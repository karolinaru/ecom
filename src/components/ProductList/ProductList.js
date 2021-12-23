import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ProductList.scss';
import OfferBox from 'components/OfferBox/OfferBox';
import {baseURL} from 'helpers/baseURL.js'

const ProductList = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get(baseURL)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      { 
        products.map(product => {
            const {id, img, title, price, place, label, saved} = product;
            return(
              <OfferBox 
                key={id} 
                image={img} 
                title={title} 
                price={price} 
                place={place} 
                label={label}
                saved={saved}
                id={id}
              />
            )
          }
        )
      }
    </ul>
  )
}

export default ProductList;