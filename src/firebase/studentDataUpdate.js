import { getDatabase, ref, update } from "firebase/database";
import {
  StudentProfileUpdateSuccess
} from "../redux/action";
export default async function studentDataUpdate(userData) {
  const dbRef = ref(getDatabase());
  const db = getDatabase();
  const Data = JSON.parse(JSON.stringify(userData));
  console.log("Data to be update", Data, Data.type);
  const updates = {};
  updates["users/" + userData.uid] = Data;

  await update(ref(db, `users/${userData.uid}`), Data)
    .then(() => {
      userData.dispatch(StudentProfileUpdateSuccess(userData));
      console.log("Data saved successfully!");
    })
    .catch(error => {
      console.log(error);
    });
}
