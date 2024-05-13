// import { HotelDetails } from "@/lib/classes/hotelDetails";
// import { useState } from "react";

/*
    import addHotelDetailsInFirebaseCollection function here and pass hotelDetails Object
    pass collection name and hotelData from here to the function
*/
export default function AddNewHotelPage() {
  // const [formData, setFormData] = useState<HotelDetails>({});
  // you can use dashify npm package to create a hotelSlug after hotelName and hotelCity is filled
  // https://www.npmjs.com/package/dashify

  // handle basic data validation like number value gets added as number only not in string, email validation etc
  // use can use zod validations if you wish to

  // handle form submittion logic
  //   const handleSubmit = async () => {
  //     if form data is valid then call the function and add the data in firebase
  //     const res = await addHotelDetailsInFirebaseCollection(
  //       "collectionName",
  //       formData
  //     );
  //     hanlde redirection logic here redirect the user ot /hotels page after data is successfully added to the database
  //     if (res.status === "OK") {
  //     }
  //   };

  return (
    // add components to utilize them and reuse them insted of using a input field again and again
    <div>AddNewHotelPage add inputs etc to add the hotel to the firebase</div>
  );
}
