import React from "react";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object()
  .shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const AdminLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginData = async (data) => {
    try {
      const url = "http://localhost:8000/login";

      const response = await axios.post(url, data);

      console.log(response.data);

      if (response.data.success) {
        navigate("/View");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="col-sm-12 login_img p-4">
          <div className="row">
            <div className="col-sm-4 bgColor mx-auto mt-5 p-3 border border-5 rounded">
              <h1 className="text-">Login</h1>

              <form onSubmit={handleSubmit(loginData)}>
                <input
                  type="email"
                  {...register("email")}
                  className="form-control mt-3"
                  placeholder="Enter Email"
                />

                {errors.email?.message && (
                  <p className="text-danger">
                    {errors.email.message}
                  </p>
                )}

                <input
                  type="password"
                  {...register("password")}
                  className="form-control mt-3"
                  placeholder="Enter Password"
                />

                {errors.password?.message && (
                  <p className="text-danger">
                    {errors.password.message}
                  </p>
                )}

                <button
                  type="submit"
                  className="login_button form-control mt-3"
                >
                  Login
                </button>

                <p>
                  Not a member{" "}
                  <a href="/register">Register Now</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;