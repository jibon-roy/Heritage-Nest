import { useState, useRef, useEffect } from "react";

import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useRive, Fit, Alignment, useStateMachineInput } from "rive-react";
import { useDispatch } from "react-redux";
import {
  loginUserWithGoogle,
  registerUser,
} from "../../lib/features/auth/authActions";
import { FaLeftLong } from "react-icons/fa6";

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    gender: "",
  });

  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const { rive, RiveComponent } = useRive({
    src: "./login_screen_character.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  const isCheckingInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "Check"
  );

  const isHandsUpInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "hands_up"
  );

  const numLookInput = useStateMachineInput(rive, "State Machine 1", "Look");

  const trigSuccessInput = useStateMachineInput(
    rive,
    "State Machine 1",
    "success"
  );

  const trigFailInput = useStateMachineInput(rive, "State Machine 1", "fail");

  useEffect(() => {
    if (numLookInput) numLookInput.value = 0; // Initialize numLookInput
    if (isCheckingInput) isCheckingInput.value = false;
    if (isHandsUpInput) isHandsUpInput.value = false;
  }, [numLookInput, isCheckingInput, isHandsUpInput]);

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;

    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    const refFunc = (ref) => {
      if (ref.current) {
        const inputWidth = ref.current.offsetWidth;
        const maxNumLook = 100; // Maximum value for numLook
        const multiplier = maxNumLook / inputWidth;
        const numLookValue = usernameValue.length * multiplier;

        if (numLookInput) {
          // Set the value on the Rive state machine input
          numLookInput.value = Math.min(numLookValue, maxNumLook) * 10;
        }
      }
    };
    refFunc(inputRef);
    refFunc(inputRef2);

    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handleUsernameFocus = () => {
    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handleUsernameBlur = () => {
    if (isCheckingInput) {
      isCheckingInput.value = false;
    }
  };

  const handlePasswordFocus = () => {
    if (isHandsUpInput) {
      isHandsUpInput.value = true;
    }
  };

  const handlePasswordBlur = () => {
    if (isHandsUpInput) {
      isHandsUpInput.value = false;
    }
  };

  const handleLoginWithGoogle = () => {
    dispatch(loginUserWithGoogle());
  };

  // State for form errors
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    // Additional validation logic can be added here
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate() && trigSuccessInput) {
      trigSuccessInput.fire();
    } else if (trigFailInput) {
      trigFailInput.fire();
    }
    if (validate()) {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className="flex relative pb-20 pt-0 p-4 min-h-screen justify-center bg-[#D6E2EA]">
      <div className="absolute flex items-center gap-2 border border-black py-1 px-3 rounded top-10 left-10 font-semibold">
        <FaLeftLong />
        <Link to={"/"}>Back to Home</Link>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-center">
        <div className="h-40 w-40 min-[240px]:h-56 min-[240px]:w-56 min-[300px]:h-72 min-[320px]:w-72 min-[400px]:h-80 min-[400px]:w-80 sm:w-80 sm:h-80">
          <RiveComponent fit={Fit.Fill} alignment={Alignment.Center} />
        </div>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="registerName"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                id="registerName"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                type="text"
                autoComplete="name"
                name="name"
                ref={inputRef}
                defaultValue={formData.name}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="registerEmail"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="registerEmail"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                type="email"
                autoComplete="email"
                name="email"
                ref={inputRef2}
                defaultValue={formData.email}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="registerPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="registerPassword"
                type="password"
                name="password"
                autoComplete="none"
                onChange={handleUsernameChange}
                defaultValue={formData.password}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="registerDateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                id="registerDateOfBirth"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                autoComplete="none"
                type="date"
                name="dateOfBirth"
                defaultValue={formData.dateOfBirth}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div>
              <label
                htmlFor="registerGender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <select
                id="registerGender"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                name="gender"
                defaultValue={formData.gender}
                className="mt-1 p-2 border border-gray-300 bg-white rounded w-full"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-500 text-white rounded w-full"
            >
              Register
            </button>
            <p className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Sign in.
              </Link>
            </p>
          </form>
          <button
            onClick={handleLoginWithGoogle}
            className="btn flex w-full items-center rounded mx-auto justify-center mt-4"
          >
            <FcGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
