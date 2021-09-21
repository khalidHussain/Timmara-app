import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://timmara.herokuapp.com', 
});

export default instance;