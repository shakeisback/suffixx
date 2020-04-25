import axios from 'axios';

const http = axios.create({
  baseURL: 'https://cloud.squidex.io',
  headers: {
    'X-Flatten': true,
    'X-Resolve-Urls': 'image',
  },
});

export default http;
