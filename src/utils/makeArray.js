export const makeArray = (column, row, color) => {
  let canvas = Array(column);

  for (let x = 0; x < column; x++) {
    let canvasRow = Array(column);

    for (let y = 0; y < row; y++) {
      canvasRow[y] = color;
    }

    canvas[x] = canvasRow;
  }

  return canvas;
};
