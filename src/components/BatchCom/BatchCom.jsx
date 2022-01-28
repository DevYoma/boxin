import React from 'react';
import './BatchCom.css';
import DeliveryButton from '../DeliveryButton/DeliveryButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const BatchCom = () => {

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
        <div className="batch">
            <div className="batch__heading">
                <h1>Batches</h1>

                <div className="batch__subHeading">
                    <div className='batch__text'>
                        <p>Batches let you ship multiple deliveries all at once. Create and manage batches here.</p>
                    </div>

                    <button className="batch__requestButton">
                        Create Batch
                    </button>
                </div>
            </div>

            <div className="batch__main">

            <div className="batch__buttons">
                <p id='special'>0 RESULTS PAGE 1 OF 0</p>
            </div>

                <div className="batch__conditions row">
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

                    <div className="batch__filterButtons">
                        
                        <button disabled id="filter"  className='batch__filterButton'>
                            filter
                        </button>

                        <button className='batch__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='batch__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='batch__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='batch__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='batch__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default BatchCom;