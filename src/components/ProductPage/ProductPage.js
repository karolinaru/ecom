import React from 'react';
import './ProductPage.scss';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';

const ProductPage = ({title, image, price, createdAt, saved, id}) => {

    return (
        <div className='product-wrapper'>
            <img className='product-image' src={`${image}.jpg`} alt='Product'/>
            <div className='product-details'>
                <div className='product-dateHeart'>  
                    <div className='product-dateHeart__date'> {createdAt} </div>
                    <div className='product-dateHeart__heart'><ObserveBtn saved={saved} id={id}/></div>
                </div>
                <div className='product-title'> {title} </div>
                <div className='product-price'> {price} </div>
            </div>
        </div>
    )
}

export default ProductPage;