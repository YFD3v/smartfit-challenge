import { useContext } from "react";
import LocationItem from "./LocationItem";
import { LocationContext } from "../contexts/LocationContext";
import { Splide, SplideSlide } from "../../node_modules/@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Locations = () => {
  const { locations } = useContext(LocationContext);
  return (
    <div className="flex items-center flex-col my-5">
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 2,
          width: 1500,
          pagination: false,
          arrows: true,
          drag: true,
          breakpoints: {
            1200: {
              perPage: 2,
              perMove: 1,
              width: 600,
              arrows: true,
              drag: true,
            },
            600: {
              arrows: false,
              perPage: 1,
              width: 360,
            },
            300: {
              arrows: false,
              width: 240,
            },
          },
        }}
      >
        {locations.map((location) => (
          <SplideSlide key={location.id}>
            <LocationItem location={location} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Locations;
