import React from 'react';
import image from '../sample.jpg';
import './ProductImage.scss';


const ProductImage = () => {
    return (
        <div className='image-box'>
            <img className='product-image' src={image} alt='Product'/>
            <div className='label'>Wyróżnione</div>
        </div>
    )
}

export default ProductImage;