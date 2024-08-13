import { useDispatch } from "react-redux";
import { FcGoogle } from "react-icons/fc";

import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Logo from "../../components/design/Logo";
import { useRive, Fit, Alignment, useStateMachineInput } from "rive-react";
import { FaLeftLong } from "react-icons/fa6";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
} from "../../lib/features/auth/authActions";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleUsernameChange = (e) => {
    const usernameValue = e.target.value;
    setEmail(usernameValue);

    if (inputRef.current) {
      const inputWidth = inputRef.current.offsetWidth;
      const maxNumLook = 100; // Maximum value for numLook
      const multiplier = maxNumLook / inputWidth;
      const numLookValue = usernameValue.length * multiplier;

      if (numLookInput) {
        // Set the value on the Rive state machine input
        numLookInput.value = Math.min(numLookValue, maxNumLook) * 10;
      }
    }

    if (isCheckingInput) {
      isCheckingInput.value = true;
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    // Basic validation
    let hasError = false;
    if (!email) {
      setEmailError("Email is required");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      hasError = true;
    } else {
      setPasswordError("");
    }

    if (!hasError && trigSuccessInput) {
      trigSuccessInput.fire();
    } else if (trigFailInput) {
      trigFailInput.fire();
    }
    // Dispatch action
    if (!hasError) {
      try {
        await dispatch(
          loginUserWithEmail({ email: email, password: password })
        ).unwrap();
        navigate("/", { replace: location.state ? location.state : "/" });
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  const handleLoginWithGoogle = () => {
    console.log("working");
    try {
      dispatch(loginUserWithGoogle());
      navigate("/", { replace: location.state ? location.state : "/" });
    } catch (error) {
      console.log(error);
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

  return (
    <div className="flex pb-28 relative min-h-screen pt-0 p-4 justify-center  bg-[#D6E2EA]">
      <div className="absolute flex items-center gap-2 border border-black py-1 px-3 rounded top-10 left-10 font-semibold">
        <FaLeftLong />
        <Link to={"/"}>Back to Home</Link>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col items-center justify-center">
        <div className="h-40 w-40 min-[240px]:h-56 min-[240px]:w-56 min-[300px]:h-72 min-[320px]:w-72 min-[400px]:h-80 min-[400px]:w-80 sm:w-80 sm:h-80">
          <RiveComponent fit={Fit.Fill} alignment={Alignment.Center} />
        </div>
        <div className="w-full max-w-md bg-white shadow-md rounded-lg pt-4 p-8">
          <div className="text-2xl flex flex-col items-center justify-start font-bold mb-6">
            <Logo />
            Login
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="login-email"
                autoComplete="email"
                onChange={handleUsernameChange}
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
                type="email"
                value={email}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                ref={inputRef}
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div>
              <label
                htmlFor="login-pass"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                id="login-pass"
                type="password"
                autoComplete="current-password"
                value={password}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <button
              type="submit"
              className="btn rounded bg-blue-600 text-white w-full"
            >
              Login
            </button>
            <p className="text-center text-sm">
              Don’t have an account?{" "}
              <Link to="/sign-up" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </p>
          </form>
          <button
            onClick={handleLoginWithGoogle}
            className="btn rounded flex w-full items-center mx-auto justify-center mt-4"
          >
            <FcGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
