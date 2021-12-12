import React, {useState} from 'react';
import './ObserveBtn.scss';

const ObserveBtn = () => {

    const [toggle, setToggle] = useState(false)

    const toggler = () => {
        toggle ? setToggle(false): setToggle(true);
    }

    const clickedClass = toggle ? 'observe-btn--clicked' : ''; 

    return (
        <button className={clickedClass + ' observe-btn'} onClick={toggler}>
            <p className='observe-btn__text-hidden'>Obserwuj </p>
            <svg height="24" version="1.1" width="24" xmlns="http://www.w3.org/2000/svg" xmlnsCc="http://creativecommons.org/ns#" xmlnsDc="http://purl.org/dc/elements/1.1/" xmlnsRdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"/></g></svg>
        </button>  
    )
}

export default ObserveBtn;