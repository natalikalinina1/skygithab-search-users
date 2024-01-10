import axios from 'axios';

const GITHUB_TOKEN = 'PersonalToken';

// eslint-disable-next-line no-unused-vars
const addAuthorizationHeader = (headers) => {
  headers.set('Authorization', `Token ${GITHUB_TOKEN}`);
};

const api = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28',
  },
  // eslint-disable-next-line no-unused-vars
  transformRequest: [function (data, headers) {
    //addAuthorizationHeader(headers);    если нет персонального токена, то заголовок не используем
    return data;
  }],
});

export default api;
