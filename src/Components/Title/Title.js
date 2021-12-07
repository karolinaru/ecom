import React from 'react';
import Location from 'components/Location/Location';
import './Title.scss';

const Title = () => {
    return (
        <div className='middle-wrapper'>
            <div className='title'>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <Location />
        </div>
    )
}

export default Title;