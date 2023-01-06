import React from "react";
import moment from "moment";
import "./CalendarItem.css";

export default function CalendarItem({
  day,
  weekDays,
  selectedDay,
  currentDay,
  handleDayClick,
  todosByDate,
}) {
  const date = new Date(Number(day));
  const cls = ["calendar-item"];
  const currentDate = moment(date).format("MMM Do YY");

  const getTodosCountByStatus = (status) => {
    return todosByDate.filter((todo) => {
      return todo.completed === status;
    }).length;
  };

  const completedTodos = getTodosCountByStatus(true);
  const uncompletedTodos = getTodosCountByStatus(false);

  if (selectedDay === currentDate && selectedDay !== currentDay) {
    cls.push("selected-item");
  } else if (currentDay === currentDate) {
    cls.push("current-day-item");
  }

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
