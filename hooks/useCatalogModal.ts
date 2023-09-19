import { create } from "zustand";

interface CatalogStore {
  isOpenCatalog: boolean;
  isOpenMenu: boolean;
  typeOfMenu: string;
  onOpenCatalog: () => void;
  onCloseCatalog: () => void;
  onOpenMenu: () => void;
  onCloseMenu: () => void;
  changeTypeOfMenu: (type: string) => void;
}

const useCatalogModal = create<CatalogStore>((set) => ({
  isOpenCatalog: false,
  isOpenMenu: false,
  typeOfMenu: "",
  onOpenCatalog: () =>
    set((state) => ({ isOpenCatalog: !state.isOpenCatalog })),
  onCloseCatalog: () => set({ isOpenCatalog: false }),
  onOpenMenu: () => set((state) => ({ isOpenMenu: !state.isOpenMenu })),
  onCloseMenu: () => set({ isOpenMenu: false }),
  changeTypeOfMenu: (type) => set({ typeOfMenu: type }),
}));

export default useCatalogModal;
