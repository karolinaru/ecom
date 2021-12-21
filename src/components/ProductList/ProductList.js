import React, {useState, useEffect} from 'react';
import axios from 'axios';
import OfferBox from 'components/OfferBox/OfferBox';

const baseURL = 'https://61a7c977387ab200171d2ec9.mockapi.io/list';

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
            const {id, img, title, price, place, label} = product;
            return(
              <OfferBox 
                key={id} 
                image={img} 
                title={title} 
                price={price} 
                place={place} 
                label={label}
              />
            )
          }
        )
      }
    </ul>
  )
}

export default ProductList;