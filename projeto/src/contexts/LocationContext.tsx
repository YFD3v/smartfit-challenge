import React, { createContext, useEffect, useState } from "react";
import { LocationParams } from "../types/locations";

interface LocationContextProviderParams {
  children: React.ReactNode;
}

interface LocationContextType {
  locations: LocationParams[];
  originalLocations: LocationParams[];
  filterLocations: (period: string, showCloseUnits: boolean) => void;
}

export const LocationContext = createContext<LocationContextType>({
  locations: [],
  originalLocations: [],
  filterLocations: () => {},
});

const LocationContextProvider = ({
  children,
}: LocationContextProviderParams) => {
  const [locations, setLocations] = useState<LocationParams[]>([]);
  const [originalLocations, setOriginalLocations] = useState<LocationParams[]>(
    []
  );
  
  const hasOpenedProperty = originalLocations.filter((location) =>
    location.hasOwnProperty("opened")
  );
  const openedLocations = hasOpenedProperty.filter(
    (location) => location.opened === true
  );

  useEffect(() => {
    const getLocations = async () => {
      try {
        const response = await fetch(
          "https://test-frontend-developer.s3.amazonaws.com/data/locations.json"
        ).then((res) => res.json());

        setLocations(
          response.locations.filter(
            (location: LocationParams) => location.opened === true
          )
        );
        setOriginalLocations(response.locations);
      } catch (error) {
        console.log(error);
      }
    };
    getLocations();
  }, []);

  if (!locations) return;

  const filterLocations = (period: string, showCloseUnits: boolean) => {
    if (!showCloseUnits) {
      if (period === "") return setLocations(openedLocations);
      let newLocations = openedLocations.filter((location) =>
        location?.schedules?.some((schedule) => {
          const [openHour, _, closeHour] = schedule.hour.split(" ");
          const openHourNumber = parseInt(openHour, 10);
          const closeHourNumber = parseInt(closeHour, 10);

          if (period === "morning") {
            return closeHourNumber <= 12 || openHourNumber >= 6;
          } else if (period === "afternoon") {
            return openHourNumber > 12 || closeHourNumber <= 18;
          } else if (period === "evening") {
            return openHourNumber > 18 || closeHourNumber <= 23;
          }

          return false;
        })
      );
      setLocations(newLocations);
    } else {
      setLocations(
        hasOpenedProperty.filter((location) => location.opened === false)
      );
    }
  };
  return (
    <LocationContext.Provider
      value={{
        locations,
        originalLocations,
        filterLocations,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextProvider;
