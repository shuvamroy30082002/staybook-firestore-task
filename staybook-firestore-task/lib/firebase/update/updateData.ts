import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Function to update individual key and value fields from the firebase document
export const updateKeyAndValueFromDocument = async (
  collectionName: string,
  documentId: string,
  key: string,
  value: string | number
) => {
  try {
    // Get document reference
    const docRef = doc(db, collectionName, documentId);

    // Update the document with the new key-value pair
    await updateDoc(docRef, {
      [key]: value,
      updatedAt: new Date().toISOString(),
    });

    return {
      status: "OK",
      data: {
        message: `Key '${key}' updated successfully in document with id ${documentId}`,
      },
    };
  } catch (error: any) {
    return {
      status: "FAILED",
      data: {
        error: error?.message || error,
      },
    };
  }
};

// Function to update the object inside the hotelImagesList from the firebase document
export const updateObjectsInsideArray = async (
  collectionName: string,
  documentId: string,
  index: number,
  key: string,
  value: string | number
) => {
  try {
    // Get document reference
    const docRef = doc(db, collectionName, documentId);

    // Update the specific object inside the array
    await updateDoc(docRef, {
      [`hotelImagesList.${index}.${key}`]: value,
      updatedAt: new Date().toISOString(),
    });

    return {
      status: "OK",
      data: {
        message: `Object at index ${index} updated successfully in document with id ${documentId}`,
      },
    };
  } catch (error: any) {
    return {
      status: "FAILED",
      data: {
        error: error?.message || error,
      },
    };
  }
};

