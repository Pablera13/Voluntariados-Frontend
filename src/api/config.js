import axios from "axios";

const api = axios.create({
    // baseURL: 'https://proyectovoluntariados.azurewebsites.net/',
    baseURL: 'http://localhost:3000/',

  });

export default api