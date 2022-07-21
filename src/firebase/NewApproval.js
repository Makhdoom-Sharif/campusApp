import { child, get, getDatabase, ref } from "firebase/database";
import { AppliedJobsGetSuccess, GetAllJobs, StudentsArrays } from "../redux/action";
import { onValue } from "firebase/database";

const dbRef = ref(getDatabase());
// const db = getDatabase();


// const starCountRef = ref(db, 'student/');
// onValue(starCountRef, (snapshot) => {
//     const data = snapshot.val();
//     console.log("realtime==>", data)
// });




const Approvals = async (dispatch) => {







    await get(child(dbRef, `student/`)).then(async (snapshot) => {
        if (snapshot.exists()) {
            async function myFunction() {
                return await [...Object.entries(snapshot.val()).map(entry => entry[1])]
            }
            const AllStudents = await myFunction()
            console.log(AllStudents)
            async function NewApprovalStudentsFunction() {
                return await AllStudents?.map((item, index) =>
                    item?.approved === false ? item : false)
            }
            const NewApprovalStudentsArray = await NewApprovalStudentsFunction()
            // console.log("filter=>", NewApprovalStudentsArray)



            async function ApprovedStudents() {
                return await AllStudents?.map((item, index) =>
                    item?.approved === true ? item : false)
            }
            const ApprovedStudentsArray = await ApprovedStudents()
            // console.log("Aprroved=>", ApprovedStudentsArray)
            await dispatch(StudentsArrays({ ApprovedStudentsArray, NewApprovalStudentsArray }))

            // var myFilterArray = myArray.filter(Boolean);
        }
    }).catch(error => {
        console.log("available jobs error", error)
    })











    await get(child(dbRef, `company/`)).then(async (snapshot) => {
        if (snapshot.exists()) {
            async function myFunction() {
                return await [...Object.entries(snapshot.val()).map(entry => entry[1])]
            }
            const AllCompany = await myFunction()
            console.log(AllCompany)
            async function NewApprovals() {
                return await AllCompany?.map((item, index) =>
                    item?.approved === false ? item : false)
            }
            const NewApprovalsArray = await NewApprovals()
            console.log("Company  filter=>", NewApprovalsArray)
            async function ApprovedCompanies() {
                return await AllCompany?.map((item, index) =>
                    item?.approved === true ? item : false)
            }
            const ApprovedCompaniesArray = await ApprovedCompanies()
            console.log("Companies Aprroved=>", ApprovedCompaniesArray)
        }
    }).catch(error => {
        console.log("available jobs error", error)
    })







}

export { Approvals };
