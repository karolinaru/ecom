import React from 'react';
import './OfferBox.css';
import ProductImage from './ProductImage';



export default function OfferBox() {
    return (
        <div className = 'offer-box'>
            <div className ='offer'> {/*empty divs to style it like olx, same class names as there*/}
                <div className ='offer-wrapper'>
                    <div className ='table-div'>
                        <ProductImage />
                    </div>
                </div> 
            </div> 
        </div>  
    )
}
