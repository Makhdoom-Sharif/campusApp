import { getDatabase, ref, update } from "firebase/database";
import { ProfileUpdateSuccess } from "../redux/action";
export async function ProfileUpdate(userData) {
  const dbRef = ref(getDatabase());
  const db = getDatabase();
  const Data = JSON.parse(JSON.stringify(userData));
  const updates = {};
  updates[`${userData.roll}/${userData.uid}`] = Data;
  await update(ref(db, `${userData.roll}/${userData.uid}`), Data)
    .then(() => {
      userData.dispatch(ProfileUpdateSuccess(userData));
      console.log("Data saved successfully!");
    })
    .catch(error => {
      console.log(error);
    });
}

export async function imgUpdate(url, uid, roll) {
  const db = getDatabase();
  const URL = JSON.parse(JSON.stringify(url));
  const updates = {};

  updates[`${roll}/${uid}`] = URL;
  await update(ref(db, `${roll}/${uid}`), URL)
    .then(() => {
      console.log("url update");
    })
    .catch(() => {
      console.log("error occurred");
    });
}
