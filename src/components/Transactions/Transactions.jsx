import React from 'react';
import './Transactions.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import ReplayIcon from '@mui/icons-material/Replay';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Transactions = () => {

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

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
        <div className="transactions">
            <div className="transactions__heading">
                <h1>Transactions</h1>

                <div className="transactions__subHeading">
                    <div className='transactions__text'>
                        <p>View and manage all transactions</p>
                    </div>

                    {/* <button className="transactions__requestButton">
                        TRANSFER FUNDS
                    </button> */}
                </div>
            </div>

            <div className="transactions__main">

                <div className="transactions__buttons">
                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="transactions__conditions row">
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

                    <div className="transactions__filterButtons">
                        
                        <button disabled id="filter"  className='transactions__filterButton'>
                            filter
                        </button>

                        <button className='transactions__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='transactions__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='transactions__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='transactions__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='transactions__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>

            <TableContainer component={Paper} className="transactions__table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories} <br />yoma</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
     );
}
 
export default Transactions;