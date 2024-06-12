import axios from "axios";
import api from '../api/config'



export const getIdValidate = async (id) => {
    let data = await api.get(`validateId/${id}`).then(result => result.data);
    return data;
}