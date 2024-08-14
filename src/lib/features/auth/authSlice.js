import { createSlice } from "@reduxjs/toolkit";
import {
  loginUserWithEmail,
  loginUserWithGoogle,
  logOutUser,
  registerUser,
} from "./authActions";
import { swalAlert } from "../../../components/actions/SwalAlert";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { userInfo, userToken } = action.payload;
      state.userInfo = userInfo;
      state.userToken = userToken;
      state.loading = false;
    },
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      state.loading = false;
    },
    initializeAuth: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
        swalAlert("success", "Registration success. ", "Welcome!");
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log("Registration error:", action.payload);
        if (action.payload == "Firebase: Error (auth/email-already-in-use).") {
          swalAlert("error", "Email already exists.", "Opps!");
        }
        if (
          action.payload ==
          "Firebase: Password should be at least 6 characters (auth/weak-password)."
        ) {
          swalAlert(
            "error",
            "Password should be at least 6 characters",
            "Opps!"
          );
        }
      })
      .addCase(loginUserWithEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserWithEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;
        state.userToken = action.payload.userToken;
        // console.log("Login successful:", action.payload);
        swalAlert("success", "Login Successful.", "Welcome!");
      })
      .addCase(loginUserWithEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log("Login error:", action.payload);
        swalAlert("error", "Login Error.", "Opps!");
      })
      .addCase(loginUserWithGoogle.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUserWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.userInfo;
        state.userToken = action.payload.userToken;
        // console.log("Google login successful:", action.payload);
        swalAlert("success", "Sign in successful.", "Welcome!");
      })
      .addCase(loginUserWithGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        // console.log("Google login error:", action.payload);
        swalAlert("error", "Login Error.", "Opps!");
      })
      .addCase(logOutUser.fulfilled, (state) => {
        state.userInfo = null;
        state.userToken = null;
        state.loading = false;
      });
  },
});

export const { setUser, logout, initializeAuth } = authSlice.actions;
export default authSlice.reducer;
