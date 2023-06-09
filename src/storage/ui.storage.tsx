import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface UIState {
  addingFile: boolean;
  sidebarWindow: string | null;
  registerWindow: "reg" | "mem";
  setSidebarWindow: (window: string | null) => void;
  setRegisterWindow: (window: "reg" | "mem") => void;
  setAddingFile: (adding: boolean) => void;
}

export const useUI = create(
  persist<UIState>(
    (set) => ({
      sidebarWindow: null,
      setSidebarWindow: (window: string | null) =>
        set({ sidebarWindow: window }),
      registerWindow: "reg",
      setRegisterWindow: (window: "reg" | "mem") =>
        set({ registerWindow: window }),
      addingFile: false,
      setAddingFile: (adding: boolean) => set({ addingFile: adding }),
    }),
    { name: "ui-storage" }
  )
);
