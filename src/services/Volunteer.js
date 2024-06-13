import api from '../api/config'

export const  getVolunteers = async () => {
    let data = await api.get('volunteer').then(result => result.data);
    return data;
}

export const createVolunteer = async (volunteer) => {
    let data = await api.post('volunteer', volunteer).then(result => result.data);
    return data;
}

export const deleteVolunteer  = async (id) => {
    let data = await api.delete(`volunteer/${id}`).then(result => result.data);
    return data;
}

export const updateVolunteerVerification = async (id, newVolunteerData) => {
    const response = await api.patch(`volunteer/${id}`, newVolunteerData);
    return response.data;
  };