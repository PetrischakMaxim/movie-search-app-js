import Slider from './modules/glide';
import ApiService from './modules/api-service';
import prepareDate from './modules/prepare-data';
import activateTemplate from './modules/activate-template';
import getRandomCard from './modules/get-random-card';

const slider = document.querySelector('.slider');
const sliderWrapper = slider.querySelector('.glide__slides');

function updateCards() {
  [...sliderWrapper.children].forEach(child => child.remove());
}

const loader = document.querySelector('.loader');
function toggleLoader() {
  loader.classList.toggle('loader--hidden');
  slider.classList.toggle('slider--hidden');
}

function renderCards(value) {
  const api = new ApiService();
  api.getResource(value).then(data => {
    const container = new DocumentFragment();
    const response = api.getId(data);
    response
      .then(res => {
        res.map(el => container.append(activateTemplate(prepareDate(el))));
        sliderWrapper.append(container);
      })
      .then(() => {
        setTimeout(() => {
          toggleLoader();
          const SLIDER = new Slider();
          SLIDER.init();
        }, 500);
      });
  });
}
/* Render first cards */
renderCards(getRandomCard());

/* Form */
const searchForm = document.querySelector('.search-form');
const formField = searchForm.querySelector('.search-form__field');
searchForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const { value } = formField;
  value.replace(/[^A-Za-z0-9]/gi, '');
  toggleLoader();
  updateCards();
  setTimeout(() => {
    renderCards(value);
    searchForm.reset();
  }, 500);
});
