import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set, get) => ({
  row: 20,
  column: 20,
  selectedColor: '#000',
  opacity2: 0,
  setColor: () => set((state) => ({ selectedColor: state.selectedColor })),
  // startDrawing: () => set(() => ({ selectedColor: '#000' })),
  eraser: () => set(() => ({ selectedColor: '' })),
});

const useStore = create(devtools(store));

export default useStore;
