import {firebaseConfig, app, database} from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


const auth = getAuth();

async function signUp(authParams){
    const { fullname, email, password,roll } = authParams
    const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, password)
    writeUserData(uid , fullname, email, roll)
  };
  
async function writeUserData(uid, fullname, email, roll) {
     try{ await set(ref(database, 'users/' + uid), {
      username: fullname,
      email: email,
      roll: roll
         })}catch(error){
        console.log(error)
    };}

  export{
    signUp

  }
