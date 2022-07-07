import * as type from "./actionType";

const initialState = {
  loading: false,
  currentUser: false,
  uid: "",
  roll: "",
  error: "",
  isAdmin: false,
  approve: true,
  email: "",
  userName: "",
  fullname: "",
  fathername: "",
  cnic: "",
  address: "",
  contact: "",
  qualification: "",
  profilePicture: ""
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REGISTER_START:
    case type.LOGIN_START:
    case type.LOGOUT_START:
    case type.PASSWORD_RESET_INITIATE:
      // case type.GOOGLE_LOGIN_START:
      // case type.FACEBOOK_LOGIN_START:
      return { ...state, loading: true };
    case type.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: false,
        loading: false,
        roll: "",
        userName: "",
        email: "",
        uid: ""
      };
    case type.STUDENT_POFILE_UPDATE_INIT:
      return { ...state, loading: true };
    case type.STUDENT_POFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        fullname: action.payload.fullname,
        fathername: action.payload.fathername,
        cnic: action.payload.cnic,
        address: action.payload.address,
        contact: action.payload.contact,
        qualification: action.payload.qualification
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
        fullname: action.payload.fullname,
        fathername: action.payload.fathername,
        cnic: action.payload.cnic,
        address: action.payload.address,
        contact: action.payload.contact,
        qualification: action.payload.qualification,
        profilePicture: action.payload.profilePicture,
      };
    case type.STUDENT_POFILE_UPDATE_Fail:
    case type.LOGOUT_FAIL:
      return { ...state, loading: false };
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
      return { ...state, loading: false, currentUser: false };
    case type.PASSWORD_RESET_FAIL:
    case type.PASSWORD_RESET_SUCCESS:
      return { ...state, loading: false };
    case type.CLEAR_ERROR:
      return { ...state, error: "" };
    case type.SAVE_UID:
      return { ...state, uid: action.payload };
    case type.PROFILE_PICTURE_UPLOAD_SUCCESS:
      return {
        ...state,
        profilePicture: action.payload
      };
    default:
      return state;
  }
};
export default userReducer;
