// individal hotel page, user will get redirected here from the hotels page
export default function page({ params }: { params: { hotelSlug: string } }) {
  return (
    <div className="text-xl">
      Update Individual hotel Details of <strong>{params.hotelSlug}</strong>
    </div>
  );
}
