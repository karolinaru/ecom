import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import './ProductList.scss';
import OfferBox from 'components/OfferBox/OfferBox';
import Sorting from 'components/Sorting/Sorting';
import {baseURL} from 'helpers/baseURL.js'

const ProductList = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      axios.get(baseURL)
        .then(res => setProducts(res.data))
        .catch(err => console.log(err));
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

    <div>    
      
      <Sorting 
        products={products}
        setProducts={setProducts}
      />

      <ul className="product-list">
        {displayProducts}
      </ul>

      <div className={'pagination'}>
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
      </div>
    </div>
  )
}

export default ProductList;
