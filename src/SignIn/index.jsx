import React, { useState, useEffect, Fragment } from "react";
import { produce } from "immer";
import Logo from "../logo_min.svg";

export const SignIn = () => {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [submittingForm, setSubmittingForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [darkMode, setDarkMode] = useState();

  const [formData, setFormData] = useState({
    email: { value: "", valid: true },
    password: { value: "", valid: true }
  });

  const toggleDropDown = () => {
    console.log("toggling to", !dropDownOpen);
    setDropDownOpen(!dropDownOpen);
  };

  const toggleFormSubmit = () => {
    setSubmittingForm(!submittingForm);
  };

  //checks system dark mode setting
  const checkDarkMode = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }
    return false;
  };

  const toggleDarkMode = () => {
    console.log("d", darkMode);
    setDarkMode(!darkMode);
  };

  const handleEscapeKey = (e) => {
    if (e.code === "Escape") {
      console.log(e);
      console.log(dropDownOpen);
      if (dropDownOpen) toggleDropDown();
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: { value, valid: true } });
    setFormSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleFormSubmit();
    console.log(formData);
  };

  useEffect(() => {
    setDarkMode(checkDarkMode());
  }, []);
  useEffect(() => {
    if (dropDownOpen) {
      window.addEventListener("keydown", handleEscapeKey);
      return () => {
        window.removeEventListener("keydown", handleEscapeKey);
      };
    }
  }, [dropDownOpen]);

  useEffect(() => {
    if (submittingForm) {
      let timer = setTimeout(() => {
        toggleFormSubmit();
        setFormSubmitted(true);
      }, 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [submittingForm]);

  useEffect(() => {
    if (formSubmitted) {
      const nextState = produce(formData, (draftState) => {
        Object.keys(draftState).forEach((k) => {
          draftState[k].valid = false;
        });
      });
      setFormData(nextState);
    }
  }, [formSubmitted]);

  return (
    <Fragment>
      {/* header */}
      {/* form */}
      {/* footer */}

      <form onSubmit={(e) => handleSubmit(e)}>
        <div
          className={`flex items-center justify-center h-screen w-screen  ${
            darkMode ? "bg-black text-white" : "bg-white text-current"
          } `}
        >
          <div className="relative flex flex-col items-center justify-center">
            {/* card */}
            <div className="shadow-loginCard p-5 pb-12 rounded-xl border-2  h-auto">
              <Fragment>
                <div className="flex-1  mb-8">
                  {/* <Logo className="h-10" alt="kids loop logo" /> */}
                  <img src={Logo} alt="kids loop logo" />
                </div>
                <div className="flex-1 mb-8">
                  <p
                    className={`text - 2xl font-normal ${
                      darkMode ? "text-white" : "text-current"
                    }`}
                  >
                    {" "}
                    Sign In
                  </p>
                </div>
                <div className="flex flex-col space-y-3">
                  <input
                    value={formData.email.value}
                    name="email"
                    aria-label="email"
                    aria-required="true"
                    tabIndex="1"
                    autoComplete="email"
                    className={`w-full block placeholder-gray-500 rounded-xl py-3 px-4 border outline-none focus:shadow-outline focus:border-transparent ${
                      !formData.email.valid
                        ? "border-red-500"
                        : "border-gray-500"
                    }`}
                    type="text"
                    placeholder="Email or Phone *"
                    disabled={submittingForm}
                    onChange={handleInputChange}
                  />
                  <p
                    className={`text-red-500 text-xs italic ${
                      formData.email.valid ? "hidden" : ""
                    }`}
                  >
                    Please provide correct email
                  </p>

                  <input
                    value={formData.password.value}
                    aria-label="password"
                    name="password"
                    aria-required="true"
                    tabIndex="2"
                    autoComplete="current-password"
                    className={`w-full block placeholder-gray-500 rounded-xl py-3 px-4 border border-gray-500 outline-none focus:shadow-outline focus:border-transparent ${
                      !formData.password.valid
                        ? "border-red-500"
                        : "border-gray-500"
                    } `}
                    type="password"
                    placeholder="Password *"
                    disabled={submittingForm}
                    onChange={handleInputChange}
                  />
                  <p
                    className={`text-red-500 text-xs italic ${
                      formData.password.valid ? "hidden" : ""
                    }`}
                  >
                    Please provide correct password
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4 w-auto">
                  <a
                    href="#"
                    className={`text-sm font-normal cursor ${
                      !darkMode ? "text-navy-blue-500" : "text-kl-blue-500"
                    }`}
                  >
                    Forgot Password?
                  </a>
                  <button
                    type="submit"
                    tabIndex="3"
                    className={`ml-10 md:ml-40 bg-kl-blue-500 hover:bg-kl-blue-300 focus:outline-none focus:border-kl-blue-700 focus:shadow-outline text-sm text-white text-center font-normal inline-block items-center px-8 py-1 border border-transparent rounded-xl cursor ${
                      submittingForm ? "cursor-not-allowed" : ""
                    } `}
                    aria-disabled={submittingForm}
                    disabled={submittingForm}
                  >
                    {submittingForm ? (
                      <svg
                        className=" inline-block animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : (
                      <Fragment> Sign In</Fragment>
                    )}
                  </button>
                </div>
                <div className="flex justify-start mt-10">
                  <a
                    href="#"
                    className={`text-sm font-normal ${
                      !darkMode ? "text-navy-blue-500" : "text-kl-blue-500"
                    }`}
                  >
                    Create an account
                  </a>
                </div>
              </Fragment>
            </div>
            <div className="mt-4 flex justify-between text-xs font-normal w-full">
              <div className="flex justify-start items-center">
                {/* <svg className="h-5 w-5 fill-current text-kl-blue-900 stroke-0 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0V0z" fill="none" /><path d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                        </svg> */}
                <button type="button" onClick={() => toggleDarkMode()}>
                  <svg
                    className="cursor-pointer h-4 w-4 fill-current text-navy-blue-500 stroke-0 inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M20 8.69V6c0-1.1-.9-2-2-2h-2.69l-1.9-1.9c-.78-.78-2.05-.78-2.83 0L8.69 4H6c-1.1 0-2 .9-2 2v2.69l-1.9 1.9c-.78.78-.78 2.05 0 2.83l1.9 1.9V18c0 1.1.9 2 2 2h2.69l1.9 1.9c.78.78 2.05.78 2.83 0l1.9-1.9H18c1.1 0 2-.9 2-2v-2.69l1.9-1.9c.78-.78.78-2.05 0-2.83L20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                  </svg>
                </button>

                <div className="relative">
                  <button
                    type="button"
                    className="relative z-10 border-b focus:border-b focus:outline-none border-black inline-block ml-4 cursor-pointer "
                    onClick={toggleDropDown}
                  >
                    <a className="inline-block"> Select Language</a>
                  </button>

                  <svg
                    className="h-4 w-4 fill-current  inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </svg>
                  {dropDownOpen ? (
                    <Fragment>
                      <button
                        type="button"
                        className="fixed inset-0 h-full w-full bg-black opacity-25"
                        tabIndex="-1"
                        onClick={() => toggleDropDown()}
                      />

                      <div
                        className={`mt-2 bg-current rounded-xl flow-root py-2 shadow-loginCard w-32 absolute right-0 ${
                          darkMode ? "bg-gray-700" : "bg-white"
                        }`}
                      >
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white"
                        >
                          Amharic
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white"
                        >
                          English
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-kl-blue-300 hover:text-white"
                        >
                          French
                        </a>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </div>
              </div>
              <div className="ml-10 md:ml-40 flex flex-auto justify-between items-center">
                <a href="#">Help</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
