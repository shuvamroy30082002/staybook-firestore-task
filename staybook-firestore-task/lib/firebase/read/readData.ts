import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

// add function to read the data from firebase collection
export const readDataFromFirebaseCollection = async (collectionName: string) => {
  try {
    // Get a reference to the collection
    const colRef = collection(db, collectionName);

    // Fetch documents from the collection
    const querySnapshot = await getDocs(colRef);

    // Extract data from each document
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    // Return the data
    return {
      status: "OK",
      data: data,
    };
  } catch (error: any) {
    // Return error message
    return {
      status: "FAILED",
      data: {
        error: error?.message || error,
      },
    };
  }
};
