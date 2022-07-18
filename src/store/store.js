import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set) => ({
  canvas: [],
  selectedColor: '#000',
  baseColor: '#fff',
  rows: 20,
  columns: 20,
  hasChangedColor: false,
  gridRef: {},
  brush: 'BRUSH',
  eraser: 'ERASER',
  bucket: 'BUCKET',
  eyedropper: 'EYEDROPPER',
  selectedTools: 'BRUSH',

  checkChangedColor: () =>
    set((state) => ({ hasChangedColor: !state.hasChangedColor })),
  increase: () =>
    set((state) => ({
      rows: state.rows + 1,
      columns: state.columns + 1,
    })),
  decrease: () =>
    set((state) => ({
      rows: state.rows > 1 ? state.rows - 1 : 1,
      columns: state.columns > 1 ? state.columns - 1 : 1,
    })),
  setBucket: () => set((state) => ({ selectedTools: state.bucket })),
  setBrush: () => set((state) => ({ selectedTools: state.brush })),
  setEraser: () => set((state) => ({ selectedTools: state.eraser })),
  setEyedropper: () => set((state) => ({ selectedTools: state.eyedropper })),
  setColor: () => set((state) => ({ selectedColor: state.selectedColor })),
});

const useStore = create(devtools(store));

export default useStore;
