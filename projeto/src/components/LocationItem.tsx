import { LocationParams } from "../types/locations";

interface LocationItemProps {
  location: LocationParams;
}

const LocationItem = ({ location }: LocationItemProps) => {
  let locationVerified = location.hasOwnProperty("opened");
  return (
    <div className=" h-full flex flex-col p-5 bg-gray-100 rounded-lg border-r-white border-r-4">
      {locationVerified ? (
        <p
          className={
            location.opened
              ? "text-brand-green font-medium"
              : "text-brand-red font-medium"
          }
        >
          {location.opened ? "Aberto" : "Fechado"}
        </p>
      ) : (
        <p className="text-brand-yellow">Sem informação</p>
      )}

      <h2 className="text-xl font-semibold my-2">{location.title}</h2>

      <div className="text-brand-lightGrey">
        {!locationVerified ? (
          <p>{`${location.street} - ${location.region} \n ${location.city_name} - ${location.uf}`}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: location.content }}></div>
        )}
      </div>
      <div className="flex gap-2 mt-4">
        {location.mask && (
          <img
            width={75}
            height={75}
            src={`${location.mask}-mask.png`}
            alt={location.title}
          />
        )}
        {location.towel && (
          <img
            width={75}
            height={75}
            src={`${location.towel}-towel.png`}
            alt={location.title}
          />
        )}
        {location.fountain && (
          <img
            width={75}
            height={75}
            src={`${location.fountain}-fountain.png`}
            alt={location.title}
          />
        )}
        {location.locker_room && (
          <img
            width={75}
            height={75}
            src={`${location.locker_room}-lockerroom.png`}
            alt={location.title}
          />
        )}
      </div>
      <div className="grid grid-cols-2 mt-5 gap-6">
        {location.schedules?.map((schedule) => (
          <div>
            <h3 className="text-xl font-meduim">{schedule.weekdays}</h3>
            <p>{schedule.hour}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationItem;
