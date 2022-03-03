import React, { useEffect, useState } from "react";
import "./CreateStore.css";
import { Link, useHistory } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import MenuItem from "@mui/material/MenuItem";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { GOOGLE_API_KEY } from "../../../env";

const CreateStore = () => {
  const baseURL = "https://api.boxin.ng/api/v1/store";
  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token"));
  let authorizationHeader = `Bearer ${token}`;
  const options = {
    headers: { Authorization: authorizationHeader },
  };
  const [banks, setBanks] = useState([]);
  const [userbank, setUserBank] = useState("");
  const [value, setValue] = useState("");
  const [creatingstore, setCreateStore] = useState(false);
  const INPUT_SCHEMA = { name: "", error: "" };
  const [form, setForm] = useState({
    web_name: INPUT_SCHEMA,
    biz_name: INPUT_SCHEMA,
    biz_desc: INPUT_SCHEMA,
    biz_addr: INPUT_SCHEMA,
    biz_city: INPUT_SCHEMA,
    biz_state: INPUT_SCHEMA,
    bank: INPUT_SCHEMA,
    acct_no: INPUT_SCHEMA,
    bvn: INPUT_SCHEMA,
  });
  useEffect(() => {
    // console.log(errorArrect);
    const getBanksFromPayStack = async () => {
      axios.get(`https://api.boxin.ng/api/v1/store/get-banks/`).then((res) => {
        // console.warn("getBanksFromPayStack", res.data.list_of_banks);
        setBanks([...banks, ...res.data.list_of_banks]);
      });
    };

    getBanksFromPayStack();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setCreateStore(true);
      let errorArr = [];

      if (
        form.web_name.name.length < 3 ||
        form.web_name.name.length > 10 ||
        form.web_name.name.match(/\d+/g) != null
      ) {
        errorArr.push({
          web_name: {
            ...form.web_name,
            error:
              "Website name cannot contain numers and  must be between 3-10 characters",
          },
        });
      }

      if (form.biz_name.name.length < 3) {
        errorArr.push({
          biz_name: {
            ...form.biz_name,
            error: "Business name is empty",
          },
        });
      }
      if (form.biz_desc.name.length < 3) {
        errorArr.push({
          biz_desc: {
            ...form.biz_desc,
            error: "Business description cannot be less than 3 characters ",
          },
        });
      }
      if (form.biz_addr.name.length < 3) {
        errorArr.push({
          biz_addr: {
            ...form.biz_addr,
            error: "Business address cannot be less than 3 characters ",
          },
        });
      }

      if (
        form.biz_city.name.length < 3 ||
        form.web_name.name.match(/\d+/g) != null
      ) {
        errorArr.push({
          biz_city: {
            ...form.biz_city,
            error: "City cannot be less than 3 characters ",
          },
        });
      }

      if (
        form.biz_state.name.length < 3 ||
        form.web_name.name.match(/\d+/g) != null
      ) {
        errorArr.push({
          biz_state: {
            ...form.biz_state,
            error: "State cannot be less than 3 characters ",
          },
        });
      }

      if (form.bank.name.length < 3) {
        errorArr.push({
          bank: {
            ...form.bank,
            error: "Bank name cannot be less than 3 characters ",
          },
        });
      }

      if (form.acct_no.name.length < 10 || isNaN(form.acct_no.name)) {
        errorArr.push({
          acct_no: {
            ...form.acct_no,
            error: "Account no must be numeric and atleast 10 characters ",
          },
        });
      }

      if (form.bvn.name.length < 11 || isNaN(form.bvn.name)) {
        errorArr.push({
          bvn: {
            ...form.bvn,
            error: "Bvn  must be numeric and have 11 characters",
          },
        });
      }

      let local_form = { ...form };
      errorArr.forEach((item) => {
        Object.assign(local_form, item);
      });

      if (errorArr.length > 0) {
        setForm({ ...form, ...local_form });
        setCreateStore(false);
        return;
      }
      const response = await axios.post(
        `${baseURL}/vendor/`,
        {
          store_domain: form.web_name.name,
          store_name: form.biz_name.name,
          store_description: form.biz_desc.name,
          store_address: form.biz_addr.name.label,
          store_city: form.biz_city.name,
          store_state: form.biz_state.name,
          store_postal_code: "222222",
          primary_store_color: "",
          secondary_store_color: "",
          next_pickup_date: "2022-03-03",
          customer_pay_delivery_fee: true,
          wallets: {
            available_funds: 0.0,
            boxin_credits: 0.0,
            escrow: 0.0,
            account_number: form.acct_no.name,
            bank: form.bank.name,
            bvn: form.bvn.name,
            customer_code: "",
            virtual_bank_account: "",
          },
        },
        options
      );
      alert("Store Created!");
      history.replace("/app");
      setCreateStore(false);
    } catch (error) {
      alert("Something went wrong please try again");
      setCreateStore(false);
      console.warn("createstore onsubmit", String(error));
    }
  };

  return (
    <div className="settingCom">
      <div className="settingCom__head">
        <h1>Create Store</h1>

        <div>{/* {mappedBanks} */}</div>
      </div>

      <div className="settingCom__main">
        <button
          onClick={() => console.log("form", [form, creatingstore])}
          id="setting__button"
        >
          Change
        </button>
        <form onSubmit={onSubmit}>
          <div className="row">
            <TextField
              id="standard-basic"
              label="Website Name"
              value={form.web_name.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  web_name: {
                    ...form.web_name,
                    name: e.target.value,
                    error: "",
                  },
                });
              }}
              required
              error={form.web_name.error ? true : false}
              helperText={form.web_name.error}
              variant="standard"
              // defaultValue={storeDetails.store_domain}
              className="settingCom__input"
            />
          </div>

          <div>
            <TextField
              id="outlined-basic"
              label="Business Name"
              value={form.biz_name.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  biz_name: {
                    ...form.biz_name,
                    name: e.target.value,
                    error: "",
                  },
                });
              }}
              error={form.biz_name.error ? true : false}
              helperText={form.biz_name.error}
              required
              // defaultValue={storeDetails.store_name}
              variant="outlined"
              className="width"
            />
          </div>

          <div>
            <TextField
              id="outlined-multiline-static"
              label="Describe your business"
              value={form.biz_desc.name}
              onChange={(e) => {
                setForm({
                  ...form,
                  biz_desc: {
                    ...form.biz_desc,
                    name: e.target.value,
                    error: "",
                  },
                });
              }}
              error={form.biz_desc.error ? true : false}
              helperText={form.biz_desc.error}
              required
              multiline
              rows={4}
              // defaultValue={storeDetails.store_description}
              className="width"
            />
          </div>

          <hr />

          <hr />

          <div className="settingCom__location">
            <div className="settingCom__locationDetails">
              <div>
                <p>BUSINESS ADDRESS</p>
                <GooglePlacesAutocomplete
                  apiKey={GOOGLE_API_KEY}
                  selectProps={{
                    value: form.biz_addr.name,
                    onChange: (value) => {
                      setForm({
                        ...form,
                        biz_addr: { ...form.biz_addr, name: value, error: "" },
                      });
                    },
                  }}
                  error={form.biz_addr.error ? true : false}
                  helperText={form.biz_addr.error}
                  onLoadFailed={(err) =>
                    console.error("googleplace", String(err))
                  }
                />
              </div>

              <div className="row">
                <TextField
                  id="outlined-basic"
                  value={form.biz_city.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      biz_city: {
                        ...form.biz_city,
                        name: e.target.value,
                        error: "",
                      },
                    });
                  }}
                  error={form.biz_city.error ? true : false}
                  helperText={form.biz_city.error}
                  label="City"
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  value={form.biz_state.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      biz_state: {
                        ...form.biz_state,
                        name: e.target.value,
                        error: "",
                      },
                    });
                  }}
                  error={form.biz_state.error ? true : false}
                  helperText={form.biz_state.error}
                  label="State"
                  variant="outlined"
                />
              </div>

              <hr />
            </div>
          </div>

          <div className="settingCom__location">
            <div className="settingCom__locationDetails">
              <div>
                <p>BANK DETAILS</p> <br />
                <TextField
                  id="outlined-basic"
                  select
                  label="Bank"
                  required
                  value={form.bank.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      bank: { ...form.bank, name: e.target.value, error: "" },
                    });
                  }}
                  error={form.bank.error ? true : false}
                  helperText={form.bank.error}
                  variant="outlined"
                  className="width"
                >
                  {banks.map((bank) => (
                    <MenuItem key={bank.id} value={bank.code}>
                      {bank.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>

              <div className="row">
                <TextField
                  id="outlined-basic"
                  value={form.acct_no.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      acct_no: {
                        ...form.acct_no,
                        name: e.target.value,
                        error: "",
                      },
                    });
                  }}
                  required
                  label="Account Number"
                  error={form.acct_no.error ? true : false}
                  helperText={form.acct_no.error}
                  variant="outlined"
                />

                <TextField
                  id="outlined-basic"
                  required
                  value={form.bvn.name}
                  onChange={(e) => {
                    setForm({
                      ...form,
                      bvn: { ...form.bvn, name: e.target.value, error: "" },
                    });
                  }}
                  maxLength={11}
                  error={form.bvn.error ? true : false}
                  helperText={form.bvn.error}
                  label="BVN"
                  variant="outlined"
                />
              </div>

              <hr />
            </div>
          </div>

          <LoadingButton
            type="submit"
            variant="contained"
            disabled={creatingstore}
            loading={creatingstore}
          >
            Create Store
          </LoadingButton>
        </form>
        <br />
      </div>
    </div>
  );
};

export default CreateStore;
