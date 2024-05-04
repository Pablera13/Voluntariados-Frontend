import axios from "axios";

const api = 'http://localhost:3000/validateId/'

export const getIdValidate = async (id) => {
    let data = await axios.get(`${api}${id}`).then(result => result.data);
    return data;
}