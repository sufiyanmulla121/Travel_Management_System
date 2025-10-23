import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import ApiInstance from "../../../apis/config";
import { ApiEndpoints } from "../../../apis/endpoints";
import useAuth from "../../../context/auth-provider/use-auth";
import useAuthStep from "../../../context/authStep-provider/use-authStep";
import "./Login.css";

const Login = () => {
  const { login } = useAuth();
  const { changeValue } = useAuthStep();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      try {
        const { data } = await ApiInstance.post(ApiEndpoints.login(), values);
        login(data);
      } catch (err) {
        console.error("Login error:", err);
        toast.error("Failed to login");
      }
    },
  });

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>

        <form onSubmit={formik.handleSubmit} className="login-form">
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              autoComplete="off"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>

          <p className="register-link">
            Don't have an account?{" "}
            <span onClick={() => changeValue(1)}>Register here</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
