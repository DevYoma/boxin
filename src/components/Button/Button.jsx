import React from 'react';
import './Button.css';

const Button = (props) => {
    return ( 
        <button className='component__button'>
            {props.name}
        </button>
     );
}
 
export default Button;