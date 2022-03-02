import {
  Button,
  Container,
  Grid,
  Paper,
  Typography,
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
import Navbar from "../Navbar/Navbar";

const initialState = {
  sugar: "",
  measured: "",
  notes: "",
};
function SugarForm() {
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
          <Typography variant='h5'> Blood Sugar Tracker </Typography>
          <form className='authForm' onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Input
                name='sugar'
                label='Blood Sugar Cocentration (mmol/L)'
                handleChange={handleChange}
                autoFocus
              />
              <FormControl
                style={{ marginLeft: "17px", marginTop: "15px" }}
                fullWidth
              >
                <InputLabel id='Measured'>Measured</InputLabel>
                <Select
                  name='measured'
                  labelId='Measured'
                  id='Measured'
                  label='Measured'
                  onChange={handleChange}
                >
                  <MenuItem value='beforeBreakfast'>Before Breakfast</MenuItem>
                  <MenuItem value='afterBreakfast'>After Breakfast</MenuItem>
                  <MenuItem value='beforeLunch'>Before Lunch</MenuItem>
                  <MenuItem value='afterLunch'>After Lunch</MenuItem>
                  <MenuItem value='beforeDinner'>Before Dinner</MenuItem>
                  <MenuItem value='afterDinner'>After Dinner</MenuItem>
                  <MenuItem value='beforeSleep'>Before Sleep</MenuItem>
                  <MenuItem value='afterSleep'>After Sleep</MenuItem>
                  <MenuItem value='fasting'>Fasting</MenuItem>
                  <MenuItem value='other'>Other</MenuItem>
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

export default SugarForm;
