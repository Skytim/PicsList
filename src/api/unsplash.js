import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 84a816abf8172b10833ee9ee16f7b217b8c23880d7d14fbd1f611addb82f49e2'
  }
});
