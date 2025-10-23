import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import ApiInstance from "../../../apis/config";
import { ApiEndpoints } from "../../../apis/endpoints";
import useAuthStep from "../../../context/authStep-provider/use-authStep";
import { toast } from "react-toastify";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { changeValue } = useAuthStep();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cpassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
      cpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: async (values, { resetForm }) => {
      try {
        const { data } = await ApiInstance.post(
          ApiEndpoints.register(),
          values,
        );
        console.log(data);
        toast.success("User registered successfully");
        resetForm();
        changeValue(0);
      } catch (error) {
        console.error(error);
        toast.error("Failed to register");
      }
    },
  });

  return (
    <div className="register-container">
      <div className="register-card">
        <h1 className="register-title">Create Account</h1>

        <form onSubmit={formik.handleSubmit} className="register-form">
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="error">{formik.errors.name}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
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
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              name="cpassword"
              placeholder="Confirm Password"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cpassword}
            />
            {formik.touched.cpassword && formik.errors.cpassword && (
              <div className="error">{formik.errors.cpassword}</div>
            )}
          </div>

          <button
            type="submit"
            className="register-button"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="register-link">
          Already have an account?{" "}
          <span onClick={() => changeValue(0)}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Register;
