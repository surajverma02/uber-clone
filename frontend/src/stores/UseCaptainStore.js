import { create } from "zustand";
import axiosInstance from "../libs/axios";
import useUserStore from "./UseUserStore";

const { setRole } = useUserStore.getState();

const useCaptainStore = create((set) => ({
  authCaptain: null,

  register: async (captainData) => {
    try {
      const response = await axiosInstance.post(
        "/captains/register",
        captainData
      );
      set({ authCaptain: response.data });
      setRole("captain");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  },

  login: async (captainData) => {
    try {
      const response = await axiosInstance.post("/captains/login", captainData);
      set({ authCaptain: response.data });
      setRole("captain");
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  },

  logout: async () => {
    try {
      await axiosInstance.get("/captains/logout");
      set({ authCaptain: null });
      setRole(null);
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  },

  fetchCaptain: async () => {
    try {
      const response = await axiosInstance.get("/captains/profile");
      set({ authCaptain: response.data });
      setRole("captain");
    } catch (error) {
      console.log("Fetching captain failed:", error.response.data.message);
    }
  },
}));

export default useCaptainStore;
