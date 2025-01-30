
import { create } from "zustand";

interface IGlobalStore {
 currentImage: string
 setCurrentImage: (value: string) => void
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  currentImage: "",
  setCurrentImage: (value: string) => set(()=>({currentImage: value})),
}));
