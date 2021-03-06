import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./UserDashboard.css";
import UserDashboardButton from "../../components/UserDashboardButton/UserDashboardButton";
import Paper from "@mui/material/Paper";
import DayButton from "../DayButton/DayButton";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import axios from "axios";
import jwt_decode from "jwt-decode";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const data = {
  labels,
  datasets: [
    //   {
    //     label: 'Delivery Spend',
    //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    //     // backgroundColor: 'rgba(255, 99, 132, 0.5)',
    //     backgroundColor: "#4270b7"
    //   },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const UserDashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [storeDetails, setStoreDetails] = useState({
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

  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: null,
  });

  useEffect(() => {
    let authorizationHeader = `Bearer ${token}`;
    let decoded = jwt_decode(token);

    // let history = useHistory()

    // console.log(token)

    const baseURL = "https://api.boxin.ng/api/v1/store";

    const getStoreDetails = async () => {
      axios
        .get(`${baseURL}/get-store/`, {
          headers: { Authorization: authorizationHeader },
        })
        .then((res) => {
          console.log(res.data);
          setStoreDetails(res.data.store_details);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const decodeToken = () => {
      setUserDetails({
        firstname: decoded.firstname,
        lastname: decoded.lastname,
        email: decoded.email,
      });
      // console.log(decoded)
    };

    if (userDetails.email === null) {
      decodeToken();
    }

    if (storeDetails.user === null) {
      getStoreDetails();
    }

    //     if (token) {
    //         getStoreDetails()
    //     } else {
    //         history.push('/signin')
    //     }
  }, [storeDetails, userDetails]);

  const copyText = async () => {
    console.warn(window.location.origin);
    try {
      let decoded = jwt_decode(token);
      let ref_link = `${window.location.origin}?uid=${decoded.user_id}`;
      await navigator.clipboard.writeText(ref_link);
      alert("Referral link copied to clipboard!");
    } catch (error) {
      console.warn("copyText", String(error));
    }
  };

  const greeting = () => {
    const date = new Date();
    if (date.getHours() < 12) {
      return "Morning";
    } else if (date.getHours() >= 12 && date.getHours() < 16) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  return (
    <div className="userDashboard">
      <div className="userDashboard__head">
        <h1>
          Good {greeting()}, {userDetails.firstname}{" "}
        </h1>

        <UserDashboardButton
          name="TRANSFER FUNDS"
          background="white"
          color="black"
        />
        <UserDashboardButton
          name="FUND ACCOUNT"
          background="white"
          color="black"
        />
        <UserDashboardButton
          name="COPY REFERRAL LINK"
          onClick={copyText}
          background="white"
          color="black"
        />
      </div>

      <div className="userDashboard__details">
        <Paper elevation={3} className="paper">
          <small>FUNDS</small>
          <div className="userDashboard__amount color">
            {storeDetails?.wallets?.available_funds || "0.00"}{" "}
            <small>NGN</small>
          </div>
        </Paper>

        <Paper elevation={3} className="paper">
          <small>ESCROW</small>
          <div className="userDashboard__amount">
            {storeDetails?.wallets?.escrow || "0.00"} <small>NGN</small>
          </div>
        </Paper>

        <Paper elevation={3} className="paper">
          <small>CREDITS</small>
          <div className="userDashboard__amount">
            {storeDetails?.wallets?.boxin_credits || "0.00"}
            <small>NGN</small>
          </div>
        </Paper>

        <Paper elevation={3} className="paper">
          <small>YOUR ACCOUNT NUMBER</small>
          <div className="userDashboard__amount">
            {storeDetails?.wallets?.account_number || (
              <p className="medium_text">
                You will receive an acct no once you are verified{" "}
              </p>
            )}
          </div>
        </Paper>
      </div>

      <div className="userDashboard__daySorting">
        {/* <DayButton name="TODAY" background="white" color="black"/> */}
        <DayButton name="THIS WEEK" background="white" color="black" />
        <DayButton name="THIS MONTH" background="white" color="black" />
        {/* <DayButton name="THIS QUATER" background="white" color="black"/> */}
        {/* <DayButton name="THIS YEAR" background="white" color="black"/> */}
      </div>

      <div className="userDashboard__deliveries">
        <div className="userDashboard__deliveriesMain">
          <h4>DELIVERY SPEND</h4>
          <p>Total deliveries within the specified period </p>

          <div>
            <Bar options={options} data={data} />
          </div>
        </div>

        <div className="userDashboard__deliveriesSide">
          <div className="top">
            <h4>DELIVERY SPEND</h4>
            <h2 className="color">&#8358;100,000.00</h2>
            <small>
              This is how much you've spent on deliveries in the specified
              period
            </small>
          </div>

          <hr />

          <div className="bottom">
            <h4>E-COMMERCE SALES</h4>
            <h2>&#8358;1,000,000.00</h2>
            <small>
              This is how much revenue you've made in the specified period
            </small>
          </div>
        </div>
      </div>

      {/* <div className="userDashboard__bottom">
                <div className="userDashboard__orders box">
                    <h4>ORDERS</h4>
                    <p>Total orders received within the specified period</p>
                    <p className="amount">0</p>
                </div>
                <div className="userDashboard__revenue box">
                    <h4>REVENUE</h4>
                    <p>Revenue generated within the specified period</p>
                    <p className="amount">&#8358;0.00</p>
                </div>
                <div className="userDashboard__customers box">
                    <h4>CUSTOMERS</h4>
                    <p>Unique customers within the specified period</p>
                    <p className="no_of_customers">0</p>
                </div>
            </div> */}
    </div>
  );
};

export default UserDashboard;
