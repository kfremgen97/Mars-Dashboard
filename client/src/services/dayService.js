// get day info
const getDayInfo = function () {
  const url = 'http://localhost:8080/api/day/picture';
  return fetch(url)
    .then((response) => {
      // check to make sure response is ok
      if (!response) throw new Error('Unable to get picture of the day');
      // return javascript object of json
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // make sure data doesnt have an error
      if (data.error) throw new Error(data.error);
      // return the data
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// exports
export default getDayInfo;
