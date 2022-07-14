import { push, ref, getDatabase, set, update, remove } from "firebase/database";


import { database } from './firebaseConfig';

async function ApplyJob(item, uid) {
    // console.log(item.jobID)
    // console.log(uid)
    try {
        await set(ref(database, `postedJobs/${item.jobID}/ApplicantsIDs/${uid}`), [uid]);
        console.log("apply success")
    } catch (error) {
        console.log(error)
    }

}

export { ApplyJob }