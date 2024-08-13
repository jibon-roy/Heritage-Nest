import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { logout } from "./authSlice";
import { auth } from "../../firebase/firebase";
import axiosPublic from "../axios/axiosPublic";
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { name, dateOfBirth, gender, email, password, role },
    { rejectWithValue }
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Send user details to backend
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axiosPublic.post(
        "/api/v1/user/register",
        {
          name,
          dateOfBirth,
          gender,
          email,
          uid: user.uid,
          password,
          role,
        },
        config
      );

      const tokenFromBackend = data.userToken;
      const userRole = data.userInfo.role;
      localStorage.setItem("userToken", tokenFromBackend);
      localStorage.setItem("role", userRole);

      const tokenFromLocalStorage = localStorage.getItem("userToken");

      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.code) {
        return rejectWithValue(error.message);
      } else if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUserWithGoogle = createAsyncThunk(
  "auth/loginWithGoogle",
  async (_, { rejectWithValue }) => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const { data } = await axiosPublic.post("/api/v1/user/google-login", {
        email: user.email,
        uid: user.uid,
        name: user.displayName,
        dateOfBirth: null,
        gender: null,
      });

      const tokenFromBackend = data.userToken;
      const userRole = data.userInfo.role;
      localStorage.setItem("userToken", tokenFromBackend);
      localStorage.setItem("role", userRole);

      const tokenFromLocalStorage = localStorage.getItem("userToken");

      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.code) {
        return rejectWithValue(error.message);
      } else if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUserWithEmail = createAsyncThunk(
  "auth/loginWithEmail",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // Authenticate with Firebase
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const idToken = await user.getIdToken();

      const { data } = await axiosPublic.post(`/api/v1/user/login`, {
        email,
        password,
        idToken,
      });

      const tokenFromBackend = data.userToken;
      const userRole = data.userInfo.role;
      localStorage.setItem("userToken", tokenFromBackend);
      localStorage.setItem("role", userRole);

      const tokenFromLocalStorage = localStorage.getItem("userToken");

      if (tokenFromBackend !== tokenFromLocalStorage) {
        throw new Error("Token mismatch error.");
      }

      return { ...data, userToken: tokenFromLocalStorage };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const logOutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { dispatch }) => {
    try {
      await signOut(auth);
      dispatch(logout());
      localStorage.removeItem("userToken");
      localStorage.removeItem("role");
    } catch (error) {
      console.error("Error signing out:", error);
      throw error;
    }
  }
);
