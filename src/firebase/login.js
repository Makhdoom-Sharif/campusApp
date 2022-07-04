import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { loginInitiate,clearError,loginStart,loginSuccess,loginFail } from "../redux/action";
import { dispatch } from "../components/Login";

const auth = getAuth();
const loginUser= async (authParams)=>{
  
  const auth = getAuth();
  const {email, password} = authParams
  try{
  dispatch(loginStart());
  const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
  const db = getDatabase();
  const dbRef = ref(getDatabase());
await get(child(dbRef, `users/${uid}`)).then((snapshot) => {
if (snapshot.exists()) {
  console.log(snapshot.val().roll)
  dispatch(loginSuccess(snapshot.val()))
  console.log("Login Successfull")
} else {

  console.log("Login fail");
}
}).catch((error) => {
console.error(error);
});

}
  catch(error){
      // alert(error)
      dispatch(loginFail())
  }}
  



export {loginUser}