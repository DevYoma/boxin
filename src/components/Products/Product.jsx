import React from 'react';
import './Product.css'
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
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ProductModalForm from '../ProductModalForm/ProductModalForm'


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


const Products = () => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function createData(name, category, price, color, weight) {
        return { name, category, price, color, weight };
      }
      
      const rows = [
        createData('Frozen yoghurt', "Snack", 600.0, "red", 4.0),
        createData('Ice cream sandwich', "food", 900.0, "green", 4.3),
        createData('Eclair', "Snack", 1600.0, "orange", 6.0),
        createData('Cupcake', "food", 300.7, "purple", 4.3),
        createData('Gingerbread', "Snack", 200.0, "indigo", 3.9),
      ];

    const categories = [
        {
          value: 'food',
          label: '$',
        },
        {
          value: 'snack',
          label: '€',
        },
        {
          value: 'drinks',
          label: '฿',
        },
        {
          value: 'Detergents',
          label: '¥',
        },
      ];

      const [currency, setCurrency] = React.useState('food');

        const handleChange = (e) => {
            setCurrency(e.target.value);
        };

    return ( 
        <React.Fragment>

        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6">Product Form</Typography>

          <ProductModalForm />
        </Box>
      </Modal>
        <div className="products">
            <div className="products__heading">
                <h1>Products</h1>

                <div className="products__subHeading">
                    <div className='products__text'>
                        <p>View and manage all Products</p>
                    </div>

                </div>

                {/* <button>Button</button> */}
                <Button onClick={handleOpen} className="products__button">
                    Add Product
                </Button>
            </div>

            <div className="products__main">

                <div className="products__buttons">
                    <p id='special'>0 RESULTS PAGE 1 OF 0</p>
                </div>

                <div className="products__conditions row">

                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={currency}
                        onChange={handleChange}
                        className='width'
                        >
                        {categories.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.value}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField 
                        id="outlined-basic" 
                        label="Search product by Name" 
                        variant="outlined"
                        className="width"
                    />

                    <div className="products__filterButtons">
                        
                        <button disabled id="filter"  className='products__filterButton'>
                            filter
                        </button>

                        <button className='products__filterButton'>
                            <ReplayIcon />
                        </button>

                        <button className='products__filterButton'>
                            <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='products__filterButton'>
                            <ChevronLeftIcon />
                        </button>

                        <button className='products__filterButton row'>
                            20 per page <FileDownloadOutlinedIcon />
                        </button>

                        <button disabled className='products__filterButton'>
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>

            <TableContainer component={Paper} className="products__table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price(&#8358;)</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Weight&nbsp;(Kg)</TableCell>
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
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>

        </React.Fragment>

     );
}
 
export default Products;