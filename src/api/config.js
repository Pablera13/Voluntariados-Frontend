import axios from "axios";

const api = axios.create({
    baseURL: 'https://proyectovoluntariados.azurewebsites.net/',
  });

export default api