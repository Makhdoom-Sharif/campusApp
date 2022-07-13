import { push, ref, getDatabase, set, update, remove } from "firebase/database";


import { database } from './firebaseConfig';

async function ApplyJob(item, uid) {

    try {
        await push(ref(database, `postedJobs/${item.jobID}/ApplicantsIDs`), [uid]);
        // JobData.dispatch(JobPostSuccess(Data));
        console.log("apply success")
    } catch (error) {
        console.log(error)
    }
    // console.log("applied", item)
    // console.log("uid", uid)

}

export { ApplyJob }