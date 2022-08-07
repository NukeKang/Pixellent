import { copyArray } from '../utils/copyArray';
import { floodFill } from '../utils/floodFill';
import { makeArray } from '../utils/makeArray';
import { makePalette } from '../utils/makePalette';

test('copyArray 함수는 깊은 복사가 된 배열을 반환해야 한다.', () => {
  const array = [1, 2, 3];

  expect(copyArray(array) === array).toBeFalsy();
});

test('makeArray 함수는 자신이 고른 색깔이 요소로 짜여진 2차원 배열을 반환해야 한다.', () => {
  const color = '#fff';
  const column = 2;
  const row = 2;

  expect(makeArray(column, row, color)).toEqual([
    ['#fff', '#fff'],
    ['#fff', '#fff'],
  ]);
});

test('makePalette 함수는 HexCode로 이루어진 배열을 반환해야 한다.', () => {
  const colors = ['#000000', '#ff0000', '#e91e63', '#9c27b0'];
  const myColor = '#fd12';

  expect(makePalette(colors, myColor)).toEqual([
    '#000000',
    '#ff0000',
    '#e91e63',
    '#9c27b0',
    '#fd12',
  ]);
});

test('floodFill 함수를 통해 채우기(Bucket) 기능을 사용할 수 있어야 한다.', () => {
  const pixelCanvas = [
    ['#fff', '#fff', '#fff'],
    ['#fff', '#fff', '#000'],
    ['#fff', '#000', '#ff0000'],
  ];
  const row = 1;
  const column = 1;
  const newColor = '#9c27b0';

  expect(floodFill(pixelCanvas, row, column, newColor)).toEqual([
    ['#9c27b0', '#9c27b0', '#9c27b0'],
    ['#9c27b0', '#9c27b0', '#000'],
    ['#9c27b0', '#000', '#ff0000'],
  ]);
});
