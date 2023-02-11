import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email:"",
    },
    validationSchema: Yup.object({
      userName: Yup.string().required("Please Enter user name!"),
      password: Yup.string().required("Please Enter Password!"),
      email: Yup.string().email('Please Enter vaild Email!').required("Please Enter Email!"),
    }),
    onSubmit: async (values) => {
      navigate("/");

      formik.resetForm();
    },
  });
  return (
    <div className="flex justify-center items-center myBody2 min-h-screen min-w-full">
      <div className=" flex login">
        <div className=" flex justify-center items-center loginRight">
          <div className="myform">
            <h1 className="h1Form font-bold text-left">Sign Up</h1>
            <form className="text-left">
              <div className="mt-5 ">
                <label
                  htmlFor="username"
                  className=" textForm block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    id="username"
                    name="userName"
                    value={formik.values.userName}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    autoComplete="text"
                    required
                    placeholder="Please Enter username"
                    className="text-gray-900  block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300  shadow-sm focus:border-[#400860] focus:outline-none focus:ring-[#400860] sm:text-[12px]"
                  />
                  <p className="text-red-500">
                    {formik.errors.userName && formik.touched.userName
                      ? formik.errors.userName
                      : null}
                  </p>
                </div>
              </div>
              <div className="mt-5 ">
                <label
                  htmlFor="email"
                  className=" textForm block text-sm font-medium text-gray-700"
                >
                  email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    autoComplete="text"
                    required
                    placeholder="Please Enter email"
                    className="text-gray-900  block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300  shadow-sm focus:border-[#400860] focus:outline-none focus:ring-[#400860] sm:text-[12px]"
                  />
                  <p className="text-red-500">
                    {formik.errors.email && formik.touched.email
                      ? formik.errors.email
                      : null}
                  </p>
                </div>
              </div>

              <div className="space-y-1 mt-5">
                <label
                  htmlFor="password"
                  className=" textForm block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                {!show ? (
                  <div className="mt-1 flex justify-end items-center relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Please Enter Password"
                      autoComplete="current-password"
                      required
                      className=" text-gray-900 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 shadow-sm focus:border-[#400860] focus:outline-none focus:ring-[#400860] sm:text-[12px]"
                    />

                    <div
                      className="absolute mr-2 w-10 cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="16"
                        viewBox="0 0 23 16"
                      >
                        <g
                          id="eye-fill"
                          transform="translate(0 -5.625)"
                          opacity="0.2"
                        >
                          <path
                            id="Path_59"
                            data-name="Path 59"
                            d="M19.7,16.039a3.664,3.664,0,1,1-3.664-3.664A3.664,3.664,0,0,1,19.7,16.039Z"
                            transform="translate(-4.313 -2.353)"
                          />
                          <path
                            id="Path_60"
                            data-name="Path 60"
                            d="M0,13.687S4.4,5.625,11.726,5.625s11.726,8.062,11.726,8.062-4.4,8.062-11.726,8.062S0,13.687,0,13.687Zm11.726,5.13a5.13,5.13,0,1,0-5.13-5.13A5.13,5.13,0,0,0,11.726,18.817Z"
                            transform="translate(0 0)"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="mt-1 flex justify-end items-center relative">
                    <input
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="text"
                      placeholder="Please Enter Password"
                      autoComplete="current-password"
                      required
                      className=" text-gray-900 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 shadow-sm focus:border-[#400860] focus:outline-none focus:ring-[#400860] sm:text-[12px]"
                    />

                    <div
                      className="absolute mr-2 w-10 cursor-pointer"
                      onClick={() => setShow(!show)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="18"
                        viewBox="0 0 23 18"
                      >
                        <g
                          id="eye-slash-fill"
                          transform="translate(0 -3.703)"
                          opacity="0.2"
                        >
                          <path
                            id="Path_61"
                            data-name="Path 61"
                            d="M15.815,20.887l-2.366-2.367a5.13,5.13,0,0,1-6.558-6.558L3.872,8.942A19.865,19.865,0,0,0,0,13.687s4.4,8.062,11.726,8.062a10.3,10.3,0,0,0,4.089-.862ZM7.637,6.487a10.3,10.3,0,0,1,4.089-.862c7.329,0,11.726,8.062,11.726,8.062a19.963,19.963,0,0,1-3.871,4.746l-3.022-3.022A5.13,5.13,0,0,0,10,8.852L7.637,6.488Z"
                            transform="translate(0 -0.67)"
                          />
                          <path
                            id="Path_62"
                            data-name="Path 62"
                            d="M12.411,15.519a3.664,3.664,0,0,0,4.147,4.147L12.41,15.519Zm7.256,1.038-4.147-4.148a3.664,3.664,0,0,1,4.147,4.147Z"
                            transform="translate(-4.313 -3.022)"
                          />
                          <path
                            id="Path_63"
                            data-name="Path 63"
                            d="M21.293,22.33,3.7,4.741,4.742,3.7,22.331,21.292Z"
                            transform="translate(-1.291 0)"
                            fillRule="evenodd"
                          />
                        </g>
                      </svg>
                    </div>
                  </div>
                )}
                <p className="text-red-500">
                  {formik.errors.password && formik.touched.password
                    ? formik.errors.password
                    : null}
                </p>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  className=" signIn flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm  font-medium text-white shadow-sm  focus:outline-none focus:ring-2 hover:font-semibold "
                  onClick={() => formik.handleSubmit()}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex justify-between mt-5 ">
              <span className="dont">Already Have an account?</span>
              <span
                className="dont cursor-pointer"
                onClick={() => navigate("/login")}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
        <div className="loginLeft flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="230"
            height="79.488"
            viewBox="0 0 246.688 79.488"
          >
            <path
              id="Path_584"
              data-name="Path 584"
              d="M13.327,24.174a6.449,6.449,0,0,0,3.613,1.175,5.22,5.22,0,0,0,3.026-.923,13.229,13.229,0,0,0,3.277-3.649,27.584,27.584,0,0,0,2.1-6L36.679-28.454h12.4L37.835,14.773a41.955,41.955,0,0,1-6.883,14.941A17.2,17.2,0,0,1,24.279,33.7a26.487,26.487,0,0,1-9.023,1.553,21.4,21.4,0,0,1-6.967-1.091q-8.9-2.1-8.9-12A20.713,20.713,0,0,1-.02,17.123L6.693-5.12,9.632-16.451a12.957,12.957,0,0,1-6.8,1.763,21.478,21.478,0,0,1-2.6-.164l2.1-7.894h2.1q5.452,0,8.3-5.708H25.145l-6,23.343L12.654,17.543a18.2,18.2,0,0,0-.336,3.19Q12.318,23.67,13.327,24.174ZM87.861,40.457a4.391,4.391,0,0,0,3.693-1.595l2.518,7.554q-3.687,4.2-11.06,4.533a9.712,9.712,0,0,1-7.541-3.024,19.459,19.459,0,0,1-3.435-6.467,71.256,71.256,0,0,1-2.262-6.972L64.736,16.061,52,34.5H37.247L60.438.656,55.072-18.977Q50.7-14.6,43.381-14.6a23.173,23.173,0,0,1-3.364-.247l2.1-7.9h2.1q5.456,0,8.226-5.708H65.534l4.2,15.547L80.389-28.454H95.142L73.976,2.432,82.741,34.5Q83.748,40.122,87.861,40.457Zm7.806-56.825a13.462,13.462,0,0,1-6.8,1.679,19.483,19.483,0,0,1-2.518-.164l2.1-7.894h2.1q5.372,0,8.226-5.708h13.346a22.7,22.7,0,0,1,17.039,7.386,15.114,15.114,0,0,1,2.77,8.9q0,6.547-5.372,12.758a25.406,25.406,0,0,1-10.24,5.456,26.329,26.329,0,0,1-10.828.839l1.847-7.638q10.576.923,12.926-9.988.084-.839.084-1.679a6.535,6.535,0,0,0-3.612-6.211,10.569,10.569,0,0,0-5.375-1.175,6.677,6.677,0,0,1-1.512,0L95.684,34.5H82.321ZM158.958,3.442H144.121L138.3,25.769h21.158L156.94,34.5H123.533L136.8-16.367a13.006,13.006,0,0,1-6.716,1.679,21.478,21.478,0,0,1-2.6-.164l2.1-7.894h2.1q5.456,0,8.31-5.708h32.9l-2.523,8.645H150.1l-3.65,14.521h15.025Zm14.434-19.809a13.006,13.006,0,0,1-6.716,1.679,21.477,21.477,0,0,1-2.6-.164l2.1-7.894h2.1q5.456,0,8.31-5.708h13.346a22.7,22.7,0,0,1,17.039,7.386,15.214,15.214,0,0,1,3.022,9.233q0,6.547-5.624,12.423A17.511,17.511,0,0,1,194.04,6.044a22.207,22.207,0,0,1,3.441,11.919,54.366,54.366,0,0,1-.671,7.26,55.025,55.025,0,0,0-.671,6.169,4.584,4.584,0,0,0,.839,3.106,21.281,21.281,0,0,0,1.763,1.931,2.747,2.747,0,0,0,2.014.839,10.872,10.872,0,0,0,3.609-.923l1.595,8.981a24.09,24.09,0,0,1-11.919,3.609,12.141,12.141,0,0,1-6.8-1.765,11.474,11.474,0,0,1-4.952-9.916,25.737,25.737,0,0,1,.755-5.5q.755-3.319,1.595-6.765a49.08,49.08,0,0,0,1.259-10q0-5.966-2.686-8.151l1.931-7.647q10.492.252,12.842-10a9.889,9.889,0,0,0,.168-1.765,6.552,6.552,0,0,0-3.586-6.219,10.012,10.012,0,0,0-5.419-1.176,3.577,3.577,0,0,1-1.418.186L173.487,34.5H160.13ZM211.5-19.809a10.9,10.9,0,0,0-7.556,3.19l-2.6-7.554q3.945-4.113,11.331-4.365,7.722.084,33.407.084l-2.506,8.645H230.709L216.435,34.5H204.028l14.187-54.307Z"
              transform="translate(0.608 28.538)"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
