import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './ProductList.scss';
import OfferBox from 'components/OfferBox/OfferBox';
import Sorting from 'components/Sorting/Sorting';
import {baseURL} from 'helpers/baseURL.js'
import UseAPIError from 'components/UseAPIError/UseAPIError'
import LoadingSpinner from 'components/LoadingSpinner/LoadingSpinner';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {addError} = UseAPIError();

  useEffect(() => {
    axios.get(baseURL)
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        addError(`${err}`, err.response.status);
        setTimeout(addError, 3000);
      });
  }, [addError]);

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
      {loading 
      ? <LoadingSpinner /> 
      : <>
          <Sorting 
          products={products}
          setProducts={setProducts}
          /> 
          <ul className='product-list'>
            {displayProducts}
          </ul>
          {pageCount > 1 ? 
          <ReactPaginate 
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'pagination'}
            pageClassName={'pagination__btn'}
            previousClassName={'pagination__btn pagination__btn--previousBtn'}
            nextClassName={'pagination__btn pagination__btn--nextBtn'}
            disableClassName={'pagination__btn pagination__btn--paginationDisabled'}
            activeClassName={'pagination__btn pagination__btn--paginationActive'}
          />
          : ''}
        </>
      }
    </>
  )
}

export default ProductList;
