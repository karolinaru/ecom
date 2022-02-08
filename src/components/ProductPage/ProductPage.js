import React from 'react';
import './ProductPage.scss';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';
import moment from 'moment';
import { ReactComponent as Arrow } from 'assets/back_arrow_icon.svg';
import {Link} from 'react-router-dom';

const ProductPage = ({title, image, price, createdAt, saved, id}) => {

    const createdAtDate = moment(`${createdAt}`).format('LL')

    return (
        <>
            <Link className='return-btn' to={'/'}>
                <button className='return-btn__btn'>
                    <Arrow />
                    <p className='return-btn__text'>Homepage</p>
                </button>
            </Link>
            <article className='product-wrapper'> 
                <p className='product-date'>{createdAtDate}</p>        
                <img className='product-photo' src={`${image}.jpg`} alt='Product'/>
                <div>
                    <div className='product-details'>
                        <h1 className='product-details product-details__title'> {title} </h1>
                        <div className='product-details product-details__heart'><ObserveBtn saved={saved} id={id}/></div>
                    </div>
                    <h2 className='product-price'> {price} </h2>
                    <p className='product-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </article>
        </>
    )
}

export default ProductPage;