import { create } from "zustand";
import axiosInstance from "../libs/axios";

const useUserStore = create((set) => ({
  authUser: null,

  register: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);
      console.log(response.data);
      set({ authUser: response.data });
      console.log("User registered:");
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  },

  login: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);
      console.log(response.data);
      set({ authUser: response.data });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: async () => {
    try {
      await axiosInstance.get("/users/logout");
      set({ authUser: null });
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  },

  fetchProfile: async () => {
    try {
      const response = await axiosInstance.get("/users/profile");
      set({ authUser: response.data });
    } catch (error) {
      console.error("Fetching profile failed:", error);
    }
  },
}));

export default useUserStore;
