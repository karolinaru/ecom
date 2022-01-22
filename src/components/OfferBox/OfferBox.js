import React from 'react';
import './OfferBox.scss';
import ProductImage from 'components/ProductImage/ProductImage';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';
import {Link} from 'react-router-dom';

const OfferBox = ({image, title, price, place, label, saved, id}) => {
    return (
        <li className='offer-wrapper'>
            <ProductImage image={image} label={label}/>
            <div className='offer-box'>
                <div className='title-price'>
                    <Link className='title' to={`/${id}`}>{title}</Link>
                     <p className='price'>{price} PLN</p>
                </div>
                <div className='location-heart'>
                    <p className='location'>{place}</p>
                    <ObserveBtn saved={saved} id={id}/>
                </div>
            </div>
        </li> 
    )
}

export default OfferBox;