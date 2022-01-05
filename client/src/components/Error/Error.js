// imports
import './Error.css';

const Error = function (errorMessage) {
  return `
    <div class="error">
    <h5 class="heading heading--5 heading--error"> Error </h5>
    <p class="error__message">${errorMessage} </p>
    </div>
  `;
};

// exports
export default Error;
