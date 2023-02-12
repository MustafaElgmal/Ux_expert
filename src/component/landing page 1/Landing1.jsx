import React from "react";
import "./landing1.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

function Landing1({ isActive, setisActive }) {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      message: "",
    },
    validationSchema: Yup.object({
      message: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      navigate("/search");
      formik.resetForm();
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (formik.values.message !== "") {
        navigate("/search");
        formik.resetForm();
      }
    }
  };

  return (
    <div className="landing-container">
      <div className="top">What will you design today?</div>
      <div className=" flex justify-center items-center p-[30px]">
        <div className="flex relative items-center">
          <div
            className="absolute p-4 cursor-pointer"
            onClick={() => formik.handleSubmit()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22.2"
              height="21.88"
              viewBox="0 0 22.2 21.88"
            >
              <path
                id="Vector"
                d="M14.985,16.4a9.217,9.217,0,1,1,1.7-1.782l5.161,5.161A1.23,1.23,0,0,1,20.1,21.517Zm-5.776.2A7.373,7.373,0,1,0,4,14.442,7.373,7.373,0,0,0,9.21,16.6Z"
                fill="#0d1216"
              />
            </svg>
          </div>
          <form>
            <input
              type="text"
              name="message"
              id="message"
              value={formik.values.message}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              onKeyDown={handleKeyDown}
              className=" block search pl-[8%]"
              placeholder="search for any domain to get tips to design it better"
            />
          </form>
        </div>
      </div>
      <div className="bottom-wrapper">
        <div className="bottom">
          <div className="first-icon">
            <div
              className="icon-wrapper"
              onClick={() => {
                setisActive(1);
              }}
            >
              <div className="svg-first">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="38"
                  viewBox="0 0 54 54"
                  color="white"
                >
                  <path
                    id="Vector"
                    d="M54.1,27.052A27.052,27.052,0,1,1,27.052,0,26.988,26.988,0,0,1,54.1,27.052Zm-41.03-9.581a.6.6,0,0,0,.451.564,4.676,4.676,0,0,1,3.382,3.382s.113.338.789.225a.5.5,0,0,0,.451-.338,4.676,4.676,0,0,1,3.382-3.382.562.562,0,0,0,.338-.564.414.414,0,0,0-.113-.338.349.349,0,0,0-.225-.113,4.676,4.676,0,0,1-3.382-3.382.562.562,0,0,0-.564-.338c-.113,0-.225.113-.338.113l-.113.113a.349.349,0,0,0-.113.225,4.676,4.676,0,0,1-3.382,3.382.349.349,0,0,0-.225.113ZM40.917,37.535a.488.488,0,0,0-.225-.451,7.236,7.236,0,0,1-1.465-1.127A4.649,4.649,0,0,1,38.1,34.492a.564.564,0,0,0-.9,0,7.236,7.236,0,0,1-1.127,1.465A4.649,4.649,0,0,1,34.6,37.084a.488.488,0,0,0-.225.451.414.414,0,0,0,.113.338.11.11,0,0,0,.113.113,7.236,7.236,0,0,1,1.465,1.127A4.649,4.649,0,0,1,37.2,40.579a.77.77,0,0,0,.451.451c.225,0,.225-.113.338-.113a.349.349,0,0,0,.113-.225,7.236,7.236,0,0,1,1.127-1.465A4.649,4.649,0,0,1,40.691,38.1s.225-.113.225-.564ZM40.8,27.052a1.2,1.2,0,0,0-1.014-1.127,45.451,45.451,0,0,1-6.087-2.48,7.21,7.21,0,0,1-2.818-2.705c-1.014-1.24-2.705-6.425-2.705-6.425a1.133,1.133,0,0,0-2.254,0,45.451,45.451,0,0,1-2.48,6.087A7.21,7.21,0,0,1,20.74,23.22c-1.24,1.014-6.425,2.705-6.425,2.705a1.435,1.435,0,0,0-1.014,1.24,1.2,1.2,0,0,0,1.014,1.127,45.451,45.451,0,0,1,6.087,2.48,7.21,7.21,0,0,1,2.818,2.705c1.014,1.24,2.705,6.425,2.705,6.425a1.435,1.435,0,0,0,1.24,1.014A1.2,1.2,0,0,0,28.292,39.9a45.451,45.451,0,0,1,2.48-6.087A7.21,7.21,0,0,1,33.477,31c1.24-1.014,6.425-2.705,6.425-2.705.676-.225,1.014-.676.9-1.24Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
            <p>For You</p>

            <span className={`selector ${isActive === 1 && "active"}`}></span>
          </div>
          <div className="second-icon">
            <div
              className="icon-wrapper"
              onClick={() => {
                setisActive(2);
              }}
            >
              <div className="white-backg"></div>
              <div className="svg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29.234"
                  height="27.165"
                  viewBox="0 0 29.234 27.165"
                >
                  <path
                    id="Vector"
                    d="M29.194,12.061v2.818c0,5.749,0,8.679-1.8,10.483s-4.621,1.8-10.37,1.8H12.174c-5.749,0-8.567,0-10.37-1.8S0,20.74,0,14.992V12.174C0,6.425,0,3.607,1.916,1.8,3.72,0,6.538,0,12.286,0h4.847C22.769,0,25.7,0,27.391,1.691,29.307,3.382,29.307,6.425,29.194,12.061ZM8.717,6.425A2.073,2.073,0,0,0,6.575,4.283,2.14,2.14,0,0,0,4.434,6.425,2.011,2.011,0,0,0,6.575,8.567,2.073,2.073,0,0,0,8.717,6.425Zm15.63,13.263-2.067-2.067,1.653-.864a1.258,1.258,0,0,0,.827-1.165,1.223,1.223,0,0,0-.827-1.165l-8.642-3.269a1.275,1.275,0,0,0-1.728,1.24c.038.15.075.263.113.413l3.382,8.642a1.212,1.212,0,0,0,2.292,0L20.1,19.8l2.067,2.066a1.479,1.479,0,0,0,2.179,0,1.54,1.54,0,0,0,.488-1.127,1.281,1.281,0,0,0-.488-1.052Z"
                    fill="#0085f7"
                  />
                </svg>
              </div>
            </div>
            <p>UI Patterns</p>
            <span className={`selector ${isActive === 2 && "active"}`}></span>
          </div>
          <div className="third-icon">
            <div
              className="icon-wrapper"
              onClick={() => {
                setisActive(3);
              }}
            >
              <div className="white-backg"></div>
              <div className="svg">
                <svg
                  id="_7123940_wear_os_google_icon"
                  data-name="7123940_wear_os_google_icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 36.874 28.179"
                >
                  <ellipse
                    id="Ellipse_1"
                    data-name="Ellipse 1"
                    cx="3.823"
                    cy="3.823"
                    rx="3.823"
                    ry="3.823"
                    transform="translate(25.216 7.665)"
                    fill="#00a94b"
                  />
                  <ellipse
                    id="Ellipse_2"
                    data-name="Ellipse 2"
                    cx="3.572"
                    cy="3.572"
                    rx="3.572"
                    ry="3.572"
                    transform="translate(29.73 0.058)"
                    fill="#ff4131"
                  />
                  <path
                    id="Path_1"
                    data-name="Path 1"
                    d="M153.605,28.244a3.577,3.577,0,0,1-3.266-2.12L140.973,5.091a3.574,3.574,0,0,1,6.532-2.9l9.366,21.032a3.573,3.573,0,0,1-1.814,4.718A3.525,3.525,0,0,1,153.605,28.244Z"
                    transform="translate(-129.622 -0.064)"
                    fill="#ffbc00"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M12.944,28.7a3.894,3.894,0,0,1-3.556-2.308L.351,6.086a3.889,3.889,0,1,1,7.1-3.164l9.036,20.3A3.891,3.891,0,0,1,12.944,28.7Z"
                    transform="translate(-0.015 -0.572)"
                    fill="#0085f7"
                  />
                </svg>
              </div>
            </div>
            <p>Color Palettes</p>
            <span className={`selector ${isActive === 3 && "active"}`}></span>
          </div>
          <div className="fourth-icon">
            <div
              className="icon-wrapper"
              onClick={() => {
                setisActive(4);
              }}
            >
              <div className="white-backg"></div>
              <div className="svg">
                <svg
                  className="fa-icon-1"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M50.75 333.25c-12 12-18.75 28.28-18.75 45.26V424L0 480l32 32 56-32h45.49c16.97 0 33.25-6.74 45.25-18.74l126.64-126.62-128-128L50.75 333.25zM483.88 28.12c-37.47-37.5-98.28-37.5-135.75 0l-77.09 77.09-13.1-13.1c-9.44-9.44-24.65-9.31-33.94 0l-40.97 40.97c-9.37 9.37-9.37 24.57 0 33.94l161.94 161.94c9.44 9.44 24.65 9.31 33.94 0L419.88 288c9.37-9.37 9.37-24.57 0-33.94l-13.1-13.1 77.09-77.09c37.51-37.48 37.51-98.26.01-135.75z"></path>
                </svg>
              </div>
            </div>
            <p>Color Pallete From Logo</p>
            <span className={`selector ${isActive === 4 && "active"}`}></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing1;