import axios from 'axios';

// const jwt = localStorage.getItem('token');

const instance = axios.create({
  // baseURL: 'http://localhost:8080',
  baseURL: 'https://wordcloud.click',
  withCredentials: true,
  // headers: {
  //   Authorization: `${jwt}`
  // }
});

export default instance;
