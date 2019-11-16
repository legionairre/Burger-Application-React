import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-burger-react-legionairre.firebaseio.com/'
});

export default instance;