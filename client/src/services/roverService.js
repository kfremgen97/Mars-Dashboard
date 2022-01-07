// get rover info
export const getRoverInfo = function (name) {
  console.log(name);
  const url = `http://localhost:8080/api/rover/info?rover=${name}`;
  return fetch(url)
    .then((response) => {
      // check to make sure response is ok
      if (!response.ok) throw new Error('Unable to get rover info');
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // make sure data doesnt have an error property
      if (data.error) throw new Error(data.error);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// get rover photos
export const getRoverPhotos = function (name, maxSol) {
  const url = `http://localhost:8080/api/rover/picture?rover=${name}&sol=${maxSol}`;
  return fetch(url)
    .then((response) => {
      // check to make sure response is ok
      if (!response.ok) throw new Error('Unable to get rover photos');
      return response.json();
    })
    .then((data) => {
      console.log(data);
       // make sure data doesnt have an error
       if (data.error) throw new Error(data.error);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};
