/** @format */

const BASE_URL = `https://kiatu-backend.herokuapp.com/api`;
const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// A helper class to consume http requests
// with method: post, get, delete, put
class API {
  static async post(url, payload) {
    const res = await fetch(`${BASE_URL + url}`, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  }

  static async get(url) {
    const res = await fetch(`${BASE_URL + url}`, {
      method: 'GET',
      headers: HEADERS,
    });
    const data = await res.json();
    return data;
  }
}

export default API;
