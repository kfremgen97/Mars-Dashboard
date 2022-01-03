// imports
import './Day.css';
import Loader from '../Loader/Loader';

const DayInfo = function (day) {
  return `
    <figure class="day__photo-container">
      <img class="day__photo" src="${day.url}" alt="${day.title}">
      <figcaption class="day__text"> ${day.explanation}</figcaption>
    </figure>  
  `;
};

const Day = function (day, isLoading) {
  // if isLoading
  if (isLoading) {
    // return spinner
    return `
      <section class="dayr">
    ${Loader()}
      </section>
      `;
  }
  
  return `
    <section class="day">
    ${DayInfo(day)}
    </section>
  `;
};

// exports
export default Day;
