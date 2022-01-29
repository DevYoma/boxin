import React from 'react';
import './DayButton.css';

const DayButton = (props) => {
    return ( 
        <button className="day__button">
            {props.name}
        </button>
     );
}
 
export default DayButton;