import { child, equalTo, get, getDatabase, query, ref } from "firebase/database";
import { GetAppliedStudents } from "../redux/action";




const GetAppliedStudentData = async (props, dispatch) => {
    console.log("props===>", props)
    const dbRef = ref(getDatabase());
    await get(child(dbRef, `student/${props}`)).then(async (snapshot) => {
        if (snapshot.exists()) {
            await snapshot.val()
            console.log("std", snapshot.val())
            dispatch(GetAppliedStudents(snapshot.val()))
        }
    }).catch((error) => {
        console.error(error)
    })
}




// async function GetAppliedStudentData(props) {
//     const dbRef = ref(getDatabase());
//     await get(child(dbRef, `student/${props}`)).then(async (snapshot) => {
//         if (snapshot.exists()) {
//             var stdObj = await snapshot.val()
//         }
//     }).catch((error) => {
//         console.error(error)
//     })
//     return stdObj

//     // return await [...Object.entries(snapshot.val()).map(entry => entry[1])].filter(element => element.companyID === uid)
// }

export { GetAppliedStudentData }