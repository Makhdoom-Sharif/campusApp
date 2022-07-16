import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";
import { registerSuccess } from '../redux/action';
import { AvailableJobs } from "./AvailableJobs";
import { database } from './firebaseConfig';


const auth = getAuth();

async function signUp(authParams) {
  const { email, password, roll, userName, dispatch } = authParams

  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
  writeUserData(uid, email, roll, userName, dispatch)
};

async function writeUserData(uid, email, roll, userName, dispatch) {
  try {
    await set(ref(database, roll === 'student' ? `student/${uid}` : `company/${uid}`), {
      uid: uid,
      email: email,
      roll: roll,
      userName: userName,
    });







    await AvailableJobs(dispatch)
    dispatch(registerSuccess({ uid, email, roll, userName }));

  } catch (error) {
    console.log(error)
  };
}

export {
  signUp

};

