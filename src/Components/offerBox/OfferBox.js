import React from 'react';
import './OfferBox.scss';
import ProductImage from '../productImage/ProductImage';



const OfferBox = () => {
    return (
        <div className='offer-box'> 
                <div className='offer-wrapper'>
                    <ProductImage />
                </div> 
        </div>  
    )
}

export default OfferBox;