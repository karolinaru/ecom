import React from 'react';
import './ProductImage.scss';

const ProductImage = ({image, label}) => {

    return (
        <div className='image-box'>
            <img className='product-image' src={`${image}.jpg`} alt='Product'/>
            <div className={label ? 'label--on' : 'label--off'}>Wyróżnione</div>
        </div>
    )
}

export default ProductImage;