import { create } from "zustand";

interface UIState {
  sidebarWindow: string | null;
  registerWindow: "reg" | "mem"
  setSidebarWindow: (window: string | null) => void;
  setRegisterWindow: (window: "reg" | "mem") => void
}

export const useUI = create<UIState>((set) => ({
  sidebarWindow: null,
  setSidebarWindow: (window: string | null) => set({ sidebarWindow: window }),
  registerWindow: "reg",
  setRegisterWindow: (window: "reg" | "mem") => set({ registerWindow: window })
}));
