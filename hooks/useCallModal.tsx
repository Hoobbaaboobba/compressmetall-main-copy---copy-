import { create } from "zustand";

interface RequestStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useCallModal = create<RequestStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useCallModal;
