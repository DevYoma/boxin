import React from 'react';
import './DayButton.css';

const DayButton = (props) => {
    return ( 
        <button>
            {props.name}
        </button>
     );
}
 
export default DayButton;