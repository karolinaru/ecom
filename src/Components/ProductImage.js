import React from 'react';
import image from './sample.jpg';
import './ProductImage.css';
import AdLabel from './AdLabel';

export default function ProductImage() {
    return (
        <div className ='image-box'>
            <img className='product-image' src={image} alt='Product'/>
            <AdLabel />
        </div>
    )
}
