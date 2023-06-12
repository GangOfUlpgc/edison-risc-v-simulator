import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  addingFile: boolean;
  debug: boolean;
  sidebarWindow: string | null;
  registerWindow: "reg" | "mem" | "ram";
  setSidebarWindow: (window: string | null) => void;
  setRegisterWindow: (window: "reg" | "mem" | "ram") => void;
  setAddingFile: (adding: boolean) => void;
  toggleDebuMode: () => void;
}

export const useUI = create(
  persist<UIState>(
    (set) => ({
      debug: false,
      sidebarWindow: null,
      setSidebarWindow: (window: string | null) =>
        set({ sidebarWindow: window }),
      registerWindow: "reg",
      setRegisterWindow: (window: "reg" | "mem" | "ram") =>
        set({ registerWindow: window }),
      addingFile: false,
      setAddingFile: (adding: boolean) => set({ addingFile: adding }),
      toggleDebuMode: () => set((state) => ({ debug: !state.debug })),
    }),
    { name: "ui-storage" }
  )
);
