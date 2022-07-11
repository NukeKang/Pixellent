import create from 'zustand';
import { devtools } from 'zustand/middleware';

const store = (set, get) => ({
  row: 30,
  column: 30,
  canvas: [],
  selectedColor: '#000',
  baseColor: '#fff',
  brush: 'BRUSH',
  eraser: 'ERASER',
  bucket: 'BUCKET',
  selectedTools: 'BRUSH',
  hasChangedColor: false,
  floodFill: (image, sr, sc, newColor) => {
    const currColor = image[sr][sc];
    if (currColor === newColor) return image;
    const queue = [[sr, sc]];

    while (queue.length) {
      const [row, col] = queue.shift();
      if (image[row][col] === currColor) {
        image[row][col] = newColor;
        if (row - 1 >= 0) queue.push([row - 1, col]);
        if (row + 1 < image.length) queue.push([row + 1, col]);
        if (col + 1 < image[0].length) queue.push([row, col + 1]);
        if (col - 1 >= 0) queue.push([row, col - 1]);
      }
    }
    return image;
  },

  checkChangedColor: () =>
    set((state) => ({ hasChangedColor: !state.hasChangedColor })),
  setBucket: () => set((state) => ({ selectedTools: state.bucket })),
  setBrush: () => set((state) => ({ selectedTools: state.brush })),
  setEraser: () => set((state) => ({ selectedTools: state.eraser })),
  setColor: () => set((state) => ({ selectedColor: state.selectedColor })),
});

const useStore = create(devtools(store));

export default useStore;
