import React from 'react';
import image from '../sample.jpg';
import './ProductImage.scss';
import Label from '../label/Label';

const ProductImage = () => {
    return (
        <div className='image-box'>
            <img className='product-image' src={image} alt='Product'/>
            <Label />
        </div>
    )
}

export default ProductImage;