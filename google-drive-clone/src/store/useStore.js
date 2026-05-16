import { create } from 'zustand'

const useStore = create((set) => ({
  files: [],
  folders: [],

  addFile: (file) =>
    set((state) => ({
      files: [...state.files, file],
    })),

  addFolder: (folder) =>
    set((state) => ({
      folders: [...state.folders, folder],
    })),
}))

export default useStore