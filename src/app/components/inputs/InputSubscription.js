import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { HiOutlineArrowRight } from "react-icons/hi";
import "./input.css";
import { IconContext } from "react-icons";

export default function BasicTextFields() {
  return (
    <Box
      className="d-flex flex-row gap-5 align-items-center"
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ width: "25rem" }}
        id="outlined-basic"
        label="Enter Your Email"
        variant="outlined"
      />
      <div className="arrowicon-in-circle">
        <IconContext.Provider value={{ color: "gray", size: 30 }}>
          <HiOutlineArrowRight className="pointer" width={120} height={24} />
        </IconContext.Provider>
      </div>
    </Box>
  );
}
