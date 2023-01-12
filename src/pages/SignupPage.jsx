import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../contexts/AuthContext";

export default function SignupPage() {
  const { signup, signin } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password mismatch")
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function entry(email, password) {
    try {
      setError("");
      await signin(email, password);
      navigate("/");
    } catch {
      setError("Failed to sign in");
    }
  }

  const onSubmit = async (data) => {
    try {
      setError("");
      setLoading(true);
      await signup(data.email, data.password);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
    entry(data.email, data.password);
  };

  return (
    <div className="wrapper">
      <h2>Sing Up</h2>
      {error && <p className="error-message">{error}</p>}
      <p className="error-message">
        {errors.password?.message ||
          errors.email?.message ||
          errors.confirmPassword?.message}
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
          autoComplete="on"
          placeholder="Password"
          {...register("password")}
        />

        <input
          type="password"
          autoComplete="on"
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />

        <input
          className="primary-button"
          disabled={loading}
          type="submit"
          value="Sign Up"
        />
      </form>

      <h2 className="auth-info">
        Already have an account?{" "}
        <NavLink to="/signin" className="link">
          Sign In
        </NavLink>
      </h2>
    </div>
  );
}
