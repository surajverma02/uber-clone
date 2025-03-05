import { create } from "zustand";
import axiosInstance from "../libs/axios";

const useUserStore = create((set) => ({
  authUser: null,
  role: null,

  setRole: (newRole) => set({ role: newRole }),

  register: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/register", userData);
      set({ authUser: response.data });
      set({ role: "user" });
    } catch (error) {
      console.error("Registration failed:", error.message);
    }
  },

  login: async (userData) => {
    try {
      const response = await axiosInstance.post("/users/login", userData);
      set({ authUser: response.data });
      set({ role: "user" });
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  },

  logout: async () => {
    try {
      await axiosInstance.get("/users/logout");
      set({ authUser: null });
      set({ role: null });
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  },

  fetchUser: async () => {
    try {
      const response = await axiosInstance.get("/users/profile");
      set({ authUser: response.data });
      set({ role: "user" });
    } catch (error) {
      console.log("Fetching user failed:", error.response.data.message);
    }
  },
}));

export default useUserStore;
