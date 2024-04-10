import api from '../api/config'

export const  getVolunteers = async () => {
    let data = await api.get('volunteer').then(result => result.data);
    return data;
}

