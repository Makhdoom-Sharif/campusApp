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
  profilePicture: "",
  website: "",
  service: "",
  alljobs: {}
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_ALL_JOB_INIT:
    case type.REGISTER_START:
    case type.LOGIN_START:
    case type.LOGOUT_START:
    case type.PASSWORD_RESET_INITIATE:
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
    case type.JOB_UPDATE_INIT:
    case type.JOB_POST_INIT:
    case type.POFILE_UPDATE_INIT:
      return { ...state, loading: true };
    case type.POFILE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        fullname: action.payload.fullname,
        fathername: action.payload.fathername,
        cnic: action.payload.cnic,
        address: action.payload.address,
        contact: action.payload.contact,
        qualification: action.payload.qualification,
        website: action.payload.website,
        service: action.payload.service
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
        profilePicture: action.payload.ImgUrl,
        website: action.payload.website,
        service: action.payload.service,
        alljobs: action.payload.alljobs
      };
    case type.JOB_UPDATE_FAIL:
    case type.JOB_POST_FAIL:
    case type.PASSWORD_RESET_FAIL:
    case type.PASSWORD_RESET_SUCCESS:

    case type.POFILE_UPDATE_Fail:
    case type.LOGOUT_FAIL:
      return { ...state, loading: false };
    case type.REGISTER_FAIL:
    case type.LOGIN_FAIL:
      return { ...state, loading: false, currentUser: false };
    case type.PROFILE_PICTURE_UPLOAD_SUCCESS:
      return {
        ...state,
        profilePicture: action.payload
      };
    case type.GET_ALL_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        alljobs: action.payload
      }
    case type.JOB_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,

        alljobs: {
          ...state.alljobs,
          [action.payload.jobID]: action.payload,

        }
      }
    case type.JOB_DELETE_INIT:
      return {
        ...state,
        loading: true
      }
    case type.JOB_DELETE_SUCCESS:
      const alljobs = { ...state.alljobs }
      delete alljobs[action.payload]

      return {
        ...state,
        loading: false,
        alljobs
      }
    case type.JOB_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        alljobs: {
          ...state.alljobs,
          [action.payload.jobID]: action.payload
        }
      }
    default:
      return state;
  }
};
export default userReducer;
