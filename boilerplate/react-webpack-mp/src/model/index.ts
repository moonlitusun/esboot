import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface BearState {
  bears: number
  increase: () => void
}

const useBearStore = create<BearState>()(immer((set) => ({
  bears: 0,
  increase: () => set((state) => {
    state.bears += 1;
  }),
})))

export { useBearStore };
