import React from 'react';
import './Customers.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Customers = () => {

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
        <div className="customers">
            <div className="customers__heading">
                <h1>Customers</h1>

                <div className="customers__subHeading">
                    <div className='customers__text'>
                        <p>People who will buy from you will appear here</p>
                    </div>
{/* 
                    <button className="customers__requestButton">
                        TRANSFER FUNDS
                    </button> */}
                </div>
            </div>

            <div className="customers__main">

                <div className="customers__buttons">
                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="customers__conditions row">
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

                    <div className="customers__filterButtons">
                        
                        <button disabled id="filter"  className='customers__filterButton'>
                            filter
                        </button>

                        <button className='customers__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='customers__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='customers__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='customers__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='customers__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Customers;