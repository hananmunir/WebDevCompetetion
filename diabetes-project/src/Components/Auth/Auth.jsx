import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import "./Auth.css";
import { useDispatch } from "react-redux";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "./Input";

import { AUTH } from "../../constants/actionTypes";
import { signup, signin } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function Auth(props) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const handleShowPassword = () => setShowPassword((prevState) => !prevState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //Functions
  const switchMode = () => {
    setIsSignUp((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Container component='main' maxWidth='xs' className='authSection'>
      <Paper className='authPaper' evaluation={3}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
        <form className='authForm' onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name='firstName'
                  label='First Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name='lastName'
                  label='Last Name'
                  handleChange={handleChange}
                  autoFocus
                  half
                />
              </>
            )}
            <Input
              name='email'
              label='Email Address'
              handleChange={handleChange}
              type='email'
            />
            <Input
              name='password'
              label='Password'
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignUp && (
              <Input
                name='confirmPassword'
                label='Confirm Password'
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
            )}
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className='authSubmit'
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Button
            fullWidth
            variant='contained'
            className='authSubmit'
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Button className='authInquiryText' onClick={switchMode}>
                {isSignUp
                  ? "Already Have An Account? Sign In"
                  : "Don't Have An Account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Auth;
