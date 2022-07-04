import {firebaseConfig, app, database} from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const auth = getAuth();

async function signUp(authParams){
    const { email, password,roll, userName } = authParams
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    writeUserData(uid , email, roll, userName)
  };
  
async function writeUserData(uid,email, roll,userName) {
     try{ await set(ref(database, "users/" + uid), {
       email: email,
       roll: roll,
       userName: userName,
     });}catch(error){
        console.log(error)
    };}

  export{
    signUp

  }
