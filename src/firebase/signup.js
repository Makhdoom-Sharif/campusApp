import {firebaseConfig, app, database} from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { registerSuccess } from '../redux/action';


const auth = getAuth();

async function signUp(authParams){
    const { email, password,roll, userName,dispatch } = authParams
    
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    writeUserData(uid , email, roll, userName,dispatch)
  };
  
async function writeUserData(uid,email, roll,userName,dispatch) {
     try{ await set(ref(database, "users/" + uid), {
       email: email,
       roll: roll,
       userName: userName,
     });
       dispatch(registerSuccess({uid,email,roll,userName}));
     } catch (error) {
        console.log(error)
    };}

  export{
    signUp

  }
