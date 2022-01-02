import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './ProductList.scss';
import OfferBox from 'components/OfferBox/OfferBox';
import {baseURL} from 'helpers/baseURL.js'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get(baseURL)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
  }, []);

  const [sortType, setSortType] = useState("")

  useEffect(() => {
    const sortArray = type => {
      const types = {
        ASC: "title",
        DSC: "title",
        lowest: "price",
        highest: "price",
      };

      const sortProperty = types[type];

      if (type === "ASC"){
        const sorted = [...products].sort((a,b) => a[sortProperty].toLowerCase() > b[sortProperty].toLowerCase() ? 1 : -1);
        setProducts(sorted);
      } else if (type === "DSC"){
        const sorted = [...products].sort((a,b) => a[sortProperty].toLowerCase() < b[sortProperty].toLowerCase() ? 1 : -1);
        setProducts(sorted);
      } else if (type === "lowest"){
        const sorted = [...products].sort((a,b ) => a[sortProperty] - b[sortProperty]);
        setProducts(sorted);
      } else if (type === "highest"){
        const sorted = [...products].sort((a,b ) => b[sortProperty] - a[sortProperty]);
        setProducts(sorted);
      }
    };
    sortArray(sortType);
  }, [sortType]);

  return (
    <div>
      <div className="sorting-box">
        <label className="sorting-label">Sortuj: </label>
        <select className="sorting-selection" onChange={(e) => setSortType(e.target.value)}>
          <option value="">--Choose an option--</option>
          <option value="ASC">Od A do Z</option>
          <option value="DSC">Od Z do A</option>
          <option value="lowest">Od najtańszych</option>
          <option value="highest">Od najdroższych</option>
        </select>       
      </div>
      <ul className="product-list">
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
    </div>
  )
}

export default ProductList;
