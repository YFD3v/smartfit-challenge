import { useQuery } from "react-query";
import { LocationParams } from "../types/locations";
import LocationItem from "./LocationItem";

const Locations = () => {
  const { data } = useQuery<{ locations: LocationParams[] }>("locations", () =>
    fetch(
      "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
    ).then((res) => res.json())
  );
  console.log({ data });
  return (
    <div className="flex flex-col gap-4 px-5 mt-5">
      {data?.locations.map((location) => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
