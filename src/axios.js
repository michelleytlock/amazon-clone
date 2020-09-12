import axios from 'axios';

// BACK END
const instance = axios.create({
   baseURL: 'https://us-central1-clone-17c3b.cloudfunctions.net/api'
      // 'http://localhost:5001/clone-17c3b/us-central1/api' // THE API (cloud function) URL
})

export default instance;