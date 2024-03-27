import { LocationParams } from "../types/locations";

interface LocationItemProps {
  location: LocationParams;
}

const LocationItem = ({ location }: LocationItemProps) => {
  return (
    <div className="p-5 bg-gray-100 rounded-lg">
      {location.opened ? (
        <p className="text-brand-green font-medium">Aberto</p>
      ) : (
        <p className="text-brand-red font-medium"> Fechado</p>
      )}
      <h2 className="text-xl font-semibold my-2">{location.title}</h2>

      <div
        className="text-brand-lightGrey"
        dangerouslySetInnerHTML={{ __html: location.content }}
      >
        <div className="flex gap-2 mt-4">
          {location.mask && (
            <img src={`${location.mask}-mask.png`} alt={location.title} />
          )}
          {location.towel && (
            <img src={`${location.towel}-towel.png`} alt={location.title} />
          )}
          {location.fountain && (
            <img
              src={`${location.fountain}-fountain.png`}
              alt={location.title}
            />
          )}
          {location.locker_room && (
            <img
              src={`${location.locker_room}-lockerroom.png`}
              alt={location.title}
            />
          )}
        </div>
        <div className="grid grid-cols-2 mt-5 gap-6">
          {location?.schedules?.map((schedule) => (
            <div>
              <h3 className="text-xl font-meduim">{schedule.weekdays}</h3>
              <p>{schedule.hour}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
