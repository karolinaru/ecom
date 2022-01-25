import React, {useState} from 'react';
import './ObserveBtn.scss';
import { ReactComponent as Heart } from 'components/heart_icon.svg';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js'

const ObserveBtn = ({saved, id}) => {

    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        axios.put(`${baseURL}/${id}`, {saved:toggle})
            .then(() => setToggle(!toggle))
            .catch(err => console.log(err));
    };

    const clickedClass = toggle ? 'observe-btn--clicked' : ''; 

    return (
        <button className={clickedClass + ' observe-btn'} onClick={toggler}>
            <p className='observe-btn__text-hidden'>Obserwuj </p>
            <Heart />
        </button>  
    )
}

export default ObserveBtn;