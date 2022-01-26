import React from 'react';
import './Deliveries.css';
import DeliveryButton from '../DeliveryButton/DeliveryButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'

const Deliveries = () => {

    const currencies = [
        {
          value: 'USD',
          label: '$',
        },
        {
          value: 'EUR',
          label: '€',
        },
        {
          value: 'BTC',
          label: '฿',
        },
        {
          value: 'JPY',
          label: '¥',
        },
      ];

      const [currency, setCurrency] = React.useState('EUR');

        const handleChange = (e) => {
            setCurrency(e.target.value);
        };
    
    return ( 
        <div className="deliveries">
            <div className="deliveries__heading">
                <h1>Yoma Deliveries</h1>

                <div className="deliveries__subHeading">
                    <div className='deliveries__text'>
                        <p>Create, track and manage your incoming and outgoing</p>
                        <p>deliveries</p>
                    </div>

                    <button className="deliveries__requestButton">
                        Request Delivery
                    </button>
                </div>
            </div>

            <div className="delivery__main">
                <div className="delivery__buttons">
                    <DeliveryButton name="All"/>
                    <DeliveryButton name="Pending"/>
                    <DeliveryButton name="ON hold"/>
                    <DeliveryButton name="with Errors"/>
                    <DeliveryButton name="OnGoing"/>
                    <DeliveryButton name="Completed"/>
                    <DeliveryButton name="Cancelled"/>
                </div>

                <div className="delivery__conditions row">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select your currency"
                        className='width'
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        helperText="Please select your currency"
                        className='width'
                        >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField 
                        id="outlined-basic" 
                        label="Enter Value here" 
                        variant="outlined"
                        className="width"
                    />

                    <button id="filter">
                        filter
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Deliveries;