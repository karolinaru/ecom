import React from 'react';
import './OfferBox.scss';
import ProductImage from 'components/ProductImage/ProductImage';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';

const OfferBox = ({image, title, price, place, label}) => {
    return (
        <div className='offer-wrapper'>
            <ProductImage image={image} label={label}/>
            <div className='offer-box'>
                <div className='title-price'>
                    <p className='title'>{title}</p>
                    <p className='price'>{price} PLN</p>
                </div>
                <div className='location-heart'>
                    <p className='location'>{place}</p>
                    <ObserveBtn />
                </div>
            </div>
        </div> 
    )
}

export default OfferBox;