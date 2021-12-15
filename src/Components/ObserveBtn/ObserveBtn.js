import React, {useState} from 'react';
import './ObserveBtn.scss';
{/*  import { ReactComponent as Heart } from 'components/heart_icon.svg';*/}

const ObserveBtn = () => {

    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    const clickedClass = toggle ? 'observe-btn--clicked' : ''; 

    return (
        <button className={clickedClass + ' observe-btn'} onClick={toggler}>
            <p className='observe-btn__text-hidden'>Obserwuj </p>
          {/*  <Heart /> */}
        </button>  
    )
}

export default ObserveBtn;