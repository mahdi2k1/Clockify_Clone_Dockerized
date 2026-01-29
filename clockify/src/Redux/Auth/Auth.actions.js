import axios from "axios";
import { error, loading, register } from "./Auth.types";
import { toast } from "react-toastify";

const API_BASE_URL =
  process.env.REACT_APP_API_URL || "https://clcok2.onrender.com/api";
const API_URL = `${API_BASE_URL}/users/`;

const toastOptions = {
  position: "bottom-left",
  autoClose: 8000,
  draggable: true,
};

export const registerApi = (userData) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    console.log(userData);
    const { data } = await axios.post(API_URL, userData);
    dispatch({ type: register, payload: data });
  } catch (e) {
    toast.error(e.message, toastOptions);
    dispatch({ type: error, payload: e.message });
  }
};

export const loginApi = (userData) => async (dispatch) => {
  dispatch({ type: loading });
  try {
    const { data } = await axios.post(API_URL + "login", userData);
    console.log(data);
    dispatch({ type: register, payload: data });
  } catch (e) {
    toast.error(e.message, toastOptions);
    dispatch({ type: error, payload: e.message });
  }
};
