import React from 'react';
import './Orders.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Orders = () => {

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
        <div className="orders">
            <div className="orders__heading">
                <h1>Orders</h1>

                <div className="orders__subHeading">
                    <div className='orders__text'>
                        <p>View and manage your sales here</p>
                    </div>

                    <button className="orders__requestButton">
                        CREATE AN ORDER
                    </button>
                </div>
            </div>

            <div className="orders__main">

                <div className="orders__buttons">
                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="orders__conditions row">
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

                    <div className="orders__filterButtons">
                        
                        <button disabled id="filter"  className='orders__filterButton'>
                            filter
                        </button>

                        <button className='orders__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='orders__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='orders__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='orders__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='orders__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Orders;