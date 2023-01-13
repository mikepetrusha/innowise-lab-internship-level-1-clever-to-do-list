import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import moment from "moment";
import { useTodo } from "../../contexts/TodoContext";
import Header from "../../components/Header/Header";
import Calendar from "../../components/Calendar/Calendar";
import TodoList from "../../components/TodoList/TodoList";
import { date, currentDay } from "../../utils/PickDate";
import "./Dashboard.css";

export default function Dashboard() {
  const { todos, loading, getTodos } = useTodo();
  const [selectedDay, setSelectedDay] = useState(moment().format("MMM Do YY"));

  let todosCountTitle = "";

  useEffect(() => {
    getTodos();
  }, []);

  const handleSelectedDayChange = (day) => {
    setSelectedDay(day);
  };

  const todosByDate = todos.filter((todo) => {
    return todo.date === selectedDay;
  });

  const todosCount = todosByDate.length;

  if (todosCount === 0) {
    todosCountTitle = "There are no tasks on this day yet";
  } else if (todos.length === 1) {
    todosCountTitle = `${todosCount} task on this day`;
  } else {
    todosCountTitle = `${todosCount} tasks on this day`;
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Header headerTitle="Tassker" />
      <main>
        <div className="wrapper todos">
          <Calendar
            date={date}
            currentDay={currentDay}
            selectedDay={selectedDay}
            handleSelectedDayChange={handleSelectedDayChange}
          />
          {!loading && <h3 className="todos-count">{todosCountTitle}</h3>}
          {!loading ? (
            <TodoList date={date} todos={todosByDate} />
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
      </main>
    </>
  );
}
