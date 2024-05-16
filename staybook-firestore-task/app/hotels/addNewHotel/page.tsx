import { useState } from "react";
import { addHotelDetailsInFirebaseCollection } from "@/lib/firebase/create/createData"; // Adjust the import path as needed
import { HotelDetails } from "@/lib/classes/hotelDetails";
import { useRouter } from "next/router"; // Import useRouter for redirection
import  dashify  from "dashify"; // Import dashify package for slug generation

export default function AddNewHotelPage() {
  const [formData, setFormData] = useState<Partial<HotelDetails>>({});
  const router = useRouter();

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Perform basic data validation here (e.g., check required fields, format validation, etc.)
      if (!formData.hotelName || !formData.hotelCity) {
        // Handle validation error
        console.error("Hotel name and city are required");
        return;
      }

      // Generate hotelSlug using dashify
      const hotelSlug = dashify(`${formData.hotelName}-${formData.hotelCity}`);

      // Call the function to add hotel details to Firebase
      const res = await addHotelDetailsInFirebaseCollection(
        "hotels", // Specify the collection name
        { ...formData, hotelSlug } as HotelDetails // Pass formData with generated hotelSlug
      );

      // Redirect to /hotels page if data is successfully added
      if (res.status === "OK") {
        router.push("/hotels");
      } else {
        // Handle error case if needed
        console.error("Failed to add hotel:", res.data.error);
      }
    } catch (error) {
      // Handle error if submission fails
      console.error("Error adding hotel:", error);
    }
  };

  return (
    <div>
      <h1>Add New Hotel</h1>
      {/* Add form inputs here to collect hotel details */}
      <input
        type="text"
        placeholder="Hotel Name"
        value={formData.hotelName || ""}
        onChange={(e) => setFormData({ ...formData, hotelName: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        value={formData.hotelCity || ""}
        onChange={(e) => setFormData({ ...formData, hotelCity: e.target.value })}
      />
      <input
        type="text"
        placeholder="Pincode"
        value={formData.hotelPincode || ""}
        onChange={(e) => setFormData({ ...formData, hotelPincode: e.target.value })}
      />
      <input
        type="text"
        placeholder="Rating"
        value={formData.hotelStarRating || ""}
        onChange={(e) => setFormData({ ...formData, hotelStarRating: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image"
        value={formData.hotelImageUrl|| ""}
        onChange={(e) => setFormData({ ...formData, hotelImageUrl: e.target.value })}
      />
      
      <button onClick={handleSubmit}>Add Hotel</button>
    </div>
  );
}
