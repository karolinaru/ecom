import React from 'react';
import axios from 'axios';
import OfferBox from 'components/OfferBox/OfferBox';

const baseURL = 'https://61a7c977387ab200171d2ec9.mockapi.io/list';

class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get(baseURL)
      .then(res => {
        const products = res.data;
        this.setState({ products });
        console.log(this.state.products)
      })
      .catch(er => console.log(er))
  }

  render() {
    return (
      <ul>
        {
          this.state.products
            .map(product => 
              <OfferBox key={product.id} image={product.img} title={product.title} price={product.price} place={product.place} label={product.label}/>
            )
        }
      </ul>
    )
  }
}

export default ProductList;