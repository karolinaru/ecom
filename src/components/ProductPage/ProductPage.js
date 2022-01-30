import React from 'react';
import './ProductPage.scss';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';
import moment from 'moment';
import { ReactComponent as Arrow } from 'assets/back_arrow_icon.svg';
import {Link} from 'react-router-dom';

const ProductPage = ({title, image, price, createdAt, saved, id}) => {

    const createdAtDate = moment(`${createdAt}`).format('LL')

    return (
        <div className='product-wrapper'>
            <Link className='return-btn' to={'/'}>
                <button className='return-btn__btn'>
                    <Arrow />
                    <p className='return-btn__text'>Homepage</p>
                </button>
            </Link>
            <div className='product-dateHeart'>  
                <div className='product-dateHeart__date'>{createdAtDate}</div>
                <div className='product-dateHeart__heart'><ObserveBtn saved={saved} id={id}/></div>
            </div>            
            <img className='product-productImage' src={`${image}.jpg`} alt='Product'/>
            <div className='product-details'>
                <div className='product-title'> {title} </div>
                <div className='product-price'> {price} </div>
                <div className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    )
}

export default ProductPage;