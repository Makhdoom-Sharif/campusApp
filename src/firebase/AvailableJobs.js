import { async } from "@firebase/util";
import { child, get, getDatabase, ref } from "firebase/database";
import { AppliedJobsGetSuccess, GetAllJobs } from "../redux/action";
const dbRef = ref(getDatabase());


async function AvailableJobs(dispatch, uid) {
    await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {
        if (snapshot.exists()) {
            async function myFunction() {
                return await [...Object.entries(snapshot.val()).map(entry => entry[1])]
            }
            const jobArray = await myFunction()
            dispatch(GetAllJobs(jobArray))


            async function AppliedJobs() {

                return await jobArray?.map((item, index) =>
                    item?.ApplicantsIDs &&
                    Object?.keys(item?.ApplicantsIDs) == uid && item)
            }

            const AppliedJobsArray = await AppliedJobs()
            dispatch(AppliedJobsGetSuccess(AppliedJobsArray))





            // console.log('applicants==>', arr)


            // const ListArray = [...Object.entries(JobDetails?.ApplicantsIDs)?.map(entry => entry[0])]

            // ref.orderByChild('height').equalTo(25).on('child_added', (snapshot) => {
            //     console.log(snapshot.key);
            // });
            // async function appliedJobs() {
            //     return await jobArray.map((item, index) => item?.ApplicantsIDs)
            // }



            // const appliedjobs = await appliedJobs()


            // console.log("applied====>", appliedjobs)





        }
    }).catch(error => {
        console.log("available jobs error", error)
    })

}

export { AvailableJobs }