import { getDatabase, ref, update } from "firebase/database";
import { StudentProfileUpdateSuccess } from "../redux/action";
export async function studentDataUpdate(userData) {
  const dbRef = ref(getDatabase());
  const db = getDatabase();
  const Data = JSON.parse(JSON.stringify(userData));
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

export async function imgUpdate(url, uid) {
  const db = getDatabase();
  console.log("url==>", url);
  const URL = JSON.parse(JSON.stringify(url));

  const updates = {};
  updates["users/" + uid] = URL;
  await update(ref(db, `users/${uid}`), URL)
    .then(() => {
      console.log("url update");
    })
    .catch(() => {
      console.log("error occurred");
    });
}
