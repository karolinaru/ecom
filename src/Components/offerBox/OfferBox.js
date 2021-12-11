import React from 'react';
import './OfferBox.scss';
import ProductImage from 'components/ProductImage/ProductImage';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';

const OfferBox = () => {
    return (
        <div className='offer-wrapper'>
            <ProductImage />
            <div className='offer-box'>
                <div className='title-price'>
                    <p className='title'>Lorem ipsum dolor sit amet</p>
                    <p className='price'>19,99 PLN</p>
                </div>
                <div className='location-heart'>
                    <p className='location'>Location</p>
                    <ObserveBtn />
                </div>
            </div>
        </div> 
    )
}

export default OfferBox;