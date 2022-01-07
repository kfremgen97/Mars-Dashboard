// get day info
const getDayInfo = function () {
  const requestURL = 'http://localhost:8080/api/day/picture';
  return fetch(requestURL)
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

      // get the data
      const {
        date, title, explanation, url, media_type: mediaType,
      } = data;
      // return the data
      return {
        date,
        title,
        explanation,
        url,
        mediaType,
      };
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
};

// exports
export default getDayInfo;
