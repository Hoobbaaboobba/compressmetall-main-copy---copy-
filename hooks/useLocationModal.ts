import { create } from "zustand";

interface LocationModalStore {
  location: string;
  link: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  changeLocation: (loc: string) => void;
  changeLink: (link: string) => void;
}

const useLocationModal = create<LocationModalStore>((set) => ({
  location: "Москва",
  link: "moscow",
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  changeLocation: (loc) => set({ location: loc }),
  changeLink: (link) => set({ link: link }),
}));

export default useLocationModal;
