import { create } from "zustand";
import { persist } from "zustand/middleware";

type TDiamondsState = {
  diamonds: number;
  increase: (by: number) => void;
};

export const useDiamondsStore = create<TDiamondsState>()(
  persist(
    (set) => ({
      diamonds: 0,
      increase: (by) => set((state) => ({ diamonds: state.diamonds + by })),
    }),
    { name: "diamonds-store" },
  ),
);
