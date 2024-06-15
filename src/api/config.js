import axios from "axios";

const api = axios.create({
     baseURL: 'https://voluntariados-backend.onrender.com/',
    //  baseURL: 'http://localhost:3000/',

  });

export default api