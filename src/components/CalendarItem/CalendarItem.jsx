import React from "react";
import moment from "moment";
import "./CalendarItem.css";
import { currentDay, weekDays } from "../../utils/PickDate";

export default function CalendarItem({
  day,
  selectedDay,
  handleDayClick,
  todosByDate,
}) {
  const date = new Date(Number(day));
  const currentDate = moment(date).format("MMM Do YY");

  const getTodosCountByStatus = (status) =>
    todosByDate.filter((todo) => todo.completed === status).length;

  const completedTodos = getTodosCountByStatus(true);
  const uncompletedTodos = getTodosCountByStatus(false);

  function getItemClasses(selectedDay, currentDate, currentDay) {
    const cls = ["calendar-item"];
    if (selectedDay === currentDate && selectedDay !== currentDay) {
      cls.push("selected-item");
    } else if (currentDay === currentDate) {
      cls.push("current-day-item");
    }
    return cls;
  }

  const cls = getItemClasses(selectedDay, currentDate, currentDay);

  return (
    <li
      id={date.getDate()}
      onClick={handleDayClick}
      className="calendar-item-container"
    >
      <div className={cls.join(" ")}>
        <p className="week-day-title">{weekDays[date.getDay()]}</p>
        <h3>{date.getDate()}</h3>
      </div>
      <div className="calendar-item-status-container">
        {completedTodos > 0 && (
          <div className="calendar-item-status completed" />
        )}
        {uncompletedTodos > 0 && (
          <div className="calendar-item-status uncompleted" />
        )}
      </div>
    </li>
  );
}
