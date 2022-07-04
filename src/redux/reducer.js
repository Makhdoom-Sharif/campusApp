import * as type from "./actionType";

const initialState = {
  loading: false,
  currentUser: null,
  uid: null,
  roll: null,
  error: "",
  isAdmin: false,
  approve: true,
  email: "",
  userName: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_START:
    case type.LOGIN_START:
    case type.LOGOUT_START:
    case type.PASSWORD_RESET_INITIATE:
      // case type.GOOGLE_LOGIN_START:
      // case type.FACEBOOK_LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: false,
        loading: false,
        roll: null,
        userName: "",
        email: "",
        uid: null,
      };
    case type.SET_USER:
      return {
        ...state,
        loading: false,
        currentUser: true,
        roll: action.payload,
        error: "",
      };
    case type.LOGIN_SUCCESS:
    case type.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: true,
        roll: action.payload.roll,
        email: action.payload.email,
        uid: action.payload.uid,
        userName: action.payload.userName,
      };
      case type.LOGOUT_FAIL:
          return {
              ...state,
              loading: false
          }

    //   // case type.GOOGLE_LOGIN_SUCCESS:
    //   // case type.FACEBOOK_LOGIN_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     currentUser: true,
    //     roll: action.payload,
    //     error: "",
    //   };
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        currentUser: false,
      };
    case type.PASSWORD_RESET_FAIL:
    case type.PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case type.CLEAR_ERROR:
      return {
        ...state,
        error: "",
      };
    case type.SAVE_UID:
      return {
        ...state,
        uid: action.payload,
      };
    default:
      return state;
  }
};
export default userReducer;
