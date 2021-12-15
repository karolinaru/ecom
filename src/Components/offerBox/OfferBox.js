import React from 'react';
import './OfferBox.scss';
import ProductImage from 'components/ProductImage/ProductImage';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';

const OfferBox = (props) => {
    return (
        <div className='offer-wrapper'>
            <ProductImage image={props.image}/>
            <div className='offer-box'>
                <div className='title-price'>
                    <p className='title'>{props.title}</p>
                    <p className='price'>{props.price} PLN</p>
                </div>
                <div className='location-heart'>
                    <p className='location'>{props.place}</p>
                    <ObserveBtn />
                </div>
            </div>
        </div> 
    )
}

export default OfferBox;