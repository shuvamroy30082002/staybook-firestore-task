import Link from "next/link";

export default function page() {
  return (
    <section className="w-full h-screen">
      <div className="container mx-auto h-full py-10">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl font-bold tracking-wide">All Hotels List</h1>
          <Link
            href={"/hotels/addNewHotel"}
            className="p-2 px-4 bg-green-100 text-green-800 font-medium tracking-wide rounded"
          >
            Add New Hotel
          </Link>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* fetch the actual hotelDocuments here and map them */}
          {Array.from({ length: 9 }).map((_, index) => (
            <Link
              href={`/hotels/hotel-${index}`}
              key={index}
              className="bg-green-500 w-full aspect-video rounded-lg p-4"
            >
              hotel details of {index}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
