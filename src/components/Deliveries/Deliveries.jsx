import React from "react";
import "./Deliveries.css";
import DeliveryButton from "../DeliveryButton/DeliveryButton";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import ReplayIcon from "@mui/icons-material/Replay";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Deliveries = () => {
  const baseURL = "https://api.boxin.ng/api/v1/store";
  const token = JSON.parse(localStorage.getItem("token"));
  let authorizationHeader = `Bearer ${token}`;
  const options = {
    headers: { Authorization: authorizationHeader },
  };
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
    user: null,
  });
  const [open, setOpen] = React.useState(false);
  const [orders, setOrders] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  const [currency, setCurrency] = React.useState("EUR");
  const getStoreDetails = async () => {
    axios
      .get(`${baseURL}/get-store/`, {
        headers: { Authorization: authorizationHeader },
      })
      .then((res) => {
        //console.warn("getStoreDetails", res.data.store_details);
        setStoreDetails(res.data.store_details);
      })
      .catch((err) => {
        //console.warn("getStoreDetails", String(err));
        console.log(err);
      });
  };

  async function getOrders() {
    try {
      const response = await axios.get(
        `${baseURL}/orders/`,
        { search: storeDetails.id },
        options
      );
      console.warn("getorders", response.data.results);
      setOrders(response.data.results);
    } catch (err) {
      console.warn("getorders err", String(err));
    }
  }
  function showDetails(items = []) {
    if (!Array.isArray(items)) return;
    setItems(items);
    handleOpen();
  }

  function renderOrderItems(items = []) {
    if (!Array.isArray(items)) return null;
    return items.map((row) => {
      return (
        <TableBody>
          <TableCell>{row.related_product}</TableCell>
          <TableCell>{row.quantity}</TableCell>
          <TableCell>&#8358;{row.price}</TableCell>
        </TableBody>
      );
    });
  }

  const handleChange = (e) => {
    setCurrency(e.target.value);
  };

  function createData(firstName, lastName, email, address, phoneNumber) {
    return { firstName, lastName, email, address, phoneNumber };
  }

  const rows = [
    createData(
      "Dosu",
      "Dosu",
      "dosu@gmail.com",
      "No 11, Damico street",
      404094809348
    ),
  ];

  const handleClick = () => {
    alert("working");
  };

  React.useEffect(() => {
    getStoreDetails();
    //getOrders();
  }, []);
  React.useEffect(() => {
    if (storeDetails.id.length > 0) getOrders();
  }, [storeDetails.id]);

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
              {renderOrderItems(items)}
            </Table>
          </TableContainer>
        </Box>
      </Modal>
      <div className="deliveries">
        <div className="deliveries__heading">
          <h1>Deliveries</h1>

          <div className="deliveries__subHeading">
            <div className="deliveries__text">
              <p>Create, track and manage your incoming and outgoing</p>
              <p>deliveries</p>
            </div>

            {/*<button className="deliveries__requestButton">
                            Request Delivery
    </button>*/}
          </div>
        </div>

        <div className="deliveries__main">
          <div className="deliveries__buttons">
            <DeliveryButton name="All" />
            <DeliveryButton name="Pending" />
            <DeliveryButton name="ON hold" />
            <DeliveryButton name="with Errors" />
            <DeliveryButton name="OnGoing" />
            <DeliveryButton name="Completed" />
            <DeliveryButton name="Cancelled" />

            <p id="special">0 RESULTS PAGE 1 OF 0</p>
          </div>

          {/*<div className="deliveries__conditions row">
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              value={currency}
              onChange={handleChange}
              className="width"
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
              className="width"
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
              <button disabled id="filter" className="deliveries__filterButton">
                filter
              </button>

              <button className="deliveries__filterButton">
                <ReplayIcon />
              </button>

              <button className="deliveries__filterButton">
                <FileDownloadOutlinedIcon />
              </button>

              <button disabled className="deliveries__filterButton">
                <ChevronLeftIcon />
              </button>

              <button className="deliveries__filterButton row">
                20 per page <FileDownloadOutlinedIcon />
              </button>

              <button disabled className="deliveries__filterButton">
                <ChevronRightIcon />
              </button>
            </div>
          </div>*/}
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
                <TableCell align="right">{""}</TableCell>
                {/* <TableCell align="right">Items Ordered</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.first_name}
                  </TableCell>
                  <TableCell align="right">{row.last_name}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.phone}</TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button onClick={() => showDetails(row.items)}>
                      Show Items
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </React.Fragment>
  );
};

export default Deliveries;
