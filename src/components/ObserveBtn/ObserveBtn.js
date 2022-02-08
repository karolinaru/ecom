import React, {useState} from 'react';
import './ObserveBtn.scss';
import { ReactComponent as Heart } from 'assets/heart_icon.svg';
import axios from 'axios';
import {baseURL} from 'helpers/baseURL.js'
import UseAPIError from 'components/UseAPIError/UseAPIError';

const ObserveBtn = ({saved, id}) => {
    
    const [toggle, setToggle] = useState(false)

    const {addError} = UseAPIError();
    
    const toggler = () => {
        axios.put(`${baseURL}/${id}`, {saved:toggle})
        .then(() => setToggle(!toggle))
        .catch(err => {
            addError(`${err}`, err.response.status);
            setTimeout(addError, 3000);
          });
    };
    
    const clickedClass = toggle ? 'observe-btn--clicked' : ''; 
    
    return (
        <button className={`observe-btn ${clickedClass}`} onClick={toggler}>
            <p className='observe-btn__text-hidden'>Obserwuj </p>
            <Heart />
        </button>  
        )
    }
    
export default ObserveBtn;