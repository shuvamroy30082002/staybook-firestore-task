import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { HotelDetails } from "../../classes/hotelDetails";

export const addHotelDetailsInFirebaseCollection = async (
  collectionName: string,
  hotelData: HotelDetails
) => {
  // Log provided data for debugging
  console.log("collectionName >>", collectionName);
  console.log("hotelData >>", hotelData);

  // Document reference
  const docRef = doc(db, collectionName, hotelData.hotelSlug);

  try {
    // Check if document already exists
    const isExistDoc = await getDoc(docRef);
    if (isExistDoc.exists()) {
      return {
        status: "FAILED",
        data: {
          error: `Document already exists with the provided slug: ${hotelData.hotelSlug}`,
        },
      };
    }

    // Set document data
    await setDoc(docRef, hotelData);

    // Return success message
    return {
      status: "OK",
      data: {
        message: `Document added with id ${hotelData.hotelSlug}`,
      },
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
