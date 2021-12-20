// get day info
const getDayInfo = function () {
  return fetch('../assets/json/day.json')
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

// exports
export default getDayInfo;
