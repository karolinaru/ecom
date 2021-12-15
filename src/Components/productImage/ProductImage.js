import React from 'react';
import './ProductImage.scss';

const ProductImage = ({image, label}) => {
    const labelOn = (label = true) ? 'label--on' : 'label--off';

    return (
        <div className='image-box'>
            <img className='product-image' src={`${image}.jpg`} alt='Product'/>
            <div className={labelOn}>Wyróżnione</div>
        </div>
    )
}

export default ProductImage;