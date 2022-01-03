// imports
import './Rover.css';
import Loader from '../Loader/Loader';

const RoverInfo = function (rover) {
  // get teh rover status
  const status = rover.status === 'active' ? 'active' : 'deactive';

  return `
  <div class="rover__info">
  <span class="rover__info-value rover__info-value--status rover__info-value--${status}">${rover.status}</span>
    <span class="rover__info-value rover__info-value--name">${rover.name}</span>
    <span class="rover__info-label">Launch Date</span><span class="rover__info-value">${rover.launchDate} </span>
    <span class="rover__info-label">Landing Date</span><span class="rover__info-value">${rover.landingDate} </span>
  </div>
  `;
};

const RoverPhotos = function (rover) {
  // make sure rover photos  not undefined and > 0
  if (!rover.photos?.length ?? -1 <= 0) return '';

  const roverPhotosString = rover.photos.map((photo) => `
    <div class="rover__photo-container">
      <div class="rover__photo-date">
        <svg class="rover__photo-date--icon">
          <use href="./assets/solid.svg#calendar-alt">
        </svg>
      <span class="rover__photo-date--text">${photo.earth_date} </span>
      </div>
      <img class="rover__photo" src="${photo.img_src}" alt="${rover.name}">
      <span class="rover__photo-camera">${photo.camera.full_name}</span>
    </div>
    `).join('');

  // return rover photo string
  return roverPhotosString;
};

const Rover = function (rover, isLoading) {
  // if isLoading
  if (isLoading) {
    // return spinner
    return `
    <section class="rover">
  ${Loader()}
    </section>
    `;
  }

  return `
    <section class="rover">
      ${RoverInfo(rover)}
      ${RoverPhotos(rover)}
    </section>
    `;
};

// exports
export default Rover;
