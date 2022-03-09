import React from "react";
import Button from "@mui/material/Button";

const UserDashboardButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      style={{
        background: props.background,
        marginLeft: "10px",
        color: props.color,
        cursor: "pointer",
      }}
      variant="contained"
    >
      {props.name}
    </Button>
  );
};

export default UserDashboardButton;
