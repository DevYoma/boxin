import React from 'react';
import './Transfers.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const Transfers = () => {

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
        <div className="transfers">
            <div className="transfers__heading">
                <h1>Transfers</h1>

                <div className="transfers__subHeading">
                    <div className='transfers__text'>
                        <p>Send money to other users bank accounts</p>
                    </div>

                    <button className="transfers__requestButton">
                        TRANSFER FUNDS
                    </button>
                </div>
            </div>

            <div className="transfers__main">

                <div className="transfers__buttons">
                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="transfers__conditions row">
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

                    <div className="transfers__filterButtons">
                        
                        <button disabled id="filter"  className='transfers__filterButton'>
                            filter
                        </button>

                        <button className='transfers__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='transfers__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='transfers__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='transfers__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='transfers__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Transfers;