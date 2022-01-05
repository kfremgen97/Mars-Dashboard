// imports
import './Day.css';
import Loader from '../Loader/Loader';
import Error from '../Error/Error';

const DayInfo = function (day) {
  return `
  <div class="day__info">
    <h3 class="heading heading--3 heading--center">
      ${day.title}
    </h3>
  </div>
  `;
};

const DayPhoto = function (day) {
  return `
  <figure class="day__photo-container">
    <img class="day__photo" src="${day.url}" alt="${day.title}">
    <figcaption class="day__text"> ${day.explanation}</figcaption>
  </figure>  
`;
};

const Day = function (day, error, isLoading) {
  // if isLoading
  if (isLoading) {
    // return spinner
    return `
      <section class="day">
    ${Loader()}
      </section>
      `;
  }

  if (error.showError) {
    return `
      <section class="day">
    ${Error(error.dayMessage)}
      </section>
      `;
  }

  return `
    <section class="day">
    ${DayInfo(day)}
    ${DayPhoto(day)}
    </section>
  `;
};

// exports
export default Day;
