import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { HotelDetails } from "../../classes/hotelDetails";

export const addHotelDetailsInFirebaseCollection = async (
  collectionName: string,
  hotelData: HotelDetails
) => {
  console.log("collectionName >>", collectionName);
  console.log("hotelData >>", hotelData);

  // your document collection reference
  const docRef = doc(db, collectionName, hotelData.hotelSlug);

  try {
    const isExsist = await getDoc(docRef);
    // if a document already exsits with the hotel slug then return an object with error
    if (isExsist.exists()) {
      return {
        status: "FAILED",
        data: {
          error: `document already exsist with the slug provide ${hotelData.hotelSlug}`,
        },
      };
    }

    // create a new instance of the hotelDetails class into data variable
    let data = new HotelDetails();

    // set the data accordingly
    data.hotelName = hotelData.hotelName;
    data.hotelEmailId = "";
    data.hotelContactNumber = 0;
    data.hotelStarRating = 0;
    data.hotelImageUrl = "";
    data.hotelAddress = "";
    data.hotelState = "";
    data.hotelCity = "";
    data.hotelPincode = "";
    data.hotelSlug = "";
    data.hotelImagesList = [];

    // you can leave createdAt and updatedAt because they will have the current time by default which is specified in the classModel
    // data.createdAt = "";
    // data.updatedAt = "";

    // finally add the document in the firebase database
    const res = await setDoc(docRef, data);

    // return the success message
    return {
      status: "OK",
      data: {
        message: `document added with id ${hotelData.hotelSlug}`,
      },
    };
  } catch (error: any) {
    return {
      status: "FAILED",
      data: { error: error?.message || error },
    };
  }
};
