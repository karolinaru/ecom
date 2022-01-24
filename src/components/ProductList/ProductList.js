import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './ProductList.scss';
import OfferBox from 'components/OfferBox/OfferBox';
import Sorting from 'components/Sorting/Sorting';
import {baseURL} from 'helpers/baseURL.js'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios.get(baseURL)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        setLoading(false);
        setError(err.message);
      });
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 10;
  const pageVisited = pageNumber * productsPerPage;

  const displayProducts = products
    .slice(pageVisited, pageVisited + productsPerPage)
    .map(product => {
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
  );

  const pageCount = Math.ceil(products.length / productsPerPage);
  const changePage = ({selected}) => {
      setPageNumber(selected)
  }

  return (
    <>
      {error && <div> {error} </div>}
      {loading ? <div>Results are loading...</div> :
        <>
          <Sorting 
            products={products}
            setProducts={setProducts}
          />
          <ul className="product-list">
            {displayProducts}
          </ul>    
          <ReactPaginate 
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBtns'}
            pageClassName={'paginationBtn'}
            previousClassName={'paginationBtn paginationBtn__previousBtn'}
            nextClassName={'paginationBtn paginationBtn__nextBtn'}
            disableClassName={'paginationBtn paginationBtn__paginationDisabled'}
            activeClassName={'paginationBtn paginationBtn__paginationActive'}
          />
        </>
      }    
    </>
  )
}

export default ProductList;
