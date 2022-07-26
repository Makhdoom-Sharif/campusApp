import { getDatabase, ref, remove, set, update, get, child } from "firebase/database";
import { database } from './firebaseConfig';
import { getAuth } from "firebase/auth";
import { CompanyBlockedOrUnNlockSuccess, StudentBlockedOrUnNlockSuccess } from "../redux/action";
// import { getDatabase, ref, remove, set, update } from "firebase/database";
// import { JobDeleteSuccess, JobPostSuccess } from '../redux/action';


const dbRef = ref(getDatabase());
async function handleBlockOrUnblock(role, item, dispatch, index) {

    // const Data = JSON.parse(JSON.stringify(JobData))
    // await remove(ref(database, `postedJobs/${Data.jobID}`)).then(() => {
    //     dispatch(JobDeleteSuccess(index))
    //     console.log("Deleted Success")
    // }).catch((e) => {
    //     console.log("delete fails", e)
    // })

    const data = item.blocked ? { ...item, blocked: false } : { ...item, blocked: true }
    // console.log("data=>", data)
    await update(ref(database, `${role}/${data.uid}`), { blocked: data.blocked }).then(async () => {
        if (role === "student") {

            console.log("success student")

            dispatch(StudentBlockedOrUnNlockSuccess({ index, data }))

        }
        else {
            await get(child(dbRef, `postedJobs/`)).then(async (snapshot) => {

                if (snapshot.exists()) {

                    async function filterArray() {
                        return await [...Object.entries(snapshot.val()).map(entry => entry[1])].filter(element => element.companyID === data.uid)
                    }
                    const jobArray = await filterArray()
                    jobArray.map((item, index) => {
                        update(ref(database, `postedJobs/${item.jobID}`), { blocked: data.blocked })
                    })

                }
            })


            dispatch(CompanyBlockedOrUnNlockSuccess({ index, data }))

            console.log("S==>", data)
            // console.log("C==>", { index, item })
            // dispatch(ApprovalSuccessCompanies({ index, item }))
        }
        console.log("approved!");
    })
        .catch(error => {
            console.log(error);
        })







}



// async function unBlockHandler(role, item, dispatch, index) {
//     const data = { ...item, blocked: false }
//     // console.log("data=>", data)
//     await update(ref(database, `${role}/${data.uid}`), { blocked: data.blocked }).then(() => {
//         if (role === "student") {

//             console.log("success student")

//             dispatch(StudentBlockedOrUnNlockSuccess({ index, data }))

//         }
//         else {

//             dispatch(StudentBlockedOrUnNlockSuccess({ index, data }))
//             console.log("S==>", data)
//             // console.log("C==>", { index, item })
//             // dispatch(ApprovalSuccessCompanies({ index, item }))
//         }
//         console.log("approved!");
//     })
//         .catch(error => {
//             console.log(error);
//         })







// }

export { handleBlockOrUnblock }