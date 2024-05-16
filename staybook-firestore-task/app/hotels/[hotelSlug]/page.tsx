// individal hotel page, user will get redirected here from the hotels page
// export default function page({ params }: { params: { hotelSlug: string } }) {
//   return (
//     <div className="text-xl">
//       Update Individual hotel Details of <strong>{params.hotelSlug}</strong>
//     </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Adjust the import path as needed
import { HotelDetails } from "../../../lib/classes/hotelDetails"; // Adjust the import path as needed

interface PageProps {
  params: {
    hotelSlug: string;
  };
}

export default function Page({ params }: PageProps) {
  const [hotel, setHotel] = useState<HotelDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        const docRef = doc(db, "hotels", params.hotelSlug);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const hotelData = docSnap.data();
          setHotel(hotelData as HotelDetails);
        } else {
          setError(new Error("No such document!"));
        }

        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchHotel();
  }, [params.hotelSlug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading hotel details: {error.message}</p>;
  if (!hotel) return <p>No hotel found with the provided slug.</p>;

  return (
    <div className="text-xl">
       <strong>{hotel.hotelName}</strong>
      <div>
        <p><strong>Email:</strong> {hotel.hotelEmailId}</p>
        <p><strong>Contact Number:</strong> {hotel.hotelContactNumber}</p>
        <p><strong>Star Rating:</strong> {hotel.hotelStarRating}</p>
        <p><strong>Address:</strong> {hotel.hotelAddress}, {hotel.hotelCity}, {hotel.hotelState}, {hotel.hotelPincode}</p>
        {/* Render other hotel details here */}
      </div>
    </div>
  );
}
