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
                    item.blocked ? false :
                        item?.ApplicantsIDs ?
                            Object?.entries(item?.ApplicantsIDs)?.map((entry) => entry[0] === uid ? false : item) : item)
            }


            async function AppliedJobs() {

                return await jobArray?.map((item, index) =>
                    item.blocked ? false :
                        item?.ApplicantsIDs ?
                            Object?.entries(item?.ApplicantsIDs)?.map((entry) => entry[0] === uid ? item : false) : false)
            }

            const AvailableJobsArray = await AvailableJobs()

            const AppliedJobsArray = await AppliedJobs()

            dispatch(GetAllJobs(AvailableJobsArray.flat()))

            dispatch(AppliedJobsGetSuccess(AppliedJobsArray.flat()))
        }
    }).catch(error => {
        console.log("available jobs error", error)
    })

}








const AllJobsArray = async (uid, dispatch) => {
    await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {

        if (snapshot.exists()) {

            async function filterArray() {
                return await [...Object.entries(snapshot.val()).map(entry => entry[1])].filter(element => element.companyID === uid)
            }
            const jobArray = await filterArray()
            dispatch(GetAllJobs(jobArray))

        }
    })
}






export { AvailableJobs, AllJobsArray };
