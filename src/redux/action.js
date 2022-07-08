import * as type from "./actionType";

export const registerStart = () => ({
  type: type.REGISTER_START
});
export const registerSuccess = Data => ({
  type: type.REGISTER_SUCCESS,
  payload: {
    uid: Data.uid,
    roll: Data.roll,
    email: Data.email,
    userName: Data.userName
  }
});
export const registerFail = () => ({
  type: type.REGISTER_FAIL
});

export const loginStart = () => ({
  type: type.LOGIN_START
});


export const loginSuccess = Data => ({
  type: type.LOGIN_SUCCESS,
  payload: {
    email: Data.email,
    uid: Data.uid,
    roll: Data.roll,
    userName: Data.userName,
    fullname: Data.fullname,
    fathername: Data.fathername,
    cnic: Data.cnic,
    address: Data.address,
    contact: Data.contact,
    qualification: Data.qualification,
    ImgUrl: Data.ImgUrl,
    website: Data.website,
    service: Data.service
  }
});
export const loginFail = () => ({
  type: type.LOGIN_FAIL
});

export const logoutStart = () => ({
  type: type.LOGOUT_START
});
export const passwordResetInitiaite = () => ({
  type: type.PASSWORD_RESET_INITIATE
});
export const passwordResetSuccess = () => ({
  type: type.PASSWORD_RESET_SUCCESS
});
export const passordResetFail = () => ({
  type: type.PASSWORD_RESET_FAIL
});
export const logoutSuccess = () => ({
  type: type.LOGOUT_SUCCESS
});
export const logoutFail = error => ({
  type: type.LOGOUT_FAIL,
  payload: error
});



export const ProfileUpdateInit = () => ({
  type: type.POFILE_UPDATE_INIT
});
export const ProfileUpdateSuccess = Data => ({
  type: type.POFILE_UPDATE_SUCCESS,
  payload: {
    fullname: Data.fullname,
    fathername: Data.fathername,
    cnic: Data.cnic,
    address: Data.address,
    contact: Data.contact,
    qualification: Data.qualification,
    website: Data.website,
    service: Data.service
  }
});
export const ProfileUpdateFail = Data => ({
  type: type.POFILE_UPDATE_Fail
});
export const ProfilePictureUploadSuccess = Data => ({
  type: type.PROFILE_PICTURE_UPLOAD_SUCCESS,
  payload: Data
});

export const JobPostInit = () => ({
  type: type.JOB_POST_INIT
})


export const JobPostSuccess = () => ({
  type: type.JOB_POST_SUCCESS
})

export const JobPostFail = () => ({
  type: type.JOB_POST_FAIL
})


export const GetAllJobInit = () => ({
  type: type.GET_ALL_JOB_INIT
})

export const GetAllJobSuccess = (Data) => ({
  type: type.GET_ALL_JOB_SUCCESS,
  payload: Data
})