export default function prepareData(data) {
  const template = document.querySelector('#card');
  const { content } = template;
  const title = content.querySelector('.card__name');
  const poster = content.querySelector('.card__image');
  const release = content.querySelector('.card__year');
  const rating = content.querySelector('.card__value');
  if (data.Poster === 'N/A') data.Poster = './img/noposter.jpg';
  title.textContent = data.Title;
  poster.src = data.Poster;

  poster.alt = data.Title;
  release.textContent = data.Year;
  rating.textContent = data.imdbRating;
  return template;
}
