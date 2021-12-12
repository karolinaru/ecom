import React from 'react';
import image from '../sample.jpg';
import './ProductImage.scss';

const labelON = true ? 'label--on' : 'label--off'; 

const ProductImage = () => {
    return (
        <div className='image-box'>
            <img className='product-image' src={image} alt='Product'/>
            <div className={labelON}>Wyróżnione</div>
        </div>
    )
}

export default ProductImage;