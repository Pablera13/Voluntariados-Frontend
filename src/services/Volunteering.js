import api from '../api/config'

export const  getVolunteerings = async () => {
    let data = await api.get('volunteering').then(result => result.data);
    return data;
}

export const getVolunteeringById = async (id) => {
    let data = await api.get(`volunteering/${id}`).then(result => result.data);
    return data;
}