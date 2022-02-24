import React from 'react';
import './Deliveries.css';
import DeliveryButton from '../DeliveryButton/DeliveryButton';
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
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Deliveries = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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

        function createData(firstName, lastName, email, address, phoneNumber) {
            return { firstName, lastName, email, address, phoneNumber };
          }
          
          const rows = [
            createData('Dosu', "Dosu", "dosu@gmail.com", "No 11, Damico street", 404094809348),
          ];

          const handleClick = () => {
              alert("working")
          }
    
    
    return ( 
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6">Item Details</Typography> <br />

                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name of Item</TableCell>
                                    <TableCell>Quantity</TableCell>
                                    <TableCell>Price</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                <TableCell>Durex</TableCell>
                                <TableCell>5</TableCell>
                                <TableCell>&#8358;400</TableCell>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Modal>
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

                    <TableContainer component={Paper} className="products__table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell align="right">Last Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Address</TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    {/* <TableCell align="right">Items Ordered</TableCell> */}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    onClick={handleOpen}
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {row.firstName}
                    </TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.address}</TableCell>
                    <TableCell align="right">{row.phoneNumber}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            </div>
        </React.Fragment>
     );
}
 
export default Deliveries;