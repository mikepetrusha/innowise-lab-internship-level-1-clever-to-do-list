import React, { useContext, useState, createContext } from "react";
import toast from "react-hot-toast";
import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../api/firebase.config";
import { useAuth } from "./AuthContext";

const TodoContext = createContext({});

export function useTodo() {
  return useContext(TodoContext);
}

export default function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = collection(db, "todo");
  const { currentUser } = useAuth();
  const getTodos = async () => {
    try {
      setLoading(true);
      const todoQuery = query(ref);
      const data = await getDocs(todoQuery);
      const filteredByEmail = data.docs
        .filter((el) => el.data().email === currentUser.email)
        .map((el) => el.data());

      setTodos(filteredByEmail);
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getTodoById = async (todoId) => {
    try {
      const todoQuery = query(ref);
      const data = await getDocs(todoQuery);

      const todoById = data.docs
        .filter((el) => el.data().id === todoId)
        .map((el) => el.data());

      setTodo(todoById[0]);
    } catch (error) {
      toast.error(error);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      await addDoc(ref, newTodo);
    } catch (error) {
      toast.error(error);
    }
  };

  const editTodoCompleted = async (id, checked) => {
    const todoQuery = query(ref);
    const data = await getDocs(todoQuery);

    const todoById = data.docs
      .filter((el) => el.data().id === id)
      .map((el) => el.id);
    try {
      await updateDoc(doc(db, "todo", todoById[0]), {
        completed: !checked,
      });
      getTodos();
    } catch (error) {
      toast.error(error);
    }
  };

  const editTodo = async (updatedTodo) => {
    const todoQuery = query(ref);
    const data = await getDocs(todoQuery);

    const todoById = data.docs
      .filter((el) => el.data().id === updatedTodo.id)
      .map((el) => el.id);
    try {
      await updateDoc(doc(db, "todo", todoById[0]), updatedTodo);
      getTodos();
    } catch (error) {
      toast.error(error);
    }
  };

  const deleteTodo = async (todoId) => {
    const todoQuery = query(ref);
    const data = await getDocs(todoQuery);

    const todoById = data.docs
      .filter((el) => el.data().id === todoId)
      .map((el) => el.id);

    await deleteDoc(doc(db, "todo", todoById[0]));
    getTodos();
  };

  const value = {
    ref,
    todos,
    loading,
    todo,
    setTodos,
    addTodo,
    editTodoCompleted,
    getTodos,
    getTodoById,
    setTodo,
    editTodo,
    deleteTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}
