export default class ApiService {
  _apiBase = 'https://www.omdbapi.com/?&apikey=4b99ca0c&plot=full&s=';

  _dataHolder = null;

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const answer = await res.json();
    return answer;
  }

  getId(data) {
    this._dataHolder = Object.assign({}, data);
    if (this._dataHolder.Search) {
      const currentData = this._dataHolder.Search;
      const id = [...currentData].map(el => el.imdbID);
      const urls = id.map(i => `${this._apiBase}&i=${i}`);
      const requests = urls.map(url => fetch(url));
      return Promise.all(requests)
        .then(responses => responses)
        .then(responses => Promise.all(responses.map(answer => answer.json())))
        .then(info =>
          info.map(full => {
            const { Title, Poster, Year, imdbRating } = full;
            return (this._dataHolder.result = {
              Title,
              Poster,
              Year,
              imdbRating,
            });
          })
        );
    }
    document.body.classList.add('load-error');
    setTimeout(() => window.location.reload(), 500);
  }
}
