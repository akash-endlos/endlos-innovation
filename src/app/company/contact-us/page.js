"use client";
import React from "react";
import "./contact-us.css";
import { AiOutlineRight } from "react-icons/ai";
import bg from '../../../../public/assets/contactuss.jpg'
import { Button, FormControl,Checkbox, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, Select, MenuItem, InputLabel, TextareaAutosize, Grid } from '@mui/material';
import { useForm } from "react-hook-form";

const Page = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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

      <div className="d-flex align-items-center gap-2 flex-wrap px-5 py-5">
        <div className="d-flex justify-between align-items-center">
          <div>Home</div> <div><AiOutlineRight /></div>
        </div>
        <div className="d-flex justify-between align-items-center">
          <div>Company</div> <div><AiOutlineRight /></div>
        </div>
        <div className="d-flex justify-between align-items-center">
          <div>About Endlos</div> <div><AiOutlineRight /></div>
        </div>
      </div>
      <div className="container d-flex align-items-center justify-content-center gap-2 py-5">
      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
          <RadioGroup
            aria-label="title"
            name="title"
            row
            {...register('title', { required: true })}
          >
            <FormControlLabel
              value="Mr"
              control={<Radio />}
              label="Mr"
              {...register('title')}
            />
            <FormControlLabel
              value="Ms"
              control={<Radio />}
              label="Ms"
              {...register('title')}
            />
            <FormControlLabel
              value="Mrs"
              control={<Radio />}
              label="Mrs"
              {...register('title')}
            />
          </RadioGroup>
          {errors.title && (
            <span style={{ color: 'red' }}>Please select a title</span>
          )}
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="First Name"
                variant="outlined"
                fullWidth
                {...register('firstName', { required: true })}
                error={errors.firstName ? true : false}
                helperText={errors.firstName ? 'First name is required' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Last Name"
                variant="outlined"
                fullWidth
                {...register('lastName', { required: true })}
                error={errors.lastName ? true : false}
                helperText={errors.lastName ? 'Last name is required' : ''}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Company"
                variant="outlined"
                fullWidth
                {...register('company', { required: true })}
                error={errors.company ? true : false}
                helperText={errors.company ? 'Company is required' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                {...register('city', { required: true })}
                error={errors.city ? true : false}
                helperText={errors.city ? 'City is required' : ''}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Country"
                variant="outlined"
                fullWidth
                {...register('country', { required: true })}
                error={errors.country ? true : false}
                helperText={errors.country ? 'Country is required' : ''}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                error={errors.email ? true : false}
                helperText={
                  errors.email
                    ? errors.email.type === 'required'
                      ? 'Email is required'
                      : 'Invalid email format'
                    : ''
                }
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="interested-label">Interested</InputLabel>
                <Select
                  labelId="interested-label"
                  label="Interested"
                  {...register('interested', { required: true })}
                  error={errors.interested ? true : false}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Phone Number"
                variant="outlined"
                fullWidth
                {...register('phoneNumber', { required: true })}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber ? 'Phone number is required' : ''}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Your Enquiry"
                multiline
                minRows={3}
                maxRows={5}
                variant="outlined"
                fullWidth
                {...register('enquiry', { required: true })}
                error={errors.enquiry ? true : false}
                helperText={errors.enquiry ? 'Your enquiry is required' : ''}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('agree', { required: true })}
                    error={errors.agree ? true : false}
                  />
                }
                label="I agree"
              />
              {errors.agree && (
                <span style={{ color: 'red' }}>You must agree to proceed</span>
              )}
            </Grid>
          </Grid>
          <FormLabel className="py-4">
             I hereby consent to the data collected above being processed in
             accordance with the Privacy Policy for processing my request. This
             consent may be withdrawn at any time with future effect.
           </FormLabel>
          <strong className="my-5">Consent*</strong>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
      </div>
    </>
  );
};

export default Page;




// "use client";
// import React from "react";
// import "./contact-us.css";
// import { AiOutlineRight } from "react-icons/ai";
// import bg from '../../../../public/assets/contactuss.jpg'
// import {
//   Box,
//   Button,
//   Checkbox,
//   FormControl,
//   FormControlLabel,
//   FormGroup,
//   FormLabel,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Radio,
//   RadioGroup,
//   Select,
//   TextField,
// } from "@mui/material";
// import { useForm } from "react-hook-form";

// const Page = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <>
//       <div className="bg-image d-flex align-items-center" style={{ backgroundImage: `url(${bg.src})` }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 text-center">
//               <h1 className="text-white font-weight-bold fs-1">Contact Us</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container px-5 py-4">
//         <div className="d-flex align-items-center gap-2">
//           <p>
//             <span>Home</span> <AiOutlineRight />
//           </p>
//           <p>
//             <span>Company</span> <AiOutlineRight />
//           </p>
//           <p>
//             <span>About Endlos</span> <AiOutlineRight />
//           </p>
//         </div>
//         <h1 className="text-center opacity-75">Contact Us</h1>
//       </div>
//       <div className="d-flex justify-content-center align-items-center">
//         <hr style={{ width: "700px" }} />
//       </div>

//       <div className="container px-5">
//         <RadioGroup
//           aria-labelledby="demo-controlled-radio-buttons-group"
//           name="controlled-radio-buttons-group"
//           {...register("gender")}
//           className="d-flex flex-row flex-xl-row flex-sm-column"
//         >
//           <FormControlLabel
//             value="mrs"
//             control={<Radio />}
//             label="Mrs."
//           />
//           <FormControlLabel
//             value="ms"
//             control={<Radio />}
//             label="Ms."
//           />
//           <FormControlLabel
//             value="mr."
//             control={<Radio />}
//             label="Mr."
//           />
//         </RadioGroup>
//         <div className="form-grid my-4">
//           <FormGroup>
//           <TextField
//             fullWidth
//             label="First name"
//             {...register("first_name", { required: true })}
//             variant="filled"
//           />
//           {errors.first_name && <span>This field is required</span>}
//           </FormGroup>
//           <FormGroup>
//           <TextField
//             fullWidth
//             label="Last name"
//             {...register("last_name", { required: true })}
//             variant="filled"
//           />
//           {errors.last_name && <span>This field is required</span>}
//           </FormGroup>
//           <TextField
//             label="Company"
//             {...register("company")}
//             fullWidth
//             variant="filled"
//           />
//           <TextField
//             fullWidth
//             label="City"
//             {...register("city")}
//             variant="filled"
//           />
//           <TextField
//             fullWidth
//             label="Country"
//             {...register("country")}
//             variant="filled"
//           />
//           <FormControl>
//           <TextField
//             fullWidth
//             label="Email"
//             {...register("email", { required: true })}
//             variant="filled"
//           />
//           {errors.email && <span>This field is required</span>}
//           </FormControl>
//           <Grid container>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <TextField
//                   fullWidth
//                   label="Phone"
//                   {...register("phone")}
//                   variant="filled"
//                 />
//               </Grid>
//             </Grid>
//           </Grid>
//           <FormControl variant="filled">
//             <InputLabel id="demo-simple-select-filled-label">
//               I am Interested In Following Group
//             </InputLabel>
//             <Select
//               {...register("interested")}
//             >
//               <MenuItem value={"product machines"}>Product Machines</MenuItem>
//               <MenuItem value={"services"}>Services</MenuItem>
//               <MenuItem value={"product systems"}>Product Systems</MenuItem>
//             </Select>
//           </FormControl>
//         </div>
//         <Grid item sm={6}>
//           <TextField
//             {...register("text_area")}
//             fullWidth
//             multiline
//             label="Your Enquiry"
//             InputProps={{
//               rows: 10,
//             }}
//           />
//         </Grid>
//         <FormGroup className="py-2">
//           <FormControlLabel
//             control={
//               <Checkbox
//                 {...register("agreed")}
//               />
//             }
//             label="I Agree"
//           />
//           <FormLabel>
//             I hereby consent to the data collected above being processed in
//             accordance with the Privacy Policy for processing my request. This
//             consent may be withdrawn at any time with future effect.
//           </FormLabel>
//           <strong className="my-2">Consent*</strong>
//         </FormGroup>
//         <Button onClick={handleSubmit(onSubmit)} className="form-btn" variant="contained" color="primary">
//           Submit
//         </Button>
//       </div>
//     </>
//   );
// };

// export default Page;
