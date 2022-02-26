import React from 'react';
import './AddNewProduct.css';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductModalForm from '../ProductModalForm/ProductModalForm'
import AddBoxIcon from '@mui/icons-material/AddBox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import jwt_decode from 'jwt-decode'
import axios from 'axios'

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


const AddNewProduct = () => {
    // const baseURL = 'https://api.boxin.ng/api/v1/store/category/?search='
    const [categories, setCategories] = React.useState([])
    const [storeDetails, setStoreDetails] = React.useState({
        id: "",
        store_domain: "",
        store_name: "",
        store_description: "",
        store_shop_number: 0,
        store_street_name: "",
        store_city: "",
        store_state: "",
        store_postal_code: "",
        store_escrow: "",
        primary_store_color: "",
        secondary_store_color: "",
        next_pickup_date: "2022-02-21",
        customer_pay_delivery_fee: true,
        user: null
    })
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("This button is working")
    }

    const getCategoriesOptions = (
    categories.map(category => <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>)
    )

    React.useEffect(() => {
        let token = JSON.parse(localStorage.getItem('token'))
        let authorizationHeader = `Bearer ${token}`
        // let history = useHistory()

        // console.log(token)

        const baseURL = 'https://api.boxin.ng/api/v1/store'

        const getStoreDetails = async () => {
            axios.get(`${baseURL}/get-store/`, {headers: {Authorization: authorizationHeader}})
            .then(res => {
                setStoreDetails(res.data.store_details)
            })
            .catch(err => {
                console.log(err)
            })
        }

        const getCategories = async () => {
            if (storeDetails.user != null) {
                getStoreDetails()
            }
            
            if (!categories.length) {
                axios.get(`${baseURL}/category/?search=${storeDetails.id}`)
                .then((res) => {
                    setCategories(res.data.results)
                })
                .catch(err => {
                    console.log(err)
                })
            }
            
        }

        getCategories()
    },[storeDetails, categories])

    
    return ( 
        <React.Fragment>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h6">Category</Typography> <br />

                    {/* <ProductModalForm /> */}
                    <div>
                        <TextField
                        required
                        fullWidth
                        id="category"
                        label="category"
                        />
                    </div> <br />

                    <Button variant="contained">Save</Button>
                </Box>
            </Modal>
            <Container maxWidth="lg" className="addNewProduct">
                <h1>Add Product </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <TextField
                        required
                        fullWidth
                        id="Name"
                        label="Product Name"
                        />
                    </div>

                    <div className="flex">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        //   value={age}
                        label="Age"
                        //   onChange={handleChange}
                        >
                        {getCategoriesOptions}
                        </Select>
                    </FormControl>
                    <AddBoxIcon 
                        fontSize="large"
                        onClick={handleOpen}
                    />
                    </div>

                    <div>
                        <TextField
                        required
                        fullWidth
                        id="Price"
                        label="Price"
                        />
                    </div>

                    <div>
                        <TextField
                        required
                        fullWidth
                        id="color"
                        label="Color"
                        />
                    </div>

                    <div>
                        <TextField
                        required
                        fullWidth
                        id="Weight"
                        label="Weight"
                        />
                    </div>

                    <div>
                        <TextField
                        required
                        fullWidth
                        id="Material"
                        label="Material"
                        />
                    </div>

                    <div>
                        <TextField
                        required
                        fullWidth
                        multiline
                        rows={4}
                        id="description"
                        label="description"
                        />
                    </div>

                    <Button type='submit' variant="contained" style={{width: "300px", margin: "0 auto"}}>Submit</Button>
                </form>
            </Container>
        </React.Fragment>
     );
}
 
export default AddNewProduct;