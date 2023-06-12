import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
import { generateUUID } from "../utils/generators";

export interface IFile {
  id: string;
  name: string;
}

interface FileStorageState {
  files: IFile[];
  contents: { [key: string]: string };
  currentFile: string | null;
  addFile: (name: string) => void;
  removeFile: (file: string) => void;
  renameFile: (file: string, name: string) => void;
  writeFile: (id: string, content: string) => void;
  setCurrentFile: (id: string) => void;
  currentFileContents: () => string;
}

export const useFileStorage = create(
  persist(
    immer<FileStorageState>((set, get) => ({
      files: [{ id: generateUUID(), name: "main.s" }],
      contents: {},
      currentFile: null,
      addFile: (name: string) =>
        set((state) => {
          const id = generateUUID();
          state.currentFile = id;
          state.contents[id] = "";
          state.files.push({ id: id, name: name });
        }),
      removeFile: (file: string) =>
        set((state) => {
          state.files = state.files.filter((f) => f.id !== file);
          delete state.contents[file];
        }),
      renameFile: (file: string, name: string) => {
        set((state) => {
          const index = state.files.findIndex((f) => f.id === file);
          state.files[index].name = name;
        });
      },
      writeFile: (id: string, content: string) => {
        set((state) => {
          state.contents[id] = content;
        });
      },
      currentFileContents: () => {
        const currfile = get().currentFile || "";
        return get().contents[currfile];
      },
      setCurrentFile: (id: string) => {
        set((state) => {
          state.currentFile = id;
        });
      },
    })),
    {
      name: "file-storage", // unique name
    }
  )
);
