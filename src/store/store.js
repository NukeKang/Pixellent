import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  canvasDefaultSize: 16,

  draggable: false,
  canChangeColor: () => set((state) => ({ draggable: !state.draggable })),
  preventEvent: () => set(() => ({ draggable: false })),

  selectedColor: '#000',
});

const useStore = create(devtools(store));

export default useStore;
