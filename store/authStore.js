import { create } from "zustand";

const saveUserIP = async () => {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    const ip = data.ip;

    // Save to localStorage
    localStorage.setItem("user_ip", ip);
    return ip;
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    return null;
  }
};
export const useAuthStore = create((set) => ({
  token: localStorage.getItem("authToken") || null,
  user: localStorage.getItem("user") || null,

  setAuth: (token, user) => {
    localStorage.setItem("authToken", token);
    localStorage.setItem("user", user);
    set({ token, user });
  },

  clearAuth: () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    set({ token: null, user: null });
  },
  // getAuth: () => {
  //   const token = localStorage.getItem("authToken") || null;
  //   return { token, user: useAuthStore.getState().user };
  // },

  saveIp: () => {
    saveUserIP();
  },
  getIp: () => {
    const ip = localStorage.getItem("user_ip") || null;
    return ip;
  },
}));
