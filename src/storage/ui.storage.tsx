import { create } from "zustand";

interface UIState {
  sidebarWindow: string | null;
  setSidebarWindow: (window: string | null) => void;
}

export const useUI = create<UIState>((set) => ({
  sidebarWindow: null,
  setSidebarWindow: (window: string | null) => set({ sidebarWindow: window }),
}));
