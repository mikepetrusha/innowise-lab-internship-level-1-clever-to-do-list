import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../contexts/AuthContext";

export default function SigninPage() {
  const { signin } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      setError("");
      await signin(data.email, data.password);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
  };

  return (
    <div className="wrapper">
      <h2>Sign In</h2>
      {error && <p className="error-message">{error}</p>}
      <p className="error-message">
        {errors.password?.message || errors.email?.message}
      </p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          autoComplete="on"
          placeholder="Email"
          {...register("email")}
        />

        <input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <input className="primary-button" type="submit" value="Sign In" />
      </form>
      <h2 className="auth-info">
        <NavLink to="/signup" className="link">
          Register now
        </NavLink>
      </h2>
    </div>
  );
}
