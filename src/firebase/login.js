import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { loginInitiate,clearError,loginStart,loginSuccess,loginFail } from "../redux/action";

const auth = getAuth();
const loginUser= async (authParams)=>{
  
  const auth = getAuth();
  const {email, password, dispatch} = authParams
  
  const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
  const dbRef = ref(getDatabase());
await get(child(dbRef, `users/${uid}`))
  .then(async (snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      const { userName, roll } = await snapshot.val();
       await dispatch(loginSuccess({uid, email, userName, roll}));
    } else {
      console.log("Login fail");
    }
  })
  .catch((error) => {
    console.error(error);
  });

}
  



export default loginUser