import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";


interface IHealthcareStore {
  showVideo: boolean;
  setShowVideo: (value: boolean) => void;
  toggleShowVideo: () => void;
  // currentImage: string;
  // setCurrentImage: (value:string) => void
  // currentSection: any;
  // setCurrentSection: (value:any)=>void
  
}

type SettingsPersist = PersistOptions<IHealthcareStore>;


export const useHealthCareSettingsStore = create<IHealthcareStore>()(
  persist(
    (set, get) => ({
      showVideo: true,
      setShowVideo: (value: boolean) => set(() => ({ showVideo: value })), // function to update haptics
      toggleShowVideo: () => set(() => ({ showVideo: !get().showVideo })), // function to update haptics
      // currentImage: "",
      // setCurrentImage: (value:string) => set(()=>({currentImage: value})),
      // currentSection: null,
      // setCurrentSection: (value:any) => set(()=>({currentSection: value}))
    }),
    {
      name: "healthcare-settings", // name of the storage item
    } as SettingsPersist
  )
);


interface IHealthcareGlobalStore {
  isChatBotOpened: boolean;
  setChatBotOpened: (value: boolean) => void;

}

export const useHealthCareStore = create<IHealthcareGlobalStore>()(

    (set) => ({
      isChatBotOpened: false,
      setChatBotOpened: (value: boolean) => set(() => ({ isChatBotOpened: value })), // function to update haptics
   

    }),
   
  
);

