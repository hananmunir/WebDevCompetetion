import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  FormControlLabel,
  Checkbox,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";
import "./form.css";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../Auth/Input";

import { signup, signin } from "../../actions/auth";
import Navbar from "../Navbar/Navbar";
const initialState = {
  systolic: "",
  distolic: "",
  pulse: "",
  arm: "",
  notes: "",
};
function BloodPressureForm() {
  const [pulse, setPulse] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Navbar />
      <Container component='main' maxWidth='xs' className='authSection'>
        <Paper className='authPaper' evaluation={3}>
          <Typography variant='h5'> Blood Pressure Tracker </Typography>
          <form className='authForm' onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <>
                <Input
                  name='systolic'
                  label='Systolic Pressure(mm Hg)'
                  handleChange={handleChange}
                  autoFocus
                />
                <Input
                  name='diastolic'
                  label='Diastolic Pressure(mm Hg)'
                  handleChange={handleChange}
                  autoFocus
                />
              </>
              <FormControlLabel
                label='Pulse'
                style={{
                  marginLeft: "7px ",
                  marginTop: "10px",
                  marginBottom: "10px",
                  color: "rgba(0,0,0,.6)",
                }}
                control={
                  <Checkbox
                    checked={pulse}
                    //indeterminate={checked[0] !== checked[1]}
                    onChange={() => {
                      setPulse((prevState) => !prevState);
                      handleChange();
                    }}
                  />
                }
              />
              <FormControl style={{ marginLeft: "17px" }} fullWidth>
                <InputLabel id='arm'>Measured Arm</InputLabel>
                <Select
                  labelId='arm'
                  id='arm'
                  name='arm'
                  label='Measured Arm'
                  onChange={handleChange}
                >
                  <MenuItem value='LeftArm'>Left Arm</MenuItem>
                  <MenuItem value='RightArm'>Right Arm</MenuItem>
                </Select>
              </FormControl>

              <Input
                name='notes'
                label='Notes'
                handleChange={handleChange}
                required
              />
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              className='authSubmit'
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default BloodPressureForm;
