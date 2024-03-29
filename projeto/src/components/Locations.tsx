import { useContext } from "react";
import LocationItem from "./LocationItem";
import { LocationContext } from "../contexts/LocationContext";

const Locations = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div className="flex flex-col gap-4 px-5 mt-5">
      {locations.map((location) => (
        
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
