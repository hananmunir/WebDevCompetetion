import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import "./form.css";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Auth/Input";
import Navbar from "../Navbar/Navbar";
const initialState = {
  weight: "",
  notes: "",
};
function Weight() {
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
          <Typography variant='h5'> Weight Tracker </Typography>
          <form className='authForm' onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Input
                name='weight'
                label='Weight (Kg)'
                handleChange={handleChange}
                autoFocus
              />
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

export default Weight;
