import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

export default function Header({ headerTitle }) {
  const [error, setError] = useState("");
  const { signout } = useAuth();
  const navigate = useNavigate();
  const isDasboard = headerTitle === "Tassker";

  async function handleSignout() {
    setError("");

    try {
      await signout();
      navigate("/signin");
    } catch {
      setError("Failed to sign out");
    }
  }

  if (error !== "") {
    console.log(error);
  }

  return (
    <header className="header">
      <h1
        className="page-title"
        onClick={() => navigate("/")}
        onKeyDown={() => navigate("/")}
      >
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
