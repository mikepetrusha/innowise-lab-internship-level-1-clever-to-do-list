import React from "react";
import moment from "moment";
import Scroll from "../Scroller/Scroller";
import CalendarItem from "../CalendarItem/CalendarItem";
import {
  weekDays,
  daysInMonth,
  month,
  year,
  initMonth,
} from "../../utils/PickDate";
import { useTodo } from "../../contexts/TodoContext";
import "./Calendar.css";

export default function Calendar({
  currentDay,
  selectedDay,
  handleSelectedDayChange,
}) {
  const { todos } = useTodo();

  function handleDayClick(event) {
    const currentId = event.currentTarget.id;
    handleSelectedDayChange(
      moment(`${month}/${currentId}/${year}`).format("MMM Do YY"),
    );
  }

  return (
    <div className="scroll-container">
      <Scroll>
        <ul className="calendar">
          {initMonth(daysInMonth).map((day) => {
            const todosByDate = todos.filter((todo) => {
              return todo.date === moment(+day).format("MMM Do YY");
            });
            return (
              <CalendarItem
                key={day}
                day={day}
                weekDays={weekDays}
                currentDay={currentDay}
                selectedDay={selectedDay}
                handleDayClick={handleDayClick}
                todosByDate={todosByDate}
              />
            );
          })}
        </ul>
      </Scroll>
    </div>
  );
}
