import { push, ref, getDatabase, set, update, remove } from "firebase/database";
import { database } from './firebaseConfig';

import { JobDeleteSuccess, JobPostSuccess } from '../redux/action';


async function AddNewJob(JobData) {
    try {
        const Data = JSON.parse(JSON.stringify(JobData));
        await set(ref(database, `company/${Data.uid}/postedJobs/${Data.jobID}`), {
            JobDesignation: Data.JobDesignation,
            RequiredQualification: Data.RequiredQualification,
            Location: Data.Location,
            VacantPosition: Data.VacantPosition,
            Category: Data.Category,
            jobID: Data.jobID
        });
        JobData.dispatch(JobPostSuccess(Data));
        console.log("job post successfull")
    } catch (error) {
        console.log(error)
    };
}

async function DeleteJob(JobData, uid, dispatch) {

    const Data = JSON.parse(JSON.stringify(JobData))
    console.log("data==>", Data)
    await remove(ref(database, `company/${uid}/postedJobs/${Data.jobID}`)).then(() => {
        dispatch(JobDeleteSuccess(Data))
        console.log("Deleted Success")
    }).catch((e) => {
        console.log("delete fails", e)
    })



}

async function UpdateJob(JobData) {
    console.log("function==>>", JobData)

    const dbRef = ref(getDatabase());
    const db = getDatabase();
    const Data = JSON.parse(JSON.stringify(JobData));
    const updates = {};
    updates[`company/${JobData.uid}/postedJobs/${JobData.jobID}`] = Data;
    await update(ref(db, `company/${JobData.uid}/postedJobs/${JobData.jobID}`), Data).then(() => {
        // userData.dispatch(ProfileUpdateSuccess(userData));
        console.log("Job Updated successfully!");
    })
        .catch(error => {
            console.log(error);
        })






}

export { AddNewJob, UpdateJob, DeleteJob }
