class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({
      baseURL: this.BASE_URL,
    });
  }

  getFullList() {
    // this.api.get(`${this.BASE_URL}/characters`);
    return this.api.get('/characters');
  }

  getOneRegister(characterId) {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister(characterInfo) {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister(characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister(characterId) {
    return this.api.delete(`/characters/${characterId}`);
  }
} // end of APIHandler
