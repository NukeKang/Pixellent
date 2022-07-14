const STORAGE_KEY = 'pixellent';

const saveDataToStorage = (storage, data) => {
  try {
    storage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
};

export const initStorage = (storage) => {
  storage.setItem(STORAGE_KEY, '[]');
};

export const saveProjectToStorage = (storage, projectData) => {
  try {
    const dataStored = JSON.parse(storage.getItem(STORAGE_KEY));
    dataStored.push(projectData);

    storage.setItem(STORAGE_KEY, JSON.stringify(dataStored));
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const getDataFromStorage = (storage) => {
  try {
    const data = storage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const removeProjectFromStorage = (storage, indexToRemove) => {
  const dataStored = getDataFromStorage(storage);
  if (dataStored) {
    let newCurrent = 0;
    dataStored.splice(indexToRemove, 1);
    if (dataStored.length === 0) {
      newCurrent = -1;
    } else if (dataStored.current > indexToRemove) {
      newCurrent = dataStored.current - 1;
    }
    dataStored.current = newCurrent;
    return saveDataToStorage(storage, dataStored);
  }
  return false;
};
