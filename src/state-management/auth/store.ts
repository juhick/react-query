import { create } from "zustand";

type AuthStore = {
  user: string;
  login: (user: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>((set) => ({
  user: "",
  login: (user: string) => set({ user }),
  logout: () => set({ user: "" }),
}));

export default useAuthStore;
