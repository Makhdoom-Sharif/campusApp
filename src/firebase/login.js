import { CompareRounded } from "@material-ui/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, equalTo, get, getDatabase, query, ref } from "firebase/database";
import { GetAllJobs, loginSuccess } from "../redux/action";
import { AvailableJobs } from "./AvailableJobs";
import { database } from "./firebaseConfig";

const auth = getAuth();
const loginUser = async (authParams) => {

  const auth = getAuth();
  const { email, password, dispatch } = authParams
  // const { Jobs, setJobs } = ArryJobs
  const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `student/${uid}`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        await AvailableJobs(dispatch)
        await snapshot.val();
        await dispatch(loginSuccess(snapshot.val()));
      } else {
        await get(child(dbRef, `company/${uid}`))
          .then(async (snapshot) => {
            if (snapshot.exists()) {
              await dispatch(loginSuccess(snapshot.val()))
              await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {

                // const ref = database.ref(database,'postedJobs');
                // ref.orderByChild('').equalTo(25).on('child_added', (snapshot) => {
                //   console.log(snapshot.key);
                // });
                // const qData = await query(ref(database, 'postedJobs'), equalTo(uid))
                // console.log("qData====>", qData)
                // console.log("database==>", equalTo(uid, child("companyID")))
                if (snapshot.exists())


                  console.log("jobs==>", snapshot.val())
                dispatch(GetAllJobs(snapshot.val()))
              })

                ;
            }

          }).catch((error) => {
            console.error(error)
          })
      }
    })
    .catch((error) => {
      console.error(error);
    });

}




export default loginUser