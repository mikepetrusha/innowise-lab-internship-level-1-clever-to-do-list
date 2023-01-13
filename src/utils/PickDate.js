import moment from "moment";

export const date = new Date();
export const year = date.getFullYear();
export const month = date.getMonth() + 1;
export const daysInMonth = moment().daysInMonth();
export const currentDay = moment(`${month}/${date.getDate()}/${year}`).format(
  "MMM Do YY",
);
export const weekDays = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const convertToTimestamp = (day, month, year) => {
  return Date.parse(`${month}/${day}/${year}`).toString();
};

export const initMonth = (daysInMonth) => {
  const days = [];
  for (let i = date.getDate(); i < daysInMonth + 1; i += 1) {
    days.push(convertToTimestamp(i, month, year));
  }

  return days;
};
