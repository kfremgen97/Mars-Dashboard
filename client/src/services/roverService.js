// get rover info
export const getRoverInfo = function (name) {
  console.log(name);
  return fetch('../assets/json/rover-info.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// get rover photos
export const getRoverPhotos = function (name, maxSol) {
  console.log(name, maxSol);
  return fetch('../assets/json/rover-photos.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
