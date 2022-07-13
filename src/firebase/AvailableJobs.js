import { child, get, getDatabase, ref } from "firebase/database";
import { GetAllJobs } from "../redux/action";
const dbRef = ref(getDatabase());


async function AvailableJobs(dispatch) {
    await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {
        if (snapshot.exists())
            console.log("jobs", snapshot.val())
        dispatch(GetAllJobs(snapshot.val()))
    }).catch(error => {
        console.log("available jobs error", error)
    })

}

export { AvailableJobs }