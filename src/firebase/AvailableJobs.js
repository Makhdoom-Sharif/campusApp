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



            async function AvailableJobs() {

                return await jobArray?.map((item, index) =>
                    item?.ApplicantsIDs ?
                        Object?.entries(item?.ApplicantsIDs)?.map((entry) => entry[0] === uid ? false : item) : item)
            }


            async function AppliedJobs() {

                return await jobArray?.map((item, index) =>
                    item?.ApplicantsIDs ?
                        Object?.entries(item?.ApplicantsIDs)?.map((entry) => entry[0] === uid ? item : false) : false)
            }

            const AvailableJobsArray = await AvailableJobs()

            const AppliedJobsArray = await AppliedJobs()

            dispatch(GetAllJobs(AvailableJobsArray.flat()))

            dispatch(AppliedJobsGetSuccess(AppliedJobsArray.flat()))


            // console.log('Availablearray=>', AvailableJobsArray.flat())
            // console.log('Appliedarray=>', AppliedJobsArray.flat())






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