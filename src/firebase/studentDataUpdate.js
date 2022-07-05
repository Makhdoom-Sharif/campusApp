import { child, getDatabase, push, ref, update, get } from "firebase/database";
import { StudentProfileUpdateSuccess } from "../redux/action";
export default async function studentDataUpdate(userData) {
  console.log("firebase", userData);
  const dbRef = ref(getDatabase());
  const db = getDatabase();
    await get(child(dbRef, `users/${userData.uid}`)).then(async (snapshot) => { 
   const postData = {
    email: await snapshot.val().email,
    userName: await snapshot.val().userName,
    roll: await snapshot.val().roll,
    fullname: userData.fullname,
    fathername: userData.fathername,
    cnic: userData.cnic,
    address: userData.address,
    contact: userData.contact,
    qualification: userData.qualification
  };

  const updates = {};
  updates["/users/" + await userData.uid] = postData;

  await update(ref(db), updates)
    .then(() => {
      userData.dispatch(StudentProfileUpdateSuccess(postData));
      console.log("Data saved successfully!");
    })
    .catch(error => {
      console.log(error);
    });

}).catch((error) => {
    console.error(error);
  })
}
