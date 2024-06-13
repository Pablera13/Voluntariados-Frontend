import api from '../api/config'

export const  getUserById = async (id) => {
    let data = await api.get(`users/${id}`).then(result => result.data);
    return data;
}
