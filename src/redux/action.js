import * as type from "./actionType";
import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const registerStart = () => ({
  type: type.REGISTER_START,
});
export const registerSuccess = (Data) => ({
  type: type.REGISTER_SUCCESS,
  payload: {
    uid: Data.uid,
    roll: Data.roll,
    email: Data.email,
    userName: Data.userName,
  },
});
export const registerFail = () => ({
  type: type.REGISTER_FAIL,
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
  payload: {
    email: Data.email,
    uid: Data.uid,
    roll: Data.roll,
    userName: Data.userName,
  },
});
export const loginFail = () => ({
  type: type.LOGIN_FAIL,
});

export const logoutStart = () => ({
  type: type.LOGOUT_START,
});
export const passwordResetInitiaite = () => ({
  type: type.PASSWORD_RESET_INITIATE,
});
export const passwordResetSuccess = () => ({
  type: type.PASSWORD_RESET_SUCCESS,
});
export const passordResetFail = () => ({
  type: type.PASSWORD_RESET_FAIL,
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
