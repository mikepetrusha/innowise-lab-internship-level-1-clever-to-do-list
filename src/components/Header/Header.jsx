import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useTodo } from "../../contexts/TodoContext";
import "./Header.css";

export default function Header({ headerTitle }) {
  const [error, setError] = useState("");
  const { signout } = useAuth();
  const { setTodos } = useTodo();
  const navigate = useNavigate();
  const isDasboard = headerTitle === "Tassker";

  async function handleSignout() {
    setError("");

    try {
      setTodos([]);
      await signout();
      navigate("/signin");
    } catch {
      setError("Failed to sign out");
    }
  }

  if (error) {
    toast.error(error);
  }

  return (
    <header className="header">
      <Toaster position="top-right" reverseOrder={false} />
      <h1 className="page-title" onClick={() => navigate("/")}>
        {headerTitle}
      </h1>
      {isDasboard && (
        <button
          type="button"
          className="primary-button"
          onClick={() => {
            navigate("/todo", {
              state: {
                isExisted: false,
                todoId: null,
              },
            });
          }}
        >
          + Add a New Task
        </button>
      )}

      <button type="button" className="primary-button" onClick={handleSignout}>
        Sign out
      </button>
    </header>
  );
}
