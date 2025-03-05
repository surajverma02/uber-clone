import { create } from "zustand";
import axiosInstance from "../libs/axios";

const useCaptainStore = create((set) => ({
  captain: null,

  register: async (captainData) => {
    try {
      const response = await axiosInstance.post(
        "/captains/register",
        captainData
      );
      set({ captain: response.data });
      console.log("Captain registered:", captain);
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  },

  login: async (captainData) => {
    try {
      const response = await axiosInstance.post("/captains/login", captainData);
      set({ captain: response.data });
      console.log("Captain logged in:", captain);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  },

  logout: async () => {
    try {
      await axiosInstance.get("/captains/logout");
      set({ captain: null });
      console.log("Captain logged out:", captain);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  },

  fetchProfile: async () => {
    try {
      const response = await axiosInstance.get("/captains/profile");
      set({ captain: response.data });
      console.log("Captain profile:", captain);
    } catch (error) {
      console.error("Fetching profile failed:", error.message);
    }
  },
}));

export default useCaptainStore;
