import { create } from "zustand";

interface UIState {
  addingFile: boolean;
  sidebarWindow: string | null;
  setSidebarWindow: (window: string | null) => void;
  setAddingFile: (adding: boolean) => void;
}

export const useUI = create<UIState>((set) => ({
  sidebarWindow: null,
  setSidebarWindow: (window: string | null) => set({ sidebarWindow: window }),
  addingFile: false,
  setAddingFile: (adding: boolean) => set({ addingFile: adding }),
}));
