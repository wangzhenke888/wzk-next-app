import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

interface TitleState {
  title: string;
  setTitle: (newTitle: string) => void;
}

const useTitleStore = create<TitleState>((set) => ({
  title: '',
  setTitle: (newTitle: string) => set({ title: newTitle }),
}));

export default useTitleStore;
