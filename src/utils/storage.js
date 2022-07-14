const STORAGE_KEY = 'pixellent';

export const initStorage = (storage) => {
  storage.setItem(STORAGE_KEY, '[]');
};

// export const saveLocalStorage = (location) => {
//   if (localStorage.getItem("localImgSrc") === null) {
//     localStorage.setItem("localImgSrc", "[]");
//   }

//   const preData = JSON.parse(localStorage.getItem("localImgSrc"));
//   preData.push(location);

//   localStorage.setItem("localImgSrc", JSON.stringify(preData));
// };

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

export function getDataFromStorage(storage) {
  try {
    const data = storage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : false;
  } catch (error) {
    console.error(error);
    return false;
  }
}
