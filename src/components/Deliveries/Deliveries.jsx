import React from 'react';
import './Deliveries.css';
import DeliveryButton from '../DeliveryButton/DeliveryButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

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
                <h1>Deliveries</h1>

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

            <div className="deliveries__main">
                <div className="deliveries__buttons">
                    <DeliveryButton name="All"/>
                    <DeliveryButton name="Pending"/>
                    <DeliveryButton name="ON hold"/>
                    <DeliveryButton name="with Errors"/>
                    <DeliveryButton name="OnGoing"/>
                    <DeliveryButton name="Completed"/>
                    <DeliveryButton name="Cancelled"/>

                    


                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="deliveries__conditions row">
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
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

                    <div className="deliveries__filterButtons">
                        
                        <button disabled id="filter"  className='deliveries__filterButton'>
                            filter
                        </button>

                        <button className='deliveries__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='deliveries__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='deliveries__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='deliveries__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='deliveries__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Deliveries;