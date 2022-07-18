import { getDataFromStorage, initStorage } from './storage';

export const initialSetup = (storage) => {
  const dataStored = getDataFromStorage(storage);

  if (dataStored) {
    return;
  } else {
    initStorage(storage);
  }
};
