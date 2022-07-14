import { getDataFromStorage, initStorage } from './storage';

export const initialSetup = (storage) => {
  const dataStored = getDataFromStorage(storage);

  if (dataStored) {
    console.log('있음', dataStored);
    return;
  } else {
    initStorage(storage);
  }
};
