import { getStorage, ref, uploadBytes } from "firebase/storage";
export default async function uploadImage(file) {
  const storage = getStorage();
  const storageRef = ref(storage, "profile");
  console.log("uplaod==>", storageRef);
  await uploadBytes(storageRef, file)
    .then(snapshot => {
      console.log("Uploaded a blob or file!");
    })
    .catch(e => {
      console.log("error==>", e);
    });
}
