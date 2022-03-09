import React from "react";
import "./AddNewProduct.css";
import TextField from "@mui/material/TextField";
import { IconButton } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { Input } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProductModalForm from "../ProductModalForm/ProductModalForm";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import jwt_decode from "jwt-decode";
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

const AddNewProduct = () => {
  const baseURL = "https://api.boxin.ng/api/v1/store";
  const token = JSON.parse(localStorage.getItem("token"));
  let authorizationHeader = `Bearer ${token}`;
  const options = {
    headers: { Authorization: authorizationHeader },
  };
  // let history = useHistory()
  // const baseURL = 'https://api.boxin.ng/api/v1/store/category/?search='
  const [categories, setCategories] = React.useState([]);
  const [pagestate, setPageState] = React.useState({
    addingnewproductcat: false,
  });
  const [creatingproduct, setCreatingProduct] = React.useState(false);
  const [productimage, setProductImage] = React.useState(null);
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
  const productcolorinputref = React.useRef();
  const productdescinputref = React.useRef();
  const productmaterialinputref = React.useRef();
  const productpriceinputref = React.useRef();
  const productweightinputref = React.useRef();
  const productcatinputref = React.useRef();
  const productnameinputref = React.useRef();
  const newproductcatinputref = React.useRef();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const getCategories = async () => {
    if (storeDetails.user != null) {
      getStoreDetails();
    }

    axios
      .get(`${baseURL}/category/?search=${storeDetails.id}`)
      .then((res) => {
        setCategories(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadProductImage = async (id, image) => {
    try {
      let formdata = new FormData();
      formdata.append("main_image", image, image.name);
      const response = await axios.patch(
        `${baseURL}/products/${id}/`,
        formdata,
        {
          ...options,
          headers: {
            ...options.headers,
            "content-type": "multipart/form-data",
          },
        }
      );
      productnameinputref.current.value = "";
      productdescinputref.current.value = "";
      productcolorinputref.current.value = "";
      productpriceinputref.current.value = "";
      productmaterialinputref.current.value = "";
      productweightinputref.current.value = "";
      productcatinputref.current.value = "";
      setCreatingProduct(false);
      setProductImage({});
    } catch (error) {
      console.warn("uploadProductImage err", String(error));
      setCreatingProduct(false);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      let data = {
        productName: productnameinputref.current.value,
        productDesc: productdescinputref.current.value,
        productColor: productcolorinputref.current.value,
        productPrice: productpriceinputref.current.value,
        productMaterial: productmaterialinputref.current.value,
        productWeight: productweightinputref.current.value,
        productcategory: productcatinputref.current.value,
      };
      //console.warn("main_image", productimage);
      setCreatingProduct(true);
      const response = await axios.post(
        `${baseURL}/products/`,
        {
          category_name: productcatinputref.current.value,
          name: productnameinputref.current.value,
          description: productdescinputref.current.value,
          price: productpriceinputref.current.value,
          product_info: {
            sku: "",
            color: productcolorinputref.current.value,
            material: productmaterialinputref.current.value,
            quantity: 0,
          },
          main_image: null,
        },
        options
      );
      console.warn(`handleSubmit`, data);
      uploadProductImage(response?.data?.id, productimage);
      // console.warn(`handleSubmit`, data);
    } catch (err) {
      setCreatingProduct(false);
      console.warn(`handleSubmit err`, String(err));
    }
  };

  const addProductCat = async () => {
    alert(JSON.stringify(storeDetails));
    try {
      if (newproductcatinputref.current.value.length < 3) {
        alert("input is too short");
        return;
      }
      setPageState({ ...pagestate, addingnewproductcat: true });
      const response = await axios.post(
        `${baseURL}/category/`,
        {
          vendor: storeDetails.id,
          name: newproductcatinputref.current.value,
          // products: [],
        },
        options
      );
      newproductcatinputref.current.value = "";
      getCategories();
      console.log("addProductCat response", response.data);
    } catch (err) {
      console.error(
        "--------------------------------response  lad error-------------------------------------------------",
        [
          String(err),
          {
            vendor: storeDetails.id,
            name: newproductcatinputref.current.value,
          },
        ]
      );
    }
    setPageState({ ...pagestate, addingnewproductcat: false });
    handleClose();
  };

  const getCategoriesOptions = categories.map((category) => (
    <MenuItem key={category.id} value={category.id}>
      {category.name}
    </MenuItem>
  ));
  React.useEffect(() => {
    getStoreDetails();
    getCategories();
  }, [String(storeDetails), categories.length]);

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
              inputRef={newproductcatinputref}
              fullWidth
              id="category"
              label="category"
            />
          </div>{" "}
          <br />
          <LoadingButton
            onClick={addProductCat}
            variant="contained"
            disabled={pagestate.addingnewproductcat}
            loading={pagestate.addingnewproductcat}
          >
            Save
          </LoadingButton>
        </Box>
      </Modal>
      <Container maxWidth="lg" className="addNewProduct">
        <h1>Add Product </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <TextField
              inputRef={productnameinputref}
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
                required
                id="demo-simple-select"
                defaultValue
                value={categories[0]?.id}
                inputRef={productcatinputref}
                label="Category"
                //onChange={handleChange}
              >
                {getCategoriesOptions}
              </Select>
            </FormControl>
            <AddBoxIcon fontSize="large" onClick={handleOpen} />
          </div>

          <div>
            <TextField
              inputRef={productpriceinputref}
              required
              fullWidth
              id="Price"
              label="Price"
            />
          </div>

          <div>
            <TextField
              inputRef={productcolorinputref}
              fullWidth
              id="color"
              label="Color"
            />
          </div>

          <div>
            <TextField
              inputRef={productweightinputref}
              required
              fullWidth
              id="Weight"
              label="Weight"
            />
          </div>

          <div>
            <TextField
              inputRef={productmaterialinputref}
              fullWidth
              id="Material"
              label="Material"
            />
          </div>

          <div>
            <TextField
              required
              fullWidth
              inputRef={productdescinputref}
              multiline
              rows={4}
              id="description"
              label="description"
            />
          </div>
          <div>
            <InputLabel color={"info"} id="demo-image-upload">
              <input
                type="file"
                required
                onChange={(e) => setProductImage(e.target.files[0])}
                id="demo-image-upload"
                className={"image-input"}
                accept="image/png, image/jpg, image/jpeg"
              />
              Click To Upload Product Image
            </InputLabel>
          </div>

          <LoadingButton
            type="submit"
            disabled={creatingproduct}
            loading={creatingproduct}
            variant="contained"
            style={{ width: "300px", margin: "0 auto" }}
          >
            Submit
          </LoadingButton>
          <br />
        </form>
      </Container>
    </React.Fragment>
  );
};

export default AddNewProduct;
