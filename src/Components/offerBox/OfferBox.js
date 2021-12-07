import React from 'react';
import './OfferBox.scss';
import ProductImage from 'components/ProductImage/ProductImage';
import Title from 'components/Title/Title';
import Price from 'components/Price/Price';



const OfferBox = () => {
    return (
        <div className='offer-box'> 
                <div className='offer-wrapper'>
                    <ProductImage />
                    <Title />
                    <Price />
                </div> 
        </div>  
    )
}

export default OfferBox;