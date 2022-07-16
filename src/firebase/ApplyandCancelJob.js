import { push, ref, getDatabase, set, update, remove } from "firebase/database";
import { ApplyJobSuccess } from "../redux/action";

import { AvailableJobs } from "./AvailableJobs";
import { database } from './firebaseConfig';

async function ApplyJob(item, uid, dispatch) {
    // console.log(item.jobID)
    // console.log(uid)
    try {
        await set(ref(database, `postedJobs/${item.jobID}/ApplicantsIDs/${uid}`), [uid]);
        await AvailableJobs(dispatch)
        console.log("apply success")
    } catch (error) {
        console.log(error)
    }

}

export { ApplyJob }