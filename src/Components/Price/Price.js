import React from 'react';
import ObserveBtn from 'components/ObserveBtn/ObserveBtn';
import './Price.scss';

const Price = () => {
    return (
        <div>
            <div className='price'>
                <span>19,99 PLN</span>
            </div>
            <ObserveBtn />
        </div>
    )
}

export default Price;