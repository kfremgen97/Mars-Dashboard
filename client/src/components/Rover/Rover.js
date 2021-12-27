// imports
import './Rover.css';

const RoverInfo = function (rover) {
  // get teh rover status
  const status = rover.status === 'active' ? 'active' : 'deactive';

  return `
  <div class="rover__info">
    <span class="rover__info-value rover__info-value--status rover__info-value--${status}">active</span>
    <span class="rover__info-label">Launch Date</span><span class="rover__info-value">${rover.launchDate} </span>
    <span class="rover__info-label">Landing Date</span><span class="rover__info-value">${rover.landingDate} </span>
  </div>
  `;
};

const RoverPhoto = function (rover) {
  // make sure rover photos  not undefined and > 0
  if (!rover.photos?.photos?.length ?? -1 <= 0) return '';

  // get the current photo based on index
  const photo = rover.photos.photos[rover.photos.index];

  return `
  <figure class="rover__photo-container">
    <img class="rover__photo" src="${photo.img_src}" alt="${rover.name}">
    <figcaption class="rover__photo-text">
      <span class="rover__photo-label">Photo Date</span><span class="rover__photo-value">${photo.earth_date} </span>
      <span class="rover__photo-label">Camera</span><span class="rover__photo-value">${photo.camera.full_name}</span>
    </figcaption>
  </figure>
  `;
};

const Rover = function (rover) {
  return `
    <section class="rover">
      ${RoverInfo(rover)}
      ${RoverPhoto(rover)}
    </section>
    `;
};

// exports
export default Rover;
