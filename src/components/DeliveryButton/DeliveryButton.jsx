import React from 'react';
import './DeliveryButton.css';

const DeliveryButton = (props) => {
    return ( 
        <button className='delivery__button'>
            {props.name}
        </button>
     );
}
 
export default DeliveryButton;