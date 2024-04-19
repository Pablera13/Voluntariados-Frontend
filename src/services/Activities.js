import api from '../api/config'

export const  getEvents = async () => {
    let data = await api.get('event').then(result => result.data);
    return data;
}

export const createEvent = async (event) => {
    let data = await api.post('event', event).then(result => result.data);
    return data;
}