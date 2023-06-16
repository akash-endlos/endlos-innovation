"use client";
import React, { useState } from "react";
import "./contact-us.css";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import bg from '../../../../public/assets/contactuss.jpg'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import { CountryCode } from "./country-code";
const page = () => {
  const [formData, setformData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    gender: "",
    interested: "",
    street_address: "",
    postal_code: "",
    country: "",
    city: "",
    email: "",
    text_area: "",
    country_code: "",
    area_code: "",
    phone_number: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    console.log(formData);
  };
  return (
    <>
      <div className="bg-image d-flex align-items-center" style={{ backgroundImage: `url(${bg.src})` }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="text-white font-weight-bold fs-1">Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container px-5 py-4">
        <div className="d-flex align-items-center gap-2">
          <p>
            <span>Home</span> <AiOutlineRight />
          </p>
          <p>
            <span>Company</span> <AiOutlineRight />
          </p>
          <p>
            <span>About Endlos</span> <AiOutlineRight />
          </p>
        </div>
        <h1 className="text-center opacity-75">Contact Us</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <hr style={{ width: "700px" }} />
      </div>

      <div className="container px-5">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={formData.gender}
          onChange={handleChange}
          className="d-flex flex-row flex-xl-row flex-sm-column"
        >
          <FormControlLabel
            name="gender"
            value="mrs"
            control={<Radio />}
            label="Mrs."
          />
          <FormControlLabel
            name="gender"
            value="ms"
            control={<Radio />}
            label="Ms."
          />
          <FormControlLabel
            name="gender"
            value="mr."
            control={<Radio />}
            label="Mr."
          />
        </RadioGroup>
        <div className="form-grid my-4">
          <TextField
            fullWidth
            label="First name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            variant="filled"
          />
          <TextField
            fullWidth
            value={formData.last_name}
            onChange={handleChange}
            label="Last name"
            name="last_name"
            variant="filled"
          />
          <TextField
            value={formData.company}
            onChange={handleChange}
            name="company"
            fullWidth
            label="Company"
            variant="filled"
          />
          {/* <TextField
            fullWidth
            value={formData.street_address}
            onChange={handleChange}
            name="street_address"
            label="Street address"
            variant="filled"
          /> */}
          {/* <TextField
            fullWidth
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            label="Postal Code"
            variant="filled"
          /> */}
          <TextField
            fullWidth
            name="city"
            value={formData.city}
            onChange={handleChange}
            label="City"
            variant="filled"
          />
          <TextField
            fullWidth
            name="country"
            value={formData.country}
            onChange={handleChange}
            label="Country"
            variant="filled"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="filled"
          />
          <Grid container>
            <Grid container spacing={2}>
              {/* <Grid item xs={4}>
                <FormControl fullWidth>
                  <InputLabel>Country Code</InputLabel>
                  <Select
                    name="country_code"
                    value={formData.country_code}
                    onChange={handleChange}
                    id="demo-simple-select"
                    label="Country Code"
                  >
                    {CountryCode.map((item, index) => (
                      <MenuItem
                        key={index}
                        value={item.dial_code}
                      >{`${item.name} ${item.dial_code}`}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  fullWidth
                  name="area_code"
                  value={formData.area_code}
                  onChange={handleChange}
                  label="Area Code"
                  variant="filled"
                />
              </Grid> */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  value={formData.phone}
                  onChange={handleChange}
                  label="Phone"
                  variant="filled"
                />
              </Grid>
            </Grid>
          </Grid>
          <FormControl variant="filled">
            <InputLabel id="demo-simple-select-filled-label">
              I am Interested In Following Group
            </InputLabel>
            <Select
              name="interested"
              value={formData.interested}
              onChange={handleChange}
            >
              <MenuItem value={"product machines"}>Product Machines</MenuItem>
              <MenuItem value={"services"}>Services</MenuItem>
              <MenuItem value={"product systems"}>Product Systems</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Grid item sm={6}>
          <TextField
            name="text_area"
            value={formData.text_area}
            onChange={handleChange}
            fullWidth
            multiline
            label="Your Enquiry"
            InputProps={{
              rows: 10,
            }}
          />
        </Grid>
        <FormGroup className="py-2">
          <FormControlLabel
            control={
              <Checkbox
                name="agreed"
                onChange={() =>
                  setformData({ ...formData, agreed: !formData.agreed })
                }
              />
            }
            label="I Agree"
          />
          <FormLabel>
            I hereby consent to the data collected above being processed in
            accordance with the Privacy Policy for processing my request. This
            consent may be withdrawn at any time with future effect.
          </FormLabel>
          <strong className="my-2">Consent*</strong>
        </FormGroup>
        <button onClick={() => handleSubmit()} className="form-btn">
          Submit
        </button>
      </div>
    </>
  );
};

export default page;
