import { create } from "zustand";

interface UploadedImagesState {
  images: Array<File>;
  addFiles: (files: Array<File>) => void;
}
export const useUploadedImagesStore = create<UploadedImagesState>((set) => ({
  images: [],
  addFiles: (files: Array<File>) =>
    set((state) => ({ images: [...state.images, ...files] })),
}));
