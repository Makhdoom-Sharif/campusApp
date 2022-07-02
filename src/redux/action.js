import * as type from "./actionType";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const registerStart = () => ({
  type: type.REGISTER_START,
});
const registerSuccess = (user) => ({
  type: type.REGISTER_SUCCESS,
  payload: user,
});
const registerFail = (error) => ({
  type: type.REGISTER_FAIL,
  payload: error,
});

export const loginStart = () => ({
  type: type.LOGIN_START,
});

export const saveUid = (Data) => ({
  type: type.SAVE_UID,
  payload: Data,
});
export const loginSuccess = (Data) => ({
  type: type.LOGIN_SUCCESS,
  payload: Data.roll,
});
export const loginFail = () => ({
  type: type.LOGIN_FAIL,
});

export const logoutStart = () => ({
  type: type.LOGOUT_START,
});
export const logoutSuccess = () => ({
  type: type.LOGOUT_SUCCESS,
});
export const logoutFail = (error) => ({
  type: type.LOGOUT_FAIL,
  payload: error,
});

export const setUser = (user) => ({
  type: type.SET_USER,
  payload: user,
});

export const clearError = () => ({
  type: type.CLEAR_ERROR,
});