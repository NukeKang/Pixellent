export const makePalette = (colors, selectedColor) => {
  const palette = colors.slice();
  palette.push(selectedColor);

  return palette;
};
