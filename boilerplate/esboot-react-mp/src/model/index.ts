import create from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface AppStore {
  lang: string
  increase: () => void
}

const useAppStore = create<AppStore>()(immer((set) => ({
  lang: 'zh-CN',
  increase: () => set((state) => {
    // state.bears += 1;
  }),
})));

export { useAppStore };
