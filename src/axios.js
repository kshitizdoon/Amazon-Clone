import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-ae1ae/us-central1/api' //The API(cloud) URL
});

export default instance;