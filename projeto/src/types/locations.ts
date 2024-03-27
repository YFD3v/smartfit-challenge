interface LocationSchedule {
  weekdays: string;
  hour: string;
}

export interface LocationParams {
  id: string;
  title: string;
  opened: boolean;
  content: string;
  mask: "required" | "recommended";
  towel: "required" | "recommended";
  fountain: "not_allowed" | "partial";
  locker_room: "closed" | "partial" | "allowed";
  schedules: LocationSchedule[];
}
