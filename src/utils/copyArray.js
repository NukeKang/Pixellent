import { cloneDeep } from 'lodash';

export const copyArray = (array) => {
  let newArray = '';

  newArray = cloneDeep(array);

  return newArray;
};
