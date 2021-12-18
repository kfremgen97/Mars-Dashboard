// imports
import './Day.css';

const DayInfo = function (day) {
  return `
    <figure class="day__info">
      <img class="day__photo" src="${day.url}" alt="${day.title}">
      <figcaption class="day__text"> ${day.explanation}</figcaption>
    </figure>  
  `;
};

const Day = function (day) {
  return `
    <section class="day">
    ${DayInfo(day)}
    </section>
  `;
};

// exports
export default Day;
