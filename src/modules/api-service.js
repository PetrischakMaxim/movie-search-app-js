export default class ApiService {
  _apiBase = 'https://www.omdbapi.com/?&apikey=4b99ca0c';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  _transformPerson(person) {
    return {
      id: person,
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor,
    };
  }
}
