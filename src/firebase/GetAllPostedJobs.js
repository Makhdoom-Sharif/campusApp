import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { child, get, getDatabase, ref } from "firebase/database";
import { GetAllJobInit, GetAllJobSuccess, loginSuccess } from "../redux/action";

const auth = getAuth();
const GetAllPostedJobs = async (uid, dispatch) => {
    const dbRef = ref(getDatabase());
    dispatch(GetAllJobInit())
    await get(child(dbRef, `company/${uid}/postedJobs`))
        .then(async (snapshot) => {
            if (snapshot.exists()) {
                dispatch(GetAllJobSuccess(snapshot.val()))
                console.log(snapshot.val());
            } else {
                console.log("Data not found")
            }

        }).catch((error) => {
            console.log(error)
        })
}




export { GetAllPostedJobs }