import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = api.signIn(formData);
    console.log("SignIn Successful", data);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  try {
    
    const { data } = api.signUp(formData);
    console.log("Signup Successful", data);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
