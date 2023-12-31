// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { ref, deleteObject } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "accstlouis.firebaseapp.com",
  projectId: "accstlouis",
  storageBucket: "accstlouis.appspot.com",
  messagingSenderId: "862961845131",
  appId: "1:862961845131:web:43437563b323270a13a58e"
};

// Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
 export const storage = getStorage(firebaseApp);



// ...
// Call this function when you want to delete the old image
// For example, before uploading a new image
export const deleteOldImage = async (imageUrl) => {
  try {
    // Assuming `imageUrl` contains the full path to the image
    const imagePath = extractImagePath(imageUrl); // You need to implement this function
    const imageRef = ref(storage, imagePath);
    await deleteObject(imageRef);
    return true;
  } catch (error) {

    console.error('Error deleting image:', error);
    return false;
  }
};






 