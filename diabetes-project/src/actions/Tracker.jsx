import { FETCH_ALL } from "../constants/actionTypes";
import * as api from "../api";

export const getBloodSugarLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBloodSugar();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getWeightLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWeight();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getBloodPressureLogs = () => async (dispatch) => {
  try {
    const { data } = await api.fetchBloodPressure();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};