import { CompareRounded } from "@material-ui/icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, equalTo, get, getDatabase, query, ref } from "firebase/database";
import { GetAllJobs, loginSuccess } from "../redux/action";
import { AvailableJobs } from "./AvailableJobs";
import { database } from "./firebaseConfig";

const auth = getAuth();
const loginUser = async (authParams) => {

  const auth = getAuth();
  const { email, password, dispatch, navigate } = authParams
  const { user: { uid } } = await signInWithEmailAndPassword(auth, email, password)
  const dbRef = ref(getDatabase());
  await get(child(dbRef, `student/${uid}`))
    .then(async (snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        await AvailableJobs(dispatch, uid)
        await snapshot.val();
        await dispatch(loginSuccess(snapshot.val()));
        navigate("/student")
      } else {
        await get(child(dbRef, `company/${uid}`))
          .then(async (snapshot) => {
            if (snapshot.exists()) {
              await dispatch(loginSuccess(snapshot.val()))

              await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {

                if (snapshot.exists()) {

                  async function filterArray() {
                    return await [...Object.entries(snapshot.val()).map(entry => entry[1])].filter(element => element.companyID === uid)
                  }
                  const jobArray = await filterArray()
                  dispatch(GetAllJobs(jobArray))
                  //                   async function filterApplicants() {
                  //                     return const Job appli await [jobArray.filter(element=> element.ApplicantsIDs)]
                  // }








                  navigate("/company")
                }
              })

                ;
            }

          }).catch((error) => {
            console.error(error)
          })
        navigate("/company")
      }
    })
    .catch((error) => {
      console.error(error);
    });

}




export default loginUser